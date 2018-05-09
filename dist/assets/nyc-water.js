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
define('nyc-water/components/bar-chart-2', ['exports', 'd3'], function (exports, _d) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({

        didInsertElement: function () {
            // set the dimensions of the canvas
            var margin = { top: 20, right: 100, bottom: 70, left: 130 },
                width = $(window).width() - margin.left - margin.right,
                height = 200 - margin.top - margin.bottom;

            // set the ranges
            var x = _d.default.scale.ordinal().rangeRoundBands([0, width], .05);

            var y = _d.default.scale.linear().range([height, 0]);

            // define the axis
            var xAxis = _d.default.svg.axis().scale(x).orient("bottom");

            var yAxis = _d.default.svg.axis().scale(y).orient("left").ticks(6);

            var svg2 = _d.default.select("div.chart2").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            // MGD
            _d.default.json('https://data.cityofnewyork.us/resource/waf7-5gvc.json', function (error, data) {

                data.forEach(function (d) {
                    d.year = d.year;
                    d.nyc_consumption_million_gallons_per_day = +d.nyc_consumption_million_gallons_per_day;
                });

                // scale the range of the data
                x.domain(data.map(function (d) {
                    return d.year;
                }));
                y.domain([0, _d.default.max(data, function (d) {
                    return d.nyc_consumption_million_gallons_per_day;
                })]);

                // add second axis
                svg2.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis).selectAll("text").style("text-anchor", "end").attr("dx", "-.8em").attr("dy", "-.55em").attr("transform", "rotate(-90)");

                svg2.append("g").attr("class", "y axis").call(yAxis).append("text").attr("transform", "rotate(-90)").attr("y", -65).attr("dy", ".71em").style("text-anchor", "end").text("Million Gallons / Day");

                // Add second bar chart
                svg2.selectAll("bar").data(data).enter().append("rect").attr("class", "bar").attr("x", function (d) {
                    return x(d.year);
                }).attr("width", x.rangeBand()).attr("y", function (d) {
                    return y(d.nyc_consumption_million_gallons_per_day);
                }).attr("height", function (d) {
                    return height - y(d.nyc_consumption_million_gallons_per_day);
                });
            });
        }

    });
});
define('nyc-water/components/bar-chart-3', ['exports', 'd3'], function (exports, _d) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({

        didInsertElement: function () {
            // set the dimensions of the canvas
            var margin = { top: 20, right: 100, bottom: 70, left: 130 },
                width = $(window).width() - margin.left - margin.right,
                height = 200 - margin.top - margin.bottom;

            // set the ranges
            var x = _d.default.scale.ordinal().rangeRoundBands([0, width], .05);

            var y = _d.default.scale.linear().range([height, 0]);

            // define the axis
            var xAxis = _d.default.svg.axis().scale(x).orient("bottom");

            var yAxis = _d.default.svg.axis().scale(y).orient("left").ticks(6);

            var svg3 = _d.default.select("div.chart3").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            // Population
            _d.default.json('https://data.cityofnewyork.us/resource/waf7-5gvc.json', function (error, data) {

                data.forEach(function (d) {
                    d.year = d.year;
                    d.new_york_city_population = +d.new_york_city_population;
                });

                // scale the range of the data
                x.domain(data.map(function (d) {
                    return d.year;
                }));
                y.domain([0, _d.default.max(data, function (d) {
                    return d.new_york_city_population / 1000000;
                })]);

                // add third axis
                svg3.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis).selectAll("text").style("text-anchor", "end").attr("dx", "-.8em").attr("dy", "-.55em").attr("transform", "rotate(-90)");

                svg3.append("g").attr("class", "y axis").call(yAxis).append("text").attr("transform", "rotate(-90)").attr("y", -65).attr("dy", ".71em").style("text-anchor", "end").text("Million People");

                // Add third bar chart
                svg3.selectAll("bar").data(data).enter().append("rect").attr("class", "bar").attr("x", function (d) {
                    return x(d.year);
                }).attr("width", x.rangeBand()).attr("y", function (d) {
                    return y(d.new_york_city_population / 1000000);
                }).attr("height", function (d) {
                    return height - y(d.new_york_city_population / 1000000);
                });
            });
        }

    });
});
define('nyc-water/components/bar-chart', ['exports', 'd3'], function (exports, _d) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    didInsertElement: function () {
      // set the dimensions of the canvas
      var margin = { top: 20, right: 100, bottom: 70, left: 130 },
          width = $(window).width() - margin.left - margin.right,
          height = 200 - margin.top - margin.bottom;

      // set the ranges
      var x = _d.default.scale.ordinal().rangeRoundBands([0, width], .05);

      var y = _d.default.scale.linear().range([height, 0]);

      // define the axis
      var xAxis = _d.default.svg.axis().scale(x).orient("bottom");

      var yAxis = _d.default.svg.axis().scale(y).orient("left").ticks(6);

      // add the SVG element
      var svg = _d.default.select("div.chart1").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // Per Capita Per Day
      // load the data
      _d.default.json('https://data.cityofnewyork.us/resource/waf7-5gvc.json', function (error, data) {

        data.forEach(function (d) {
          d.year = d.year;
          d.per_capita_gallons_per_person_per_day = +d.per_capita_gallons_per_person_per_day;
        });

        // scale the range of the data
        x.domain(data.map(function (d) {
          return d.year;
        }));
        y.domain([0, _d.default.max(data, function (d) {
          return d.per_capita_gallons_per_person_per_day;
        })]);

        // add axis
        svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis).selectAll("text").style("text-anchor", "end").attr("dx", "-.8em").attr("dy", "-.55em").attr("transform", "rotate(-90)");

        svg.append("text").attr("class", "narrative").text("Test text").attr("dy", "13em").attr("dx", "-4.5em");

        svg.append("g").attr("class", "y axis").call(yAxis).append("text").attr("transform", "rotate(-90)").attr("y", -65).attr("dy", ".71em").style("text-anchor", "end").text("Avg Gallons / Person / Day");

        // Add bar chart
        svg.selectAll("bar").data(data).enter().append("rect").attr("class", "bar").attr("x", function (d) {
          return x(d.year);
        }).attr("width", x.rangeBand()).attr("y", function (d) {
          return y(d.per_capita_gallons_per_person_per_day);
        }).attr("height", function (d) {
          return height - y(d.per_capita_gallons_per_person_per_day);
        });
      });
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
  exports.default = Ember.HTMLBars.template({ "id": "8QDq7NE7", "block": "{\"symbols\":[],\"statements\":[[2,\" app/templates/application.hbs \"],[0,\"\\n\\n\"],[6,\"h1\"],[7],[0,\"NYC's Water Consumption Trends over Time\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"chart1\"],[7],[1,[18,\"bar-chart\"],false],[8],[0,\"\\n\"],[6,\"h3\"],[7],[0,\"The average New Yorker consumes 45% less water today than in 1980.\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"chart2\"],[7],[1,[18,\"bar-chart-2\"],false],[8],[0,\"\\n\"],[6,\"h3\"],[7],[0,\"Because per capita consumption is significantly reduced, NYC's total water consumption has decreased over time, despite steady population growth.\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"chart3\"],[7],[1,[18,\"bar-chart-3\"],false],[8]],\"hasEval\":false}", "meta": { "moduleName": "nyc-water/templates/application.hbs" } });
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
  require("nyc-water/app")["default"].create({"name":"nyc-water","version":"0.0.0+f05bc9a7"});
}
//# sourceMappingURL=nyc-water.map
