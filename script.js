// Step 1: Create an SVG and append to existing div 

	var bubblechart = d3.select('.bubblechart'); 

	var svg = bubblechart.append("svg");


//Step 2: Set width, height, padding, margin attributes for SVG

	var margins = {top:30, right: 20, bottom: 30, left: 50}
	var chartHeight = 700 - margins.top - margins.bottom;
	var chartWidth = 1000 - margins.right - margins.left;
	var padding = 70; 

	svg.attr('width', chartWidth)
	   .attr('height', chartHeight);

//Step 3: Load JSON data into callback function 

d3.json("data/data2012.json", function(d){

	//Step 4: Create variables for domains, scale, and range

		//Step 4.1 Use d3 convenience methods to return maxes and extents of data set 
		
		var yMax = d3.max(d, function(d){
			return d.dem_votes;
		});

		var xMax = d3.max(d, function(d){
			return d.rep_votes;
		});

		var colorDomain = d3.extent(d, function(d){
			return d.dem_votes - d.rep_votes;
		});

		var rDomain = d3.extent(d, function(d){
			return d.electoral_votes;
		});

		
		//Step 4.2 Use d3 scale methods to map a domain(a max and min of a data set) to a range (a )
		
		var xScale = d3.scale.linear()
			.domain([0, xMax])
			.range([padding, chartWidth-padding]);

		var yScale = d3.scale.linear()
			.domain([0, yMax])
			.range([chartHeight-padding, padding]);

		var rScale = d3.scale.linear()
			.domain(rDomain)
			.range([10, 50]); 	

		var colorScale = d3.scale.linear()
			.domain(colorDomain)
			.range(["red","blue"]);


	//Step 5: Create and add axes to SVG

		var xAxis = d3.svg.axis()
			.scale(xScale)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(yScale)
			.orient("left");

		svg.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(0," + parseInt(chartHeight - padding) + ")")
			.call(xAxis);

		svg.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxis);


	//Step 6: Create bubblechart circles and append to SVG

		var circles = svg.selectAll("circle")
			.data(d)
			.enter()
			.append("circle")
			.style("padding", "50px");

			circles
			.attr("cx", function(d){
				return xScale(d.rep_votes);
			})
			.attr("cy", function(d){
				return yScale(d.dem_votes);
			})
			.attr("r", function(d){
				return rScale(d.electoral_votes);
			})
			.attr("fill", function(d){
				return colorScale(d.dem_votes - d.rep_votes);
			})

	//Step 7: Create onmouseover and onmouseout events for tooltip (if we have time)
		.on("mouseover", function(d) {

				//Get this bar's x/y values, then augment for the tooltip
				var xPosition = parseFloat(d3.select(this).attr("cx")) ;
				var yPosition = parseFloat(d3.select(this).attr("cy"));

				

				//Update the tooltip position and value
				d3.select("#tooltip")
				  .style("left", xPosition + "px")
				  .style("top", (yPosition + 100) + "px")
				  .select("#value")
				  .text(d.state + ", " + d.postal_code + " (" + d.electoral_votes + ")");

				//Show the tooltip
				d3.select("#tooltip").classed("hidden", false);

				console.log("I'm here:" + xPosition + "," + yPosition); 

			})
			.on("mouseout", function() {
				//Hide the tooltip
				d3.select("#tooltip").classed("hidden", true);

			});//End event handlers 

});//End d3.json callback


