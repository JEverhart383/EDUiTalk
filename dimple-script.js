d3.json('data/data2012.json', function(d){
 
    var svg = dimple.newSvg("body", 1100, 800);
    var data = d; 
    var chart = new dimple.chart(svg, data);
    chart.setBounds(60, 50, 800, 600); 
    chart.addMeasureAxis("x", "rep_votes");
    chart.addMeasureAxis("y", "dem_votes");
    chart.addMeasureAxis("z", "electoral_votes"); 
    chart.addColorAxis("rep_votes", ["red", "blue"]); 
    chart.addSeries("state", dimple.plot.bubble);
    chart.draw();



});     
    
