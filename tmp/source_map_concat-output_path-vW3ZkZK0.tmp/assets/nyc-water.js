"use strict";

define('nyc-water/app', ['exports', 'nyc-water/resolver', 'ember-load-initializers', 'nyc-water/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('nyc-water/components/bar-chart', ['exports', 'd3'], function (exports, _d) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    // data: [
    //   {
    //     name: 'John',
    //     value: 31
    //   },
    //   {
    //     name: 'Anne',
    //     value: 33
    //   },
    //   {
    //     name: 'Robert',
    //     value: 28
    //   }
    // ],

    // addSVG: function() {
    //   // TODO: Generate the base SVG object
    // },

    // drawData: function() {
    //   // TODO: Draw the data
    // },

    // createChart: function() {
    //   // Clear the element, if there is something inside
    //   var chartEl = this.$().get(0);
    //   chartEl.innerHTML = '';

    //   // Actually create the SVG element
    //   this.addSVG();

    //   // Draw the data
    //   this.drawData();
    // },

    // -----------------------------------------------------------------------
    // LIFECYCLE HOOKS
    // These are special functions that are called by ember at different stages
    // of the component's lifecycle.
    // -----------------------------------------------------------------------

    didInsertElement: function () {
      // set the dimensions of the canvas
      var margin = { top: 20, right: 20, bottom: 70, left: 85 },
          width = 1350 - margin.left - margin.right,
          height = 400 - margin.top - margin.bottom;

      // set the ranges
      var x = _d.default.scale.ordinal().rangeRoundBands([0, width], .05);

      // var y = d3.scale.linear().range([height, 0]);

      // // define the axis
      // var xAxis = d3.svg.axis()
      //     .scale(x)
      //     .orient("bottom")


      // var yAxis = d3.svg.axis()
      //     .scale(y)
      //     .orient("left")
      //     .ticks(10);


      // // add the SVG element
      // var svg = d3.select(this.el).append("svg")
      //     .attr("width", width + margin.left + margin.right)
      //     .attr("height", height + margin.top + margin.bottom)
      //   .append("g")
      //     .attr("transform", 
      //           "translate(" + margin.left + "," + margin.top + ")");


      // // load the data
      // d3.json('https://data.cityofnewyork.us/resource/waf7-5gvc.json', function(error, data) {

      //     data.forEach(function(d) {
      //         d.year = d.year;
      //         d.per_capita_gallons_per_person_per_day = +d.per_capita_gallons_per_person_per_day;
      //     });

      //   // scale the range of the data
      //   x.domain(data.map(function(d) { return d.year; }));
      //   y.domain([0, d3.max(data, function(d) { return d.per_capita_gallons_per_person_per_day; })]);

      //   // add axis
      //   svg.append("g")
      //       .attr("class", "x axis")
      //       .attr("transform", "translate(0," + height + ")")
      //       .call(xAxis)
      //     .selectAll("text")
      //       .style("text-anchor", "end")
      //       .attr("dx", "-.8em")
      //       .attr("dy", "-.55em")
      //       .attr("transform", "rotate(-90)" );

      //   svg.append("g")
      //       .attr("class", "y axis")
      //       .call(yAxis)
      //     .append("text")
      //       .attr("transform", "rotate(-90)")
      //       .attr("y", -55)
      //       .attr("dy", ".71em")
      //       .style("text-anchor", "end")
      //       .text("Avg. Gallons of Water Per Person Per Day");


      //   // Add bar chart
      //   svg.selectAll("bar")
      //       .data(data)
      //     .enter().append("rect")
      //       .attr("class", "bar")
      //       .attr("x", function(d) { return x(d.year); })
      //       .attr("width", x.rangeBand())
      //       .attr("y", function(d) { return y(d.per_capita_gallons_per_person_per_day); })
      //       .attr("height", function(d) { return height - y(d.per_capita_gallons_per_person_per_day); });

      // });

    }

  });
});
define('nyc-water/helpers/app-version', ['exports', 'nyc-water/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;


  const {
    APP: {
      version
    }
  } = _environment.default;

  function appVersion(_, hash = {}) {
    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('nyc-water/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('nyc-water/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('nyc-water/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'nyc-water/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('nyc-water/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('nyc-water/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('nyc-water/initializers/export-application-global', ['exports', 'nyc-water/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define("nyc-water/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('nyc-water/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('nyc-water/router', ['exports', 'nyc-water/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define('nyc-water/routes/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('nyc-water/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("nyc-water/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "99oYcowy", "block": "{\"symbols\":[],\"statements\":[[2,\" app/templates/application.hbs \"],[0,\"\\n\\n\"],[1,[18,\"bar-chart\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "nyc-water/templates/application.hbs" } });
});
define("nyc-water/templates/components/bar-chart", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+MHN7MVZ", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1]],\"hasEval\":false}", "meta": { "moduleName": "nyc-water/templates/components/bar-chart.hbs" } });
});

define('nyc-water/config/environment', [], function() {
  var prefix = 'nyc-water';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("nyc-water/app")["default"].create({"name":"nyc-water","version":"0.0.0+5d9de07c"});
}
//# sourceMappingURL=nyc-water.map
