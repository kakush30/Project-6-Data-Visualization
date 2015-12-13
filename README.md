## DATA VISUALIZATION:Analysis of RITA DATASET

#### Summary

The analysis is done on the 2 datasets that are downloaded from RITA. First one from [here](http://www.transtats.bts.gov/OT_Delay/OT_DelayCause1.asp), 
this dataset was used for analysis purpose on yearly basis. And the second dataset of year [2008](http://stat-computing.org/dataexpo/2009/the-data.html) 
is used for hourly and day basis analysis.

In this I constructed many plots, like I choosen scatter & line plot for Airlines On Time Arrival alongwith years, so that we able to see a trend that airlines following and how they improving in all those years.

I tried to use 2 different colors in many plots, so we able to say where is redline. In these I chooses different colors( Red & Green, Purple & Sky Blue) for a redline according to mean.   

#### Exploratory Data Analysis with R

The data analysis of datasets is done with the RStudio. And finally implemented these plots in D3 and Dimple. 

For analysis purpose I created a line chart for different airline between 2003-2015 

![1st Plot](https://raw.githubusercontent.com/kakush30/Project-6-Data-Visualization/master/data/img/Rplot01.jpeg)

This is pretty hard to analyze all the airlines in one plot, all the airlines mixed up so much that plot become ineffective to analyze. To analyze for effectively, I displayed the line graph for those airlines which is only serving in year 2015 and performing 85% & above On Time arrivals in recent years.
![2nd Plot](https://raw.githubusercontent.com/kakush30/Project-6-Data-Visualization/master/data/img/Rplot09_vnew.jpeg)

There are 3 airlines that still serving in 2015 & performing above 85% On Time arrival in recent years. 

For furthur analysis of these 3 airlines, I created the plot with volume of arrivals along years.

![3rd Plot](https://raw.githubusercontent.com/kakush30/Project-6-Data-Visualization/master/data/img/Rplot10_vnew.jpeg)

The Volume of Arrival of `Hawaiian Airlines Inc.` is pretty low, while `Delta Air Lines Inc.` even with high volume of arrivals able to record high On Time Arrivals in recent years.

For analysis of year 2008 on daily & hourly basis, a different dataset is downloaded from RITA. For furthur analysis, Plots for Delays in Departure & Delays in Arrival is constructed.

![4th Plot](https://raw.githubusercontent.com/kakush30/Project-6-Data-Visualization/master/data/img/Rplot11_vnew.jpeg)
![5th Plot](https://github.com/kakush30/Project-6-Data-Visualization/blob/master/data/img/Rplot12_vnew.jpeg)

Also for Data Analysis on Day basis, I counstructed visulaization based on Volume of Flights alonwith Days.

![6th Plot](https://raw.githubusercontent.com/kakush30/Project-6-Data-Visualization/master/data/img/Rplot13_vnew.jpeg)

#### DATA Visualization

I implemented D3 & Dimple and improved the Visualization as following :-

1) Overlay scatterplot to emphasize each airlines individual data points in Plot 1.

2)  In Plot 1, to improve the visualization I add the feature to Bolden the line chart whenever mouse hover on it. Also added the percentage in Y-Axis for On Time Arrival instead of graph in fraction.

3) To differentiing between those years with high volume of Arrivals with those years with low years of volume, I used color Purple & Sky Blue to differentiate those in Plot 2.

4) As in Plot 2, I used the Green & Red color in Plot 3, the red color for those who are with high delay time, and green who are with low delay time.

4) In Plot 3, Instead of creating 2 plot for Delays in Arrival & Departure I constructed in one graph by using button.

5) Similar to Plot 2 & 3, I added Green & Red for those days which are with high level of volume & low levels of volume.

#### FEEDBACKS

I done interview of three persons, and according to there critics I tried to improve my visualization.

#### FEEDBACK #1 

The line graph in middle years is some kind of hosh-posh, and unable to figure out which line is for which airline. It would be better if you would highlight the line when mouse is on over it. The Plot 1 Y-Axis should be in percentage instead of fraction.

All in all, the graphs are good, need some correction in title of X-Axis & Y-Axis. But otherwise the visualization is good.

#### FEEDBACK #2

The graphs are good, but need some improvements. Like in barplots why not choosing different colors for emphasizing years that is with high volume and low.  
Also you can use different colors for other barplots, like in Delays of Departure & Arrival. You can give red color to those with are high delays.
Otherwise visualizations are pretty good.

#### FEEDBACK #3

The graphs are good, but why not creating a single graph for Delays is Arrival or Departure. Why not showing this into one graph. Or you can use some button or else, so it create another graph when you click on it.
In this way the people able to understand the Delays of Arrival & Departure alongwith Time.  

####  FEEDBACK #4

1) After the first 2 plots which is based on years 2003-2015, the story suddenly transfered to 1987, its little bit confusing and readers maybe not able to connect the story. Its better to choose more recent years.

2) The Plot 2 is highly confusing with two y-axis. Also the Green Red color is confusing & very difficult to see.

3) For choosing a value for different colors in Barplots, there should be a reason not just a guesswork. Like mean of values.

#### Files & Folders Description

`img` : Folder where all the images of plots which are constructed R is stored (inside `data`).

`index_final_version` : Final version of Project.

`index_initial_version` : First version of Project.

`data`: Where CSV files are stored

`analysis2.rmd`: Final R file that used for Analysis.

