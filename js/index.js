// Define canvas size
let margin = {top: 100, left:100, right: 20, bottom:20}
let width = 800 - (margin.left + margin.right);
let height = 800 - (margin.top + margin.bottom);

let svg = d3.select("#sketchpad")
  .append("svg")
  .attr("width", 800)
  .attr("height", 800)

// Add canvas group and move the chart area 100px to the right
let g = svg.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`)


//Get Data
d3.json('data.json')
  .then(data => {
    
    // Set X & Y domain
    let value = data.map(item => item.value);
    let x = d3.scaleBand().domain(data.map(d => d.name)).range([0, width]).paddingInner(0.3);
    let y = d3.scaleLinear().domain(d3.extent(value)).range([0, height]);

    // Set X Axis
    let xAxis = d3.axisTop(x);
      g.append("g")
        .attr("class", "x axis")
        .call(xAxis)

    // Set Y Axis
    let yAxis = d3.axisLeft(y);
      g.append("g")
        .attr("class", "y axis")
        .call(yAxis)


    //Set Chart Title
    g.append("text")
      .attr("class", "x axis label")
      .attr("x", width / 2)
      .attr("y", -50)
      .attr("font-size", "28px")
      .attr("text-anchor", "middle")
      .text("Sample Bar Chart")

    g.selectAll("rects").data(data).enter()
      .append("rect")
      .attr("x", d => x(d.name))
      .attr("y", 0)
      .attr("width", x.bandwidth)
      .attr("height", d => y(d.value))
      .attr("fill", "blue")
  })