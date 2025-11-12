<template>
  <ul class="table-pagination__pager" v-if="resultsTotal > 0">
    <li class="table-pagination__item count">
      <strong>
        {{ resultsStart }}-{{ resultsEnd }}
      </strong>
      of {{ resultsTotal }}
    </li>

    <li class="table-pagination__item">
      <button 
        type="button" 
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
        aria-label="Go to previous page"
        class="prev"
      >
        <svg width="8px" height="13px" viewBox="0 0 8 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>Previous</title>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="m---stc---mobile---v2" transform="translate(-244.000000, -865.000000)" fill="#00639E" fill-rule="nonzero" stroke="#37474F" stroke-width="0.5">
              <path d="M242.5,868.798828 C242.5,868.759766 242.506595,868.72168 242.519784,868.68457 C242.532974,868.647461 242.554642,868.615234 242.584789,868.587891 C242.641316,868.529297 242.709147,868.5 242.788284,868.5 C242.86742,868.5 242.935252,868.529297 242.991778,868.587891 L248,873.773438 L253.002569,868.587891 C253.059096,868.529297 253.127869,868.5 253.20889,868.5 C253.289911,868.5 253.358684,868.529297 253.415211,868.587891 C253.471737,868.646484 253.5,868.716797 253.5,868.798828 C253.5,868.880859 253.471737,868.951172 253.415211,869.009766 L248.203494,874.412109 C248.146968,874.470703 248.079137,874.5 248,874.5 C247.920863,874.5 247.853032,874.470703 247.796506,874.412109 L242.584789,869.009766 C242.554642,868.982422 242.532974,868.950195 242.519784,868.913086 C242.506595,868.875977 242.5,868.837891 242.5,868.798828 Z" id="Path-Copy-7" transform="translate(248.000000, 871.500000) scale(1, -1) rotate(-270.000000) translate(-248.000000, -871.500000) "></path>
            </g>
          </g>
        </svg>
      </button>
    </li>

    <li class="table-pagination__item">
      <button 
        type="button" 
        @click="onClickNextPage"
        :disabled="isInLastPage"
        aria-label="Go to next page"
        class="next"
      >
        <svg width="8px" height="13px" viewBox="0 0 8 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>Next</title>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="m---stc---mobile---v2" transform="translate(-273.000000, -865.000000)" fill="#00639E" fill-rule="nonzero" stroke="#37474F" stroke-width="0.5">
              <path d="M271.5,868.798828 C271.5,868.759766 271.506595,868.72168 271.519784,868.68457 C271.532974,868.647461 271.554642,868.615234 271.584789,868.587891 C271.641316,868.529297 271.709147,868.5 271.788284,868.5 C271.86742,868.5 271.935252,868.529297 271.991778,868.587891 L277,873.773438 L282.002569,868.587891 C282.059096,868.529297 282.127869,868.5 282.20889,868.5 C282.289911,868.5 282.358684,868.529297 282.415211,868.587891 C282.471737,868.646484 282.5,868.716797 282.5,868.798828 C282.5,868.880859 282.471737,868.951172 282.415211,869.009766 L277.203494,874.412109 C277.146968,874.470703 277.079137,874.5 277,874.5 C276.920863,874.5 276.853032,874.470703 276.796506,874.412109 L271.584789,869.009766 C271.554642,868.982422 271.532974,868.950195 271.519784,868.913086 C271.506595,868.875977 271.5,868.837891 271.5,868.798828 Z" id="Path-Copy-6" transform="translate(277.000000, 871.500000) scale(-1, -1) rotate(-270.000000) translate(-277.000000, -871.500000) "></path>
            </g>
          </g>
        </svg>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    resultsStart: {
      type: Number,
      required: true
    },
    resultsEnd: {
      type: Number,
      required: true
    },
    resultsTotal: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
  },

  computed: {
    isInFirstPage() {
      return this.currentPage === 1;
    },

    isInLastPage() {
      return this.currentPage === this.totalPages || this.totalPages === 0;
    },
  },

  methods: {
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },

    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },
  }
};
</script>