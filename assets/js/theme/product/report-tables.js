import Vue from 'vue';
import ReportTables from '../vue/ReportTables.vue';

import '../vendor/jquery.magnific-popup.js';

export default function() {
  const reportTablesElem =
    document.querySelector('.js-report-table');

  if (reportTablesElem) {
    new Vue({
      el: reportTablesElem,
      data: {
        'tab': reportTablesElem.getAttribute('data-tab'),
      },
      /**
       * Render the component.
       * @function
       * @param {Function} createElement - Vue createElement function
       * @return {Function} - Render function that initializes EventResults.
       */
      render(createElement) {
        return createElement(
          ReportTables,
          {
            props: {
              tab: this.tab,
            },
          },
        );
      },
    });
  }
}