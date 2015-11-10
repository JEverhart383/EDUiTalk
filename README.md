# EDUiTalk
This repo contains some project files for my talk at EDUi 2015 "Evolving Beyond Excel: Interactive Data Visualizations with HTML, JS, and SVG."

##Initial Set-up
1. Download repo as .zip file and extract contents
2. Load index.html file using some server (MAMP, WAMP, Python, Node)
3. Follow along with the steps outlined in the code comments

###Getting Started 
We're going to get started creating a simple scatterplot using [D3 (Data Driven Documents)](http://d3js.org/). Be sure to check out the D3 documentation for specifics that go beyond what is covered in this talk: 

We will also be taking a look at the [DimpleJS](http://dimplejs.org/) library. DimpleJS extends D3 and provides higher order functions so that we can easily use popular charts. 

If you want to review some of the slides from this talk, there are open shared on [Google Drive here](https://docs.google.com/presentation/d/1kIVbxSfAjp33NMXiEgmVMbyppJh9YYjh4A5P0dK7Z8A/edit?usp=sharing). 

###7 Steps to an Interactive Data Viz with D3
1. Create and append SVG
2. Set width, height, padding, margin attributes for SVG
3. Load JSON data into callback function
4. Create variables for domains, scale, and range
5. Create and add axes to SVG
6. Create bubblechart circles and append to SVG
7. Create onmouseover and onmouseout events for tooltip (if we have time)

After that, we'll take a look at doing the same thing with less code using the Dimple library. 

D3 Example: [http://jeverhart383.github.io/EDUiTalk/](http://jeverhart383.github.io/EDUiTalk/)
Dimple Example: [http://jeverhart383.github.io/EDUiTalk/dimple.html](http://jeverhart383.github.io/EDUiTalk/dimple.html)

####Further Reading

*[Interactive Data Visualizations for the Web, Scott Murray](http://chimera.labs.oreilly.com/books/1230000000345/index.html)
*[Mike Bostock's Tutorial (Creator of D3)](https://github.com/mbostock/d3/wiki/Tutorials)
*[Dashing D3 JS](https://www.dashingd3js.com/)
*[Data Visualization and D3.js](https://www.udacity.com/course/data-visualization-and-d3js--ud507)




