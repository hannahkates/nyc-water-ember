define('nyc-water/components/bar-chart', ['exports', 'd3'], function (exports, _d) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    data: [{
      name: 'John',
      value: 31
    }, {
      name: 'Anne',
      value: 33
    }, {
      name: 'Robert',
      value: 28
    }],

    addSVG: function () {
      // TODO: Generate the base SVG object
    },

    drawData: function () {
      // TODO: Draw the data
    },

    createChart: function () {
      // Clear the element, if there is something inside
      var chartEl = this.$().get(0);
      chartEl.innerHTML = '';

      // Actually create the SVG element
      this.addSVG();

      // Draw the data
      this.drawData();
    },

    // -----------------------------------------------------------------------
    // LIFECYCLE HOOKS
    // These are special functions that are called by ember at different stages
    // of the component's lifecycle.
    // -----------------------------------------------------------------------

    didInsertElement: function () {
      this.createChart();
    }

  });
});