let margin = {top: 20, right: 0, bottom: 30, left: 40}
let width = 800 - (margin.left - margin.right);
let height = 500 - (margin.top - margin.bottom);

let svg = d3.select("#sketchpad")
  .append("svg")
  .attr("width", 800)
  .attr("height", 800)

// Add canvas group and move the chart area 100px to the right
let g = svg.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`)

d3.json("data.json")
  .then(data => { 
    const value = data.map(letter => letter.value);
    const x = d3.scaleBand().domain(data.map(d => d.name)).range([0, width]).paddingInner(0.1);
    const y = d3.scaleLinear().domain([0, d3.max(value)]).nice().range([height - margin.bottom, margin.top])

    // Set X Axis
    let xAxis = d3.axisBottom(x);
      g.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
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
      .attr("y", 0)
      .attr("font-size", "28px")
      .attr("text-anchor", "middle")
      .text("Sample Bar Chart")

    g.selectAll("rects").data(data).enter()
      .append("rect")
      .attr("x", d => x(d.name))
      .attr("y", d => y(d.value))
      .attr("width", x.bandwidth)
      .attr("height", d => y(0) - y(d.value))
      .attr("fill", "blue")
  })


  //ySFtT4oX1boE&5VwPl