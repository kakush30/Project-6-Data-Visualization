

d3.csv("data/data4.csv", function(d) {
  var format = d3.time.format("%Y");
  return {
    'Week of the day': d.DayOfWeek,
    'Total Volume': +d.Total_Volume
  };
}, function(data) {
  'use strict';

  d3.select('#content3')
    .append('h2')
    .attr('id', 'title')
    .text('Analysis of year 2008 with Volume of Flights');

  // set svg
  var width = 960,
      height = 380;
  var svg = dimple.newSvg('#content3', width, height);
  var myChart = new dimple.chart(svg, data);
  
  myChart.setBounds(60, 30, 510, 305);

  // set y axis

  var y = myChart.addMeasureAxis('y', 'Total Volume');
 	
   y.overrideMin = 140000;
   y.tickFormat = 's';
  // set x axis
  var x = myChart.addCategoryAxis('x', 'Week of the day');
  x.title='Day of the Week';
  x.addOrderRule(["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"])

  

  // set series and legend
  var s = myChart.addSeries('', dimple.plot.bar );
  


  //var legend = myChart.addLegend(width*0.65, 30, width*0.25, 600, 'right');

  // draw

  myChart.draw();
  

 
});
