d3.csv("data/data3.csv", function(d) {
  var format = d3.time.format("%Y");
  return {
    'HOUR': d.HOUR,
    'Delays_Dep':d.delays_dep,
	'Delays_Arr':d.delays_arr	

    
  };
}, function(data) {
  'use strict';
  
  

  // append title
  d3.select('#content2')
    .append('h2')
    .attr('id', 'title')
    .text('Analysis of year 2008 with delays in Departures & Arrivals');

  // set svg
  var width = 960,
      height = 380;
  var svg = dimple.newSvg('#content2', width, height);
  var myChart = new dimple.chart(svg, data);
  myChart.setBounds(60, 30, 510, 305);
  var xCount = myChart.addCategoryAxis("x", "HOUR");
  xCount.addOrderRule("HOUR","")
  var yCount = myChart.addMeasureAxis("y", "Delays_Dep");
  yCount.title = 'Delays in Departure(min)';
  yCount.overrideMin = 0;
  
  // set series and legend
  var s = myChart.addSeries('', dimple.plot.bar);
 // var p = myChart.addSeries('Delays', dimple.plot.line);
  //var legend = myChart.addLegend(width*0.65, 60, width*0.25, 60, 'right');
  var tick = true;
  // draw
  s.getTooltipText = function (e) {
                return [
                    "" + Math.round(e.y) + " min",
                ];
            };
  myChart.draw();
  
  d3.select("#input").on("click", updateChart)
   
      function updateChart()
	  {
        if(tick == true)
			{	
            // Change the measure on the y axis
            yCount.measure = ["Delays_Arr"];
			yCount.title = 'Delays in Arrival (min)';
          	tick = false;
			}
			else
			{
			   yCount.measure = ["Delays_Dep"];
			   yCount.title = 'Delays in Departure (min)';
			   tick = true;
			}
			myChart.draw();
			s.shapes			           
            .attr("fill", function(d) 
			{
				if 
				(d.height > 51) 
				{ 
				return "#ff0000";
				}
				else 
				{return "#006400";
				}})};
  			
			
			s.shapes
            .attr("fill", function(d) {if (d.height > 51) { return "#ff0000";}
                        else 
						{
                          return "#006400";
                        }})

});
