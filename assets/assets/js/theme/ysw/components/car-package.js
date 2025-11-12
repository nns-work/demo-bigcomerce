const yswCarPackage = () => {
    const vehicleKits = document.querySelector('.ysw-l-product-vehicle-kits');

    if (!vehicleKits) return;

    const title = document.querySelector('.productView-package-title h3');
    const options = document.querySelectorAll('[data-product-attribute="set-radio"] input');

    const obj = {
        210: {
            text_1: 'Damplifier Pro &bull; 36 Sq Ft',
            text_2: 'Luxury Liner Pro &bull; 36 Sq Ft',
        },
        211: {
            text_1: 'Damplifier Pro &bull; 55 Sq Ft',
            text_2: 'Luxury Liner Pro &bull; 45 Sq Ft',
        },
        284: {
            text_1: 'Damplifier Pro &bull; 80 Sq Ft',
            text_2: 'Luxury Liner Pro &bull; 54 Sq Ft',
        },
        212: {
            text_1: 'Damplifier Pro &bull; 120 Sq Ft',
            text_2: 'Luxury Liner Pro &bull; 72 Sq Ft',
        },
        213: {
            text_1: 'Damplifier Pro &bull; 120 Sq Ft',
            text_2: 'Luxury Liner Pro &bull; 90 Sq Ft',
        },
        324: {
            text_1: 'Damplifier Pro &bull; 55 Sq Ft',
            text_2: 'Luxury Liner Pro &bull; 45 Sq Ft',
        },
        325: {
            text_1: 'Damplifier Pro &bull; 120 Sq Ft',
            text_2: 'Luxury Liner Pro &bull; 72 Sq Ft',
        },
    };

    options.forEach((option) => {
        option.addEventListener('click', (e) => {
            const label = option.nextElementSibling;
            const text = label.textContent.trim();
            const value = e.target.value;
            const text1 = obj[value].text_1;
            const text2 = obj[value].text_2;
            const $text1 = document.querySelector('.productView-package-item--first h4');
            const $text2 = document.querySelector('.productView-package-item--second h4');

            title.innerHTML = text;
            $text1.innerHTML = text1;
            $text2.innerHTML = text2;
        });
    });
};

export default yswCarPackage;
