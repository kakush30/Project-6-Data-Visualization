d3.csv("data/data1.csv", function(d) {
  var format = d3.time.format("%Y");
  return {
	  
    'Year': format.parse(d.year),
    'Carrier Name': d.carrier_name,
    'On Time': +d.on_time,
    'Arrivals': +d.arrivals,
	'Cancelled': +d.cancelled,
	'Diverted': +d.diverted

  };
  

}



,function(data) {
  'use strict';

  // append title
  d3.select('#content')
    .append('h2')
    .attr('id', 'title')
    .text('Analysis of Airlines that is performing 85% & above On Time Arrivals in recent Years');

  // set svg
  var width = 960,
      height = 380;
  var svg = dimple.newSvg('#content', width, height);
  var myChart = new dimple.chart(svg, data);
  myChart.setBounds(60, 30, 510, 305);

  // set y axis
  var minY = 0.5,
      maxY = 1;
	  var y = myChart.addMeasureAxis('y', 'On Time');
 
 
  //y.overrideMin = minY;
  //y.overrideMax = maxY;
  y.title = '% of Arrivals on Time';

  // set x axis
  var x = myChart.addTimeAxis('x', 'Year');
  x.tickFormat = '%Y';
  x.title = 'Year';
  

  // set series and legend
  var s = myChart.addSeries('Carrier Name', dimple.plot.scatter);
  var p = myChart.addSeries('Carrier Name', dimple.plot.line);
  var legend = myChart.addLegend(width*0.65, 30, width*0.25, 600, 'right');

  // draw
  myChart.draw();
   
  
 
  // handle mouse events on gridlines
 

  // handle mouse events on paths

  
});
