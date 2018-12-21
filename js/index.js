let svg = d3.select("#sketchpad")
  .append("svg")
  .attr("width", 800)
  .attr("height", 800)

d3.json('data.json')
  .then(data => {
    
    let value = data.map(item => item.value);
    let x = d3.scaleBand().domain(data.map(d => d.name)).range([0, 800]).paddingInner(0.3);
    let y = d3.scaleLinear().domain(d3.extent(value)).range([0, 800]);

    svg.selectAll("rects").data(data).enter()
      .append("rect")
      .attr("x", d => x(d.name))
      .attr("y", 0)
      .attr("width", x.bandwidth)
      .attr("height", d => y(d.value))
      .attr("fill", "blue")
  })