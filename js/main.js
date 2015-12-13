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
 
  y.tickFormat = '%';
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
  
     d3.select("#input1").on("click", updateChart)
   
          function updateChart(){
			         
            // Change the measure on the y axis
            y.measure=['Arrivals'];
			y.title = 'Volume of Arrivals';
          	y.tickFormat ='s';
			
			myChart.draw(1000);
			};
   d3.select("#input2").on("click", updateChart1)
   
          function updateChart1(){
			         
            // Change the measure on the y axis
            y.measure=['Cancelled'];
			y.title = 'Volume of Cancelled Flights';
          	y.tickFormat ='s';
			
			myChart.draw(1000);
			};
  
    d3.select("#input3").on("click", updateChart2)
   
          function updateChart2(){
			         
            // Change the measure on the y axis
            y.measure=['Diverted'];
			y.title = 'Volume of Diverted Flights';
          	y.tickFormat ='s';
			
			myChart.draw(1000);
			};
  
      d3.select("#input4").on("click", updateChart3)
   
          function updateChart3(){
			         
            // Change the measure on the y axis
            y.measure=['On Time'];
			y.title = '% of Arrivals on Time';
          	y.tickFormat ='%Y';
			
			myChart.draw(1000);
			};
  
 
  // handle mouse events on gridlines
  y.gridlineShapes.selectAll('line')
    .style('opacity', 0.25)
    .on('mouseover', function(e) {
      d3.select(this)
        .style('opacity', 1);
    }).on('mouseleave', function(e) {
      d3.select(this)
        .style('opacity', 0.25);
    });

  // handle mouse events on paths
  d3.selectAll('path')
    .style('opacity', 0.25)
    .on('mouseover', function(e) {
      d3.select(this)
        .style('stroke-width', '8px')
        .style('opacity', 1)
        .attr('z-index', '1');
  }).on('mouseleave', function(e) {
      d3.select(this)
        .style('stroke-width', '2px')
        .style('opacity', 0.25)
        .attr('z-index', '0');
  });
  
  
});
