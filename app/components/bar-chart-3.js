import Ember from 'ember';
import d3 from 'd3';

export default Ember.Component.extend({

  didInsertElement: function() {
        // set the dimensions of the canvas
    var margin = {top: 20, right: 100, bottom: 70, left: 180},
        width = 1350 - margin.left - margin.right,
        height = 200 - margin.top - margin.bottom;

    // set the ranges
    var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

    var y = d3.scale.linear().range([height, 0]);

    // define the axis
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);

    // add the SVG element
    // var svg = d3.select("h1").append("svg")
    //     .attr("width", width + margin.left + margin.right)
    //     .attr("height", height + margin.top + margin.bottom)
    //   .append("g")
    //     .attr("transform", 
    //           "translate(" + margin.left + "," + margin.top + ")");

    // var svg2 = d3.select("h3").append("svg")
    //     .attr("width", width + margin.left + margin.right)
    //     .attr("height", height + margin.top + margin.bottom)
    //   .append("g")
    //     .attr("transform", 
    //           "translate(" + margin.left + "," + margin.top + ")");

    var svg3 = d3.select("h3").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

    // // Per Capita Per Day
    // // load the data
    // d3.json('https://data.cityofnewyork.us/resource/waf7-5gvc.json', function(error, data) {

    //   data.forEach(function(d) {
    //       d.year = d.year;
    //       d.per_capita_gallons_per_person_per_day = +d.per_capita_gallons_per_person_per_day;
    //   });
      
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
    //       .attr("class", "x axis")
    //       .attr("transform", "translate(0," + height + ")")
    //       .call(xAxis)
    //     .selectAll("text")
    //       .style("text-anchor", "end")
    //       .attr("dx", "-.8em")
    //       .attr("dy", "-.55em")
    //       .attr("transform", "rotate(-90)" );

    //   svg.append("text")
    //     .attr("class", "narrative")
    //     .text("Test text")
    //     .attr("dy", "13em")
    //     .attr("dx", "-4.5em");

    //   svg.append("g")
    //       .attr("class", "y axis")
    //       .call(yAxis)
    //     .append("text")
    //       .attr("transform", "rotate(-90)")
    //       .attr("y", -65)
    //       .attr("dy", ".71em")
    //       .style("text-anchor", "end")
    //       .text("Avg Gallons / Person / Day");

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

    // // MGD
    // d3.json('https://data.cityofnewyork.us/resource/waf7-5gvc.json', function(error, data) {

    //   data.forEach(function(d) {
    //       d.year = d.year;
    //       d.nyc_consumption_million_gallons_per_day = +d.nyc_consumption_million_gallons_per_day;
    //   });
      
    //   // scale the range of the data
    //   x.domain(data.map(function(d) { return d.year; }));
    //   y.domain([0, d3.max(data, function(d) { return d.nyc_consumption_million_gallons_per_day; })]);

    //   // add second axis
    //   svg2.append("g")
    //       .attr("class", "x axis")
    //       .attr("transform", "translate(0," + height + ")")
    //       .call(xAxis)
    //     .selectAll("text")
    //       .style("text-anchor", "end")
    //       .attr("dx", "-.8em")
    //       .attr("dy", "-.55em")
    //       .attr("transform", "rotate(-90)" );

    //   svg2.append("g")
    //       .attr("class", "y axis")
    //       .call(yAxis)
    //     .append("text")
    //       .attr("transform", "rotate(-90)")
    //       .attr("y", -65)
    //       .attr("dy", ".71em")
    //       .style("text-anchor", "end")
    //       .text("Million Gallons / Day");

    //   // Add second bar chart
    //   svg2.selectAll("bar")
    //       .data(data)
    //     .enter().append("rect")
    //       .attr("class", "bar")
    //       .attr("x", function(d) { return x(d.year); })
    //       .attr("width", x.rangeBand())
    //       .attr("y", function(d) { return y(d.nyc_consumption_million_gallons_per_day); })
    //       .attr("height", function(d) { return height - y(d.nyc_consumption_million_gallons_per_day); });

    // });

    // Population
    d3.json('https://data.cityofnewyork.us/resource/waf7-5gvc.json', function(error, data) {

      data.forEach(function(d) {
          d.year = d.year;
          d.new_york_city_population = +d.new_york_city_population;
      });
      
      // scale the range of the data
      x.domain(data.map(function(d) { return d.year; }));
      y.domain([0, d3.max(data, function(d) { return d.new_york_city_population/1000000; })]);

      // add third axis
      svg3.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
        .selectAll("text")
          .style("text-anchor", "end")
          .attr("dx", "-.8em")
          .attr("dy", "-.55em")
          .attr("transform", "rotate(-90)" );

      svg3.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", -65)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Million People");

      // Add third bar chart
      svg3.selectAll("bar")
          .data(data)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.year); })
          .attr("width", x.rangeBand())
          .attr("y", function(d) { return y(d.new_york_city_population/1000000); })
          .attr("height", function(d) { return height - y(d.new_york_city_population/1000000); });

    });

  }

});