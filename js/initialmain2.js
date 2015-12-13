d3.csv("data/data2.csv", function(d) {
  var format = d3.time.format("%Y");
  return {
    'Year': format.parse(d.year),
    'Delayed': +d.delayed,
    'Arrivals': +d.arrivals
  };
}, function(data) {
  'use strict';



  // set svg
  var width = 960,
      height = 380;
  var svg = dimple.newSvg('#content1', width, height);
  var myChart = new dimple.chart(svg, data);
  
  myChart.setBounds(60, 30, 510, 305);

  // set y axis

  var y1 = myChart.addMeasureAxis('y', 'Arrivals');

	
  y1.title = 'Arrivals Volume';

  // set x axis
  var x = myChart.addTimeAxis('x', 'Year');
  
  x.tickFormat = '%Y';
  x.title = 'Year';
  

  // set series and legend
  var s = myChart.addSeries('Arrivals', dimple.plot.bar, [x,y1] );
  

  //var legend = myChart.addLegend(width*0.65, 30, width*0.25, 600, 'right');

  // draw

  myChart.draw();
  

  
});
