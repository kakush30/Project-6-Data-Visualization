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
  

   var barFocus = d3.select("#content1")
                   .selectAll("rect")
				   
                   .attr("fill", function(d) {
                        if (d.height < 6000000) {
                            return "#8d002b";
                          }
                        else {
                          return "#28e7b2";
                          }
                     });


  // handle mouse events on gridlines
  y1.gridlineShapes.selectAll('line')
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
