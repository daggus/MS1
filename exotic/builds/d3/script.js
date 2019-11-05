var w = 700,
	h = 700;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Exotic','Primitive', 'Oriental'];

//Data
var d = [
		  [
			{axis:"The American Wing",value:69},
			{axis:"Asian Art",value:66},
			{axis:"Drawings and Prints",value:582},
			{axis:"Greek and Roman Art",value:13},
			{axis:"Modern and Contemporary",value:15},
			{axis:"Robert Lehman Collection",value:7},
			{axis:"Ancient Near Eastern Art",value:5},
			{axis:"Brooklyn Museum Costume Collection",value:17},
			{axis:"Egyptian Art",value:9},
			{axis:"Islamic Art",value:33},
			{axis:"Musical Instruments",value:4},
			{axis:"Arms and Armor",value:23},
			{axis:"The Cloisters",value:5},
			{axis:"European Paintings",value:58},
			{axis:"The Libraries",value:0},
			{axis:"Photographs",value:29},
			{axis:"Arts of Africa, Oceania, and the Americas",value:19},
			{axis:"Costume Institute",value:47},
			{axis:"European Sculpture and Decorative Arts",value:278},
			{axis:"Medieval Art",value:3},
			{axis:"Provenance Research Project",value:19},
		  ],[
			{axis:"The American Wing",value:3},
			{axis:"Asian Art",value:24},
			{axis:"Drawings and Prints",value:18},
			{axis:"Greek and Roman Art",value:1},
			{axis:"Modern and Contemporary",value:35},
			{axis:"Robert Lehman Collection",value:10},
			{axis:"Ancient Near Eastern Art",value:1},
			{axis:"Brooklyn Museum Costume Collection",value:0},
			{axis:"Egyptian Art",value:0},
			{axis:"Islamic Art",value:6},
			{axis:"Musical Instruments",value:5},
			{axis:"Arms and Armor",value:16},
			{axis:"The Cloisters",value:4},
			{axis:"European Paintings",value:151},
			{axis:"The Libraries",value:1},
			{axis:"Photographs",value:24},
			{axis:"Arts of Africa, Oceania, and the Americas",value:3506},
			{axis:"Costume Institute",value:1},
			{axis:"European Sculpture and Decorative Arts",value:6},
			{axis:"Medieval Art",value:11},
			{axis:"Provenance Research Project",value:18},
		  ],[
			{axis:"The American Wing",value:21},
			{axis:"Asian Art",value:141},
			{axis:"Drawings and Prints",value:350},
			{axis:"Greek and Roman Art",value:291},
			{axis:"Modern and Contemporary",value:75},
			{axis:"Robert Lehman Collection",value:20},
			{axis:"Ancient Near Eastern Art",value:605},
			{axis:"Brooklyn Museum Costume Collection",value:30},
			{axis:"Egyptian Art",value:185},
			{axis:"Islamic Art",value:618},
			{axis:"Musical Instruments",value:6},
			{axis:"Arms and Armor",value:181},
			{axis:"The Cloisters",value:13},
			{axis:"European Paintings",value:130},
			{axis:"The Libraries",value:2},
			{axis:"Photographs",value:281},
			{axis:"Arts of Africa, Oceania, and the Americas",value:53},
			{axis:"Costume Institute",value:157},
			{axis:"European Sculpture and Decorative Arts",value:100},
			{axis:"Medieval Art",value:43},
			{axis:"Provenance Research Project",value:56},
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Colonialist language on the Met's website");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	