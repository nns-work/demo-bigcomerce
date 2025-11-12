<template>
  <div class="page page-report-table">
    <aside class="page-sidebar">
      <nav>
        <div class="facetedSearch sidebarBlock">
          <a
            href="#facetedSearch-navList"
            role="button"
            class="facetedSearch-toggle toggleLink button"
            :class="{'is-open': mobileFiltersOpen}"
            data-collapsible
            aria-controls="facetedSearch-navList"
            :aria-expanded="mobileFiltersOpen ? 'true' : 'false'"
            @click.prevent="mobileFiltersOpen = !mobileFiltersOpen">
            <span class="facetedSearch-toggle-indicator">
              <span class="toggleLink-text toggleLink-text--on">
                Filter Assemblies
                <i class="icon" aria-hidden="true">
                  <svg><use xlink:href="#icon-close"></use></svg>
                </i>
              </span>

              <span class="toggleLink-text toggleLink-text--off">
                Filter Assemblies
                <i class="icon" aria-hidden="true">
                  <svg><use xlink:href="#icon-filters"></use></svg>
                </i>
              </span>
            </span>
          </a>
            
          <div
            id="facetedSearch-navList"
            class="facetedSearch-navList"
            :class="{'is-open': mobileFiltersOpen}"
            :aria-hidden="mobileFiltersOpen ? 'false' : 'true'">

            <div class="facetedSearch__selected-filters">
              <p class="facetedSearch__count">
                {{ filteredValues.length }} results
              </p>
            
              <div class="facetedSearch-refineFilters sidebarBlock">
                <template v-if="activeFilters.length">
                  <ul class="inlineList inlineList--labels">
                    <li v-for="(filter, index) in activeFilters"
                      :key="index">
                      <a
                        @click.prevent="removeFilter(filter.sectionTitle, filter.subsectionTitle)"
                        href="#"
                        class="facetLabel"
                        rel="nofollow"
                        data-faceted-search-facet="">
                        {{ filter.subsectionTitle }}
                        <svg class="icon">
                          <use xlink:href="#icon-close"></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <a @click.prevent="clearAllFilters()" href="#"
                    data-faceted-search-facet=""
                    class="facetedSearch-refineFilters__clear">
                    Clear all
                  </a>
                </template>
                <template v-else>
                  No filters applied
                </template>
              </div>
            </div>
            <div class="accordion accordion--navList">
              <div class="accordion-block"
                v-for="(sectionObject, sectionTitle, index) in filterSections"
                :key="index">
                <div
                  class="accordion-navigation toggleLink"
                  :class="{'is-open': sectionObject.open}"
                  role="button"
                  :aria-controls="`facetedSearch-content--${formatTitle(sectionTitle)}`"
                  :aria-expanded="isFilterOpen(sectionTitle) ? 'true' : 'false'"
                  @click.prevent="toggleSection(sectionTitle)"
                  >
                  <h5 class="accordion-title">
                    {{ sectionTitle }}
                  </h5>

                  <div class="accordion-navigation-actions">
                    <a
                      v-if="hasActiveFilters(sectionObject.subsections)"
                      @click.prevent="clearSectionFilters(sectionTitle)"
                      href="#"
                      class="facetedSearch-clearLink"
                      data-faceted-search-facet="">
                      Clear
                    </a>
                    <svg class="icon accordion-indicator toggleLink-text toggleLink-text--off">
                      <use xlink:href="#icon-chevron-down-thick"></use>
                    </svg>
                    <svg class="icon accordion-indicator toggleLink-text toggleLink-text--on">
                      <use xlink:href="#icon-chevron-up-thick"></use>
                    </svg>
                  </div>
                </div>

                <div
                  :id="`facetedSearch-content--${formatTitle(sectionTitle)}`"
                  class="accordion-content"
                  :class="{'is-open': isFilterOpen(sectionTitle)}"
                  :aria-hidden="isFilterOpen(sectionTitle) ? 'false' : 'true'">
                  <ul
                    :id="`facetedSearch-navList--${formatTitle(sectionTitle)}`"
                    :data-facet="sectionTitle"
                    class="navList"
                    data-has-more-results="false">
                    <li class="navList-item"
                      v-for="(subsectionSelected, subsectionTitle, subsectionIndex) in sectionObject.subsections"
                      :key="subsectionIndex">
                      <a
                        href="#"
                        @click.prevent="toggleFilter(sectionTitle, subsectionTitle)"
                        :class="{'is-selected': subsectionSelected}"
                        class="navList-action navList-action--checkbox"
                        rel="nofollow" data-faceted-search-facet="">
                        {{ subsectionTitle }}
                        <span class="number"></span>
                        <span class="navList-action-close" aria-hidden="true">
                          <svg class="icon">
                            <use xlink:href="#icon-close"></use>
                          </svg>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </aside>
    <main class="page-content">
      <div class="report-table">
        <!-- <div class="report-table__search">
          <label for="reporttable_search">
            Search:
          </label>
          <input
            id="reporttable_search"
            name="reporttable_search"
            v-model="searchVal"
            @input="currentPage = 1"
            type="text">
        </div> -->
        <div class="report-table__sort">
          <div class="report-table__sort-field">
            <label for="sort-name">
              Sort By
            </label>
            <select id="sort-name" v-model="sortName">
              <option value="STC">
                STC
              </option>
              <option value="IIC" v-if="tab == 'Floor-Ceiling Assemblies'">
                IIC
              </option>
              <option value="HIIC" v-if="tab == 'Floor-Ceiling Assemblies'">
                HIIC
              </option>
            </select>
          </div>
          <div class="report-table__sort-field">
            <label for="sort-direction">
              Sort Direction
            </label>
            <select id="sort-direction" v-model="sortDirection">
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
        <table class="report-table__table">
            <thead>
                <tr>
                    <th>
                      Image
                    </th>
                    <th>
                      Assembly
                    </th>
                    <th>
                      Assembly Details
                    </th>
                    <th class="centered rating-number-col">
                      <span class="report-table-sort">
                        STC
                        <span class="report-table-sort__icons">
                          <button
                            @click.prevent="sort('asc', 'STC')"
                            :class="{'active' : isSorted('asc', 'STC')}">
                            <svg viewBox="0 0 24 24"><path d="M5 15h14l-7-8z"/></svg>
                          </button>
                          <button
                            @click.prevent="sort('desc', 'STC')"
                            :class="{'active' : isSorted('desc', 'STC')}">
                            <svg viewBox="0 0 24 24"><path d="m11.998 17 7-8h-14z"/></svg>
                          </button>
                        </span>
                      </span>
                    </th>
                    <th
                      v-if="tab == 'Floor-Ceiling Assemblies'"
                      class="centered rating-number-col">
                      <span class="report-table-sort">
                        IIC
                        <span class="report-table-sort__icons">
                          <button
                            @click.prevent="sort('asc', 'IIC')"
                            :class="{'active' : isSorted('asc', 'IIC')}">
                            <svg viewBox="0 0 24 24"><path d="M5 15h14l-7-8z"/></svg>
                          </button>
                          <button
                            @click.prevent="sort('desc', 'IIC')"
                            :class="{'active' : isSorted('desc', 'IIC')}">
                            <svg viewBox="0 0 24 24"><path d="m11.998 17 7-8h-14z"/></svg>
                          </button>
                        </span>
                      </span>
                    </th>
                    <th
                      v-if="tab == 'Floor-Ceiling Assemblies'"
                      class="centered rating-number-col">
                      <span class="report-table-sort">
                        HIIC
                        <span class="report-table-sort__icons">
                          <button
                            @click.prevent="sort('asc', 'HIIC')"
                            :class="{'active' : isSorted('asc', 'HIIC')}">
                            <svg viewBox="0 0 24 24"><path d="M5 15h14l-7-8z"/></svg>
                          </button>
                          <button
                            @click.prevent="sort('desc', 'HIIC')"
                            :class="{'active' : isSorted('desc', 'HIIC')}">
                            <svg viewBox="0 0 24 24"><path d="m11.998 17 7-8h-14z"/></svg>
                          </button>
                        </span>
                      </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, index) in paginatedResults" :key="index">
                  <td class="centered image-col">
                    <a
                      :href="value['Image URL']"
                      class="mfp-image">
                      <img
                        :src="value['Image URL']"
                        :alt="value['Name']">
                    </a>
                  </td>
                  <td v-html="value['Name']" class="title-col">
                  </td>
                  <td class="details-col">
                    <span v-html="addBullets(value['Structure Details'])"></span>
                  </td>
                  <td class="mobile-col">
                    <a href="#" @click.prevent="openPopup(index)" class="mobile-col-link">
                      <span v-html="value['Name']" class="mobile-title">
                      </span>
                      <span class="mobile-ratings">
                        <span v-if="value['STC']">
                          STC: {{ value['STC'] }}
                        </span>
                        <span v-if="value['IIC']">
                          IIC: {{ value['IIC'] }}
                        </span>
                        <span v-if="value['HIIC']">
                          HIIC: {{ value['HIIC'] }}
                        </span>
                      </span>
                      <svg width="8px" height="13px" viewBox="0 0 8 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <title>Open Popup</title>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="m---stc---mobile---v2" transform="translate(-273.000000, -865.000000)" fill="#00639E" fill-rule="nonzero" stroke="#37474F" stroke-width="0.5">
                            <path d="M271.5,868.798828 C271.5,868.759766 271.506595,868.72168 271.519784,868.68457 C271.532974,868.647461 271.554642,868.615234 271.584789,868.587891 C271.641316,868.529297 271.709147,868.5 271.788284,868.5 C271.86742,868.5 271.935252,868.529297 271.991778,868.587891 L277,873.773438 L282.002569,868.587891 C282.059096,868.529297 282.127869,868.5 282.20889,868.5 C282.289911,868.5 282.358684,868.529297 282.415211,868.587891 C282.471737,868.646484 282.5,868.716797 282.5,868.798828 C282.5,868.880859 282.471737,868.951172 282.415211,869.009766 L277.203494,874.412109 C277.146968,874.470703 277.079137,874.5 277,874.5 C276.920863,874.5 276.853032,874.470703 276.796506,874.412109 L271.584789,869.009766 C271.554642,868.982422 271.532974,868.950195 271.519784,868.913086 C271.506595,868.875977 271.5,868.837891 271.5,868.798828 Z" id="Path-Copy-6" transform="translate(277.000000, 871.500000) scale(-1, -1) rotate(-270.000000) translate(-277.000000, -871.500000) "></path>
                          </g>
                        </g>
                      </svg>
                    </a>
                    <span class="mobile-popup" v-show="activePopup == `popup-${index}`">
                      <button class="mobile-popup__back" @click.prevent="closePopup">
                        Go Back
                      </button>
                      <span class="mobile-popup__table">
                        <span class="mobile-popup__section">
                          <a
                            :href="value['Image URL']"
                            class="mfp-image">
                            <img
                              :src="value['Image URL']"
                              :alt="value['Name']">
                          </a>
                          <span v-html="value['Name']" class="mobile-title"></span>
                        </span>
                        <span class="mobile-popup__section">
                          <h5 class="mobile-popup__section-title">
                            Assembly Details
                          </h5>
                          <span class="mobile-popup__section-details"
                            v-html="addBullets(value['Structure Details'])"></span>
                        </span>
                        <span class="mobile-popup__section" v-if="value['STC']">
                          <h5 class="mobile-popup__section-title">
                            STC
                          </h5>
                          <span class="mobile-popup__section-details">
                            {{ value['STC'] }}
                          </span>
                        </span>
                        <span class="mobile-popup__section" v-if="value['IIC']">
                          <h5 class="mobile-popup__section-title">
                            IIC
                          </h5>
                          <span class="mobile-popup__section-details">
                            {{ value['IIC'] }}
                          </span>
                        </span>
                        <span class="mobile-popup__section" v-if="value['HIIC']">
                          <h5 class="mobile-popup__section-title">
                            HIIC
                          </h5>
                          <span class="mobile-popup__section-details">
                            {{ value['HIIC'] }}
                          </span>
                        </span>
                      </span>
                    </span>
                  </td>
                  <td class="centered rating-number-col">
                    {{ value['STC'] }}
                  </td>
                  <td
                    v-if="tab == 'Floor-Ceiling Assemblies'"
                    class="centered rating-number-col">
                    {{ value['IIC'] }}
                  </td>
                  <td
                    v-if="tab == 'Floor-Ceiling Assemblies'"
                    class="centered rating-number-col">
                    {{ value['HIIC'] }}
                  </td>
                </tr>
            </tbody>
        </table>
        <div class="table-pagination__wrapper">
          <div class="table-pagination">
            <select
              class="table-pagination__per-page"
              v-model.number="resultsPerPage"
              @change="onResultsPerPageChange">
              <option value="10">10 per page</option>
              <option value="25">25 per page</option>
              <option value="50">50 per page</option>
              <option value="100">100 per page</option>
            </select>
            <pagination
              :results-start="resultsStartValue + 1"
              :results-end="resultsEndValue"
              :results-total="totalResults"
              :total-pages="pageCount"
              :current-page="currentPage"
              @pagechanged="onPageChange"
            ></pagination>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Pagination from './components/Pagination.vue';

export default {
  props: {
    tab: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      mobileFiltersOpen: false,
      resultsPerPage: 10,
      resultsStartValue: 0,
      resultsEndValue: 0,
      currentPage: 1,
      allResults: {},
      filterSections: {},
      activeFilters: [],
      searchVal: '',
      currentSort: {},
      activePopup: '',
      sortName: '',
      sortDirection: '',
    };
  },

  components: {
    Pagination
  },

  created() {
    if ( this.tab ) {
      const apiKey = 'AIzaSyAB4EOa3F9cchd7CstF0vJZZ3yrnyCflaY';
      const spreadsheetId = '13-5_kDPlcYemWy9sDNZT9ZVMwY0T018U_ZXCVp3_aA0';
      const sheetName = this.tab;
      const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;
      fetch(sheetUrl)
        .then(response => response.json())
        .then(data => {
          if (data.values) {
            this.allResults = this.tableToObject(data.values);

            this.setFilters();
          
            this.prefillActiveFilters();
            this.prefillPageFilters();
          }
        })
        .catch(error => console.error('Error:', error));
    }
  },

  computed: {
    pageCount: function() {
      if (this.filteredValues.length > 0) {
        let l = this.filteredValues.length,
          s = this.resultsPerPage;
        return Math.ceil(l / s);
      }
      return 0;
    },

    paginatedResults: function() {
      if (this.totalResults) {
        this.getResultsRange();
        return this.filteredValues.slice(
          this.resultsStartValue,
          this.resultsEndValue
        );
      }
    },

    totalResults: function() {
      if (this.filteredValues.length > 0) {
        return this.filteredValues.length;
      }
      return 0;
    },
  
    filteredValues: function() {
      let results = this.allResults;
    
      if (results.length == 0) {
        return results;
      }

      if (this.searchVal) {
        results = results.filter((value) => {
          const searchVal = this.searchVal.trim().toLowerCase();
          if (searchVal) {
            const name = value['Name'] ?
              value['Name'].trim().toLowerCase() : '';
            const details = value['Structure Details'] ?
              value['Structure Details'].trim().toLowerCase() : '';
            if (
              (name && name.includes(searchVal)) ||
              (details && details.includes(searchVal))
            ) {
              return true;
            }
            return false;
          }
          return true;
        });
      }
    
      if (this.activeFilters.length > 0) {
        Object.keys(this.filterSections).forEach(sectionTitle => {
          const section = this.filterSections[sectionTitle];
          if ( this.hasActiveFilters(section.subsections) ) {
            results = results.filter(row => {
              let passesSubsectionFilter = false;
              const rowFilterVal = row[`Filter: ${sectionTitle}`];

              Object.keys(section.subsections).forEach(subsectionTitle => {
                const rowFilterValArray = rowFilterVal ?
                  rowFilterVal.split(',') : [];
                rowFilterValArray.forEach(filterVal => {
                  if ( section.subsections[subsectionTitle]
                    && subsectionTitle == filterVal.trim()
                  ) {
                    passesSubsectionFilter = true;
                  }
                });
              });
          
              return passesSubsectionFilter;
            });
          }
        });
      }



      return results;
    },
  },

  watch: {
    currentPage: function(val) {
      const url = new URL(window.location.href);
      url.searchParams.set('currentPage', val);
      window.history.pushState(null, '', url.toString());

    },
  
    searchVal: function(val) {
      const url = new URL(window.location.href);
      url.searchParams.set('filterSearch', val);
      window.history.pushState(null, '', url.toString());
    },

    paginatedResults: function(val) {
      setTimeout(() => {
        this.initImagePopups();
      }, 1000);
    },

    sortName: function(val) {
      if (this.sortDirection) {
        this.sort(this.sortDirection, val);
      } else {
        this.sortDirection = 'asc';
      }
    },

    sortDirection: function(val) {
      if (this.sortName) {
        this.sort(val, this.sortName);
      } else {
        this.sortName = 'STC';
      }
    },
  },

  methods: {
    openPopup(index) {
      this.activePopup = `popup-${index}`;
    },
  
    closePopup() {
      this.activePopup = '';
    },
  
    initImagePopups() {
      $('.mfp-image, .mfp-iframe, .mfp-inline, .mfp-ajax')
        .magnificPopup({
          // Delay in milliseconds before popup is removed
          removalDelay: 300,

          // Class that is added to popup wrapper and background
          // make it unique to apply your CSS animations
          // just to this exact popup
          mainClass: 'mfp-fade',
          fixedContentPos: true,

          iframe: {
            patterns: {
              youtube: {
                // URL that will be set as a source for iframe.
                src: '//www.youtube.com/embed/%id%?rel=0&autoplay=1',
              },
            },
            markup: '<div class="mfp-iframe-scaler">' +
              '<button title="%title%" type="button" ' +
              'class="mfp-close">&#215;</button> ' +
              '<iframe class="mfp-iframe" frameborder="0" ' +
              'allow="autoplay; fullscreen; accelerometer; ' +
              'encrypted-media; gyroscope; picture-in-picture" ' +
              'allowfullscreen></iframe> ' +
              '</div>',
          },
        });
    },

    sort(direction, name) {
      // clear currentSort
      this.currentSort = {};
      // set currentSort
      this.currentSort[name] = direction;
    
      // sort allResults
      this.allResults.sort((a, b) => {
        return direction == 'asc' ?
          a[name] - b[name] :
          b[name] - a[name];
      });
    },

    isSorted(direction, name) {
      return this.currentSort[name] &&
        this.currentSort[name] == direction;
    },

    setFilters() {
      if (this.allResults && this.allResults.length > 0) {
        const filterSections = {};
        const filterString = 'Filter:';
      
        // set filter section titles
        Object.keys(this.allResults[0]).forEach(columnHeading => {
          const filterTitleIndex = columnHeading.indexOf(filterString);
          
          if ( filterTitleIndex >= 0 ) {
            const filterTitle = columnHeading
              .substring(filterTitleIndex + filterString.length + 1)
              .trim();
            let filterValueList = [];
          
            this.allResults.forEach(result => {
              // turn fitler values into array and trim result
              const filterValueArray =
                result[columnHeading].split(',').map(item => item.trim());
      
              filterValueList = filterValueList.concat(filterValueArray);
            });
        
            // remove duplicates and sort
            filterValueList = filterValueList.filter((item, index) => {
              return filterValueList.indexOf(item) === index;
            }).sort();

            // create filter options object
            const filterOptions = {};
            filterValueList.forEach(value => {
              filterOptions[value] = false;
            });

            filterSections[filterTitle] = {
              open: false,
              subsections: filterOptions,
            };
          }
        });

        this.filterSections = filterSections;
      }
    },

    prefillPageFilters() {
      // set Search Filter
      const currentSearchParam = this.getUrlParam('filterSearch');
      if ( currentSearchParam ) {
        this.searchVal = currentSearchParam;
      }
  
      // set resultsPerPage
      const resultsPerPageParam = this.getUrlParam('resultsPerPage');
      if ( resultsPerPageParam ) {
        this.resultsPerPage = parseInt(resultsPerPageParam);
      }

      // set currentPage
      const currentPageParam = this.getUrlParam('currentPage');
      if ( currentPageParam ) {
        this.currentPage = parseInt(currentPageParam);
        this.getResultsRange();
      }
    },

    prefillActiveFilters() {
      // set filter section titles
      Object.keys(this.filterSections).forEach(sectionTitle => {
        // get search params
        const urlFilter = this.getUrlParam(sectionTitle);
  
        // if filter exists
        if ( urlFilter ) {
          const urlFilterArray = urlFilter.split(',');
          const subsections = this.filterSections[sectionTitle]['subsections'];
          urlFilterArray.forEach(filterName => {
            // make sure subsection exists
            if (Object.keys(subsections).includes(filterName)) {
              this.filterSections[sectionTitle]['open'] = true;
              this.addFilter(sectionTitle, filterName);
            }
          });
        }
      });
    },

    getUrlParam(param) {
      const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });

      // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
      return params[param]; // "some_value"
    },

    getResultsRange() {
      this.resultsStartValue = (this.currentPage - 1) * this.resultsPerPage;
      const end = this.resultsStartValue + this.resultsPerPage;
      this.resultsEndValue = end > this.totalResults ? this.totalResults :
        end;
    },
  
    addBullets(str) {
      str = `\u2022 ${str}`;
      return str.replace(/(?:\r\n|\r|\n)/g, '<br />\u2022 ');
    },

    onPageChange(page) {
      this.currentPage = page;
    },

    onResultsPerPageChange() {
      this.currentPage = 1;
    
      const url = new URL(window.location.href);
      url.searchParams.set('resultsPerPage', this.resultsPerPage);
      window.history.pushState(null, '', url.toString());
    },

    formatTitle(title) {
      return title.replace(' ', '-');
    },

    hasActiveFilters(subsections) {
      let hasActiveFilter = false;
    
      Object.keys(subsections).forEach(key => {
        if (subsections[key]) {
          hasActiveFilter = true;
        }
      });

      return hasActiveFilter;
    },

    clearSectionFilters(sectionTitle) {
      this.currentPage = 1;
    
      const subsections = this.filterSections[sectionTitle]['subsections'];
      Object.keys(subsections).forEach(key => {
        if (subsections[key]) {
          this.removeFilter(sectionTitle, key);

          this.removeFilterFromUrl(sectionTitle, key);
        }
      });
    },

    clearAllFilters() {
      this.currentPage = 1;
  
      this.activeFilters.forEach(filter => {
        this.filterSections[filter.sectionTitle]['subsections'][filter.subsectionTitle]
          = false;

        this.removeFilterFromUrl(filter.sectionTitle, filter.subsectionTitle);
      });

      this.activeFilters = [];
    },

    addFilterToUrl(key, value) {
      const url = new URL(window.location.href);
      const currentParamVal = url.searchParams.get(key);
      let newVal = value;
      if (currentParamVal) {
        newVal = `${currentParamVal},${value}`;
      }
      url.searchParams.set(key, newVal);
      window.history.pushState(null, '', url.toString());
    },

    removeFilterFromUrl(key, value) {
      const url = new URL(window.location.href);
      const currentParamVal = url.searchParams.get(key);
      if (currentParamVal) {
        const paramArray = currentParamVal.split(',');
        const index = paramArray.indexOf(value);
        if (index > -1) { // only splice array when item is found
          paramArray.splice(index, 1); // 2nd parameter means remove one item only
        }

        // make new array into comma separated list
        url.searchParams.set(key, paramArray.toString());
        window.history.pushState(null, '', url.toString());
      }
    },

    removeFilter(sectionTitle, subsectionTitle) {
      this.filterSections[sectionTitle]['subsections'][subsectionTitle]
        = false;

      // remove from active filters
      this.activeFilters = this.activeFilters.filter((el) => {
        if ( el.sectionTitle != sectionTitle ||
          el.subsectionTitle != subsectionTitle ) {
          return true;
        }
      }); 
    },

    addFilter(sectionTitle, subsectionTitle) {
      this.filterSections[sectionTitle]['subsections'][subsectionTitle]
        = true;

      // add to active filters
      this.activeFilters.push({
        'sectionTitle': sectionTitle,
        'subsectionTitle': subsectionTitle
      });
    },

    toggleFilter(sectionTitle, subsectionTitle) {
      const filterActive =
        this.filterSections[sectionTitle]['subsections'][subsectionTitle];
      
      this.currentPage = 1;
  
      // if wasn't active but now is add filter,
      // otherwise remove filter
      if (filterActive == false) {
        this.addFilter(sectionTitle, subsectionTitle);

        // add filter to URL
        this.addFilterToUrl(sectionTitle, subsectionTitle);
      } else {
        this.removeFilter(sectionTitle, subsectionTitle);
  
        // remove filter from URL
        this.removeFilterFromUrl(sectionTitle, subsectionTitle);
      }
    },

    isFilterOpen(sectionTitle) {
      return this.filterSections[sectionTitle]['open'];
    },
  
    toggleSection(sectionTitle) {
      const sectionArray = this.filterSections[sectionTitle];
      sectionArray.open = !sectionArray.open;
    },

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
  }
};
</script>