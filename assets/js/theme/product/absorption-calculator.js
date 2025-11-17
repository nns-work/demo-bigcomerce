// absportion calculator on acoustic product pages

export default class AbsorptionCalculator {
  constructor() {
    this.absorptionCalculator = document.querySelector('.absorption-calculator');

    if (!this.absorptionCalculator) {
      return false;
    }

    const productIDField = document.querySelector('[name="product_id"]');
    this.currentProductID = productIDField ?
      productIDField.value : null;

    this.roomLengthElem = document.querySelector('#absorption-room-length');
    this.roomWidthElem = document.querySelector('#absorption-room-width');
    this.roomHeightElem = document.querySelector('#absorption-room-height');
    this.productTypeElem = document.querySelector('#absorption-product-type');
    this.productThicknessElem = document.querySelector('#absorption-product-thickness');
    this.reverbTimeElem = document.querySelector('#absorption-reverb-time');
    this.sqFtElem = document.querySelector('#absorption-sqft');
    this.resultBox = document.querySelector('.absorption-calculator__result');

    this.roomLength = 0;
    this.roomWidth = 0;
    this.roomHeight = 0;
    this.productType = this.productTypeElem.value;
    this.productThickness = 0;
    this.reverbTime = this.reverbTimeElem.value;
    this.absorptionCoefficient = 0;
    this.activeProduct = null;

    this.ceilingArea = 0;
    this.floorArea = 0;
    this.wall1Area = 0;
    this.wall2Area = 0;
    this.wall3Area = 0;
    this.wall4Area = 0;
  }

  init() {
    if (!this.absorptionCalculator) {
      return false;
    }

    const apiKey = 'AIzaSyAB4EOa3F9cchd7CstF0vJZZ3yrnyCflaY';
    const spreadsheetId = '1uHrGwUDvl1Imd5EXkymk8rEeFoRtQe4nowMnUtoYTZo';
    const sheetName = 'Sheet1';
    const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;
    fetch(sheetUrl)
      .then(response => response.json())
      .then(data => {
        if (data.values) {
          const sheetObject = this.tableToObject(data.values);
          this.calculatorInit(sheetObject);
        }
      })
      .catch(error => console.error('Error:', error));
  }

  calculatorInit(data) {
    data.forEach((item) => {
      if (
        item['Product ID'] && (
        item['Product Page Only'] != 'Yes' ||
        (item['Product Page Only'] == 'Yes' && this.currentProductID)
        )
      ) {
        this.addOptionValue(
          this.productTypeElem,
          item['Name'],
          item['Product ID'],
        );
      }
    });

    // set product field if on a product page
    if (this.currentProductID) {
      const productInSpreadsheet =
        this.productTypeElem.querySelector('[value="' + this.currentProductID + '"]');

      if (productInSpreadsheet) {
        this.productTypeElem.value = this.currentProductID;
        this.productTypeChanged(data, this.currentProductID);
        this.productTypeElem.setAttribute('disabled', true);

        this.absorptionCalculator.querySelector('.absorption-calculator__result-subtitle').style.display = 'none';
        this.absorptionCalculator.querySelector('.absorption-calculator__result-button').style.display = 'none';
      } else {
        this.absorptionCalculator.style.display = 'none';
        return;
      }
    }

    this.calculateSqFt();
    this.getTimeDescriptions();

    this.roomLengthElem.addEventListener('input', (e) => {
      this.roomLength = e.target.value.trim();

      this.calculateSqFt();
    });

    this.roomWidthElem.addEventListener('input', (e) => {
      this.roomWidth = e.target.value.trim();
  
      this.calculateSqFt();
    });

    this.roomHeightElem.addEventListener('input', (e) => {
      this.roomHeight = e.target.value.trim();

      this.calculateSqFt();
    });

    this.productThicknessElem.addEventListener('change', (e) => {
      this.absorptionCoefficient = e.target.value;

      this.calculateSqFt();
    });

    this.reverbTimeElem.addEventListener('change', (e) => {
      this.reverbTime = e.target.value;

      this.calculateSqFt();

      this.getTimeDescriptions();
    });

    this.productTypeElem.addEventListener('change', (e) => {
      this.productTypeChanged(data, e.target.value);
    });
  }

  getTimeDescriptions() {
    const timeDescriptions = document.querySelectorAll('[data-time-description]');
    timeDescriptions.forEach((time) => {
      time.style.display = 'none';
    });
    document.querySelector('[data-time-description="' + this.reverbTime + '"]')
      .style.display = 'block';
  }

  productTypeChanged(data, productID) {
    this.activeProduct = this.getProductFromID(data, productID);
    
    this.productTypeElem.classList.add('js-is-selected');

    this.productType = productID;
    this.absorptionCoefficient = this.activeProduct['Absorption Coefficient 1'];
    this.calculateSqFt();

    this.productThicknessElem.innerHTML = '';

    this.addOptionValue(
      this.productThicknessElem,
      'Material Thickness',
      '',
      true,
      true,
    );
    this.productThicknessElem.classList.remove('js-is-selected');

    if (this.activeProduct['Thickness 1'] && this.activeProduct['Thickness 1'].trim() != '') {
      this.productThicknessElem.removeAttribute('disabled');

      this.productThickness = this.activeProduct['Thickness 1'];

      this.addOptionValue(
        this.productThicknessElem,
        this.activeProduct['Thickness 1'],
        this.activeProduct['Absorption Coefficient 1'],
        false,
        false,
      );

      this.productThicknessElem.selectedIndex = 1;
      this.productThicknessElem.classList.add('js-is-selected');

      if (this.activeProduct['Thickness 2'] && this.activeProduct['Thickness 2'].trim() != '') {
        this.addOptionValue(
          this.productThicknessElem,
          this.activeProduct['Thickness 2'],
          this.activeProduct['Absorption Coefficient 2'],
          false,
          false,
        );
      }

      if (this.activeProduct['Thickness 3'] && this.activeProduct['Thickness 3'].trim() != '') {
        this.addOptionValue(
          this.productThicknessElem,
          this.activeProduct['Thickness 3'],
          this.activeProduct['Absorption Coefficient 3'],
          false,
          false,
        );
      }
    } else {
      this.productThicknessElem.setAttribute('disabled', true);
      this.productThicknessElem.classList.remove('js-is-selected');
    }
  }

  formatNumber(number) {
    const browserLanguage = navigator ? navigator.userLanguage ||
      (navigator.languages && navigator.languages.length && navigator.languages[0]) ||
      navigator.language ||
      navigator.browserLanguage ||
      navigator.systemLanguage ||
      'en-US' : 'en-US';
    const formatter = new Intl.NumberFormat(browserLanguage);
    return formatter.format(number);
  }

  calcSurfaceArea() {
    this.ceilingArea = this.roomLength * this.roomWidth;
    this.floorArea = this.roomLength * this.roomWidth;
    this.wall1Area = this.roomLength * this.roomHeight;
    this.wall2Area = this.roomLength * this.roomHeight;
    this.wall3Area = this.roomWidth * this.roomHeight;
    this.wall4Area = this.roomWidth * this.roomHeight;
  }

  getCurrentAbsorption() {
    const ceilingAbsorption = this.ceilingArea * 0.05;
    const floorAbsorption = this.floorArea * 0.1;
    const wall1Absorption = this.wall1Area * 0.05;
    const wall2Absorption = this.wall2Area * 0.05;
    const wall3Absorption = this.wall3Area * 0.05;
    const wall4Absorption = this.wall4Area * 0.05;

    return ceilingAbsorption + floorAbsorption +
      wall1Absorption + wall2Absorption +
      wall3Absorption + wall4Absorption;
  }

  calculateSqFt() {
    if (
      this.roomHeight &&
      this.roomWidth &&
      this.roomLength && 
      this.productType &&
      this.reverbTime &&
      this.absorptionCoefficient
    ) {
      this.calcSurfaceArea();
  
      const roomVolume =
        this.roomLength * this.roomWidth * this.roomHeight;
      const currentAbsorption = this.getCurrentAbsorption();

      let sqFt = 0;
    
      // if is baffle product
      if (
        this.activeProduct['Baffle Product'] && this.activeProduct['Baffle Product'] == 'Yes'
        && this.activeProduct['Baffle Square Feet']
      ) {
        const sabinesPerBaffle = this.absorptionCoefficient;
        const baffleSqFt = this.activeProduct['Baffle Square Feet'];

        const sabinesNeeded = ((0.05 * roomVolume) - (currentAbsorption * this.reverbTime))
          / this.reverbTime;
        const baffleNumber = sabinesNeeded / sabinesPerBaffle;
        sqFt = baffleNumber * baffleSqFt;
      } else {
        sqFt =
          ((0.05 * roomVolume) - (currentAbsorption * this.reverbTime))
          / (this.reverbTime * this.absorptionCoefficient);
      }

      const currentReverbTime = Number(((0.05 * roomVolume)/currentAbsorption).toFixed(2));
      
      const roundedSqft = Math.ceil(sqFt);
      const sqFtFormatted = this.formatNumber(roundedSqft);
      this.sqFtElem.value = roundedSqft > 0 ? sqFtFormatted : 0;

      this.resultBox.style.display = '';
      const resultUrl = document.querySelectorAll('.absorption-calculator__result-url');
      resultUrl.forEach(url => {
        url.setAttribute('href', this.activeProduct['Product URL']);
      });
      document.querySelector('#absorption-image')
        .setAttribute('src', this.activeProduct['Image']);
      document.querySelector('#absorption-result-title')
        .innerHTML = this.activeProduct['Name'];

      const titlePass = document.querySelector('.absorption-calculator__result-title.success');
      const titleFail = document.querySelector('.absorption-calculator__result-title.fail');

      if ( roundedSqft > 0) {
        titlePass.style.display = '';
        titleFail.style.display = 'none';
        document.querySelector('#absorption-result-sqft')
          .innerHTML = sqFtFormatted;
      } else {
        titlePass.style.display = 'none';
        titleFail.style.display = '';

        const secondsText = this.reverbTime == 1 ?
          'second' : 'seconds';
        document.querySelector('#absorption-result-time')
          .innerHTML = this.reverbTime + ' ' + secondsText;
      }

      const currentSecondsText = currentReverbTime == 1.00 ?
      'second' : 'seconds';
      document.querySelector('#absorption-result-current-reverb-time')
          .innerHTML = currentReverbTime + ' ' + currentSecondsText;
    } else {
      this.resultBox.style.display = 'none';
    }
  }

  tableToObject(values) {
    // Extract headers
    const headers = values[0];
    // Extract the body
    const rows = values.slice(1);
    // Initialize keys obj
    const arr = [];
    // For each header
    rows.forEach((row) => {
      const newRow = {};
      row.forEach((item, index) => {
        newRow[headers[index]] = item;
      });
      arr.push(newRow);
    });
    return arr;
  }

  getProductFromID(data, id) {
    return data.find((o) => { 
      return o['Product ID'] === id
    });
  }

  addOptionValue(elem, text, value, disabled = false, selected = false) {
    const option = document.createElement('option');
    option.text = text;
    option.value = value;
    if (disabled) {
      option.setAttribute('disabled', true);
    }
    if (selected) {
      option.setAttribute('selected', true);
    }
    elem.appendChild(option);
  }
}
