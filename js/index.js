let dummydata = [
  {
    receive_date: "2013-11-04",
    responses: "2"
    },
    {
    receive_date: "2013-11-05",
    responses: "8668"
    },
    {
    receive_date: "2013-11-06",
    responses: "22297"
    },
    {
    receive_date: "2013-11-07",
    responses: "2491"
    },
    {
    receive_date: "2013-11-08",
    responses: "504"
    },
    {
    receive_date: "2013-11-09",
    responses: "641"
    },
    {
    receive_date: "2013-11-10",
    responses: "1232"
    },
    {
    receive_date: "2013-11-11",
    responses: "360"
    },
    {
    receive_date: "2013-11-12",
    responses: "337"
    },
    {
    receive_date: "2013-11-13",
    responses: "121"
    },
    {
    receive_date: "2013-11-14",
    responses: "110"
    },
    {
    receive_date: "2013-11-15",
    responses: "178"
    },
    {
    receive_date: "2013-11-16",
    responses: "96"
    },
    {
    receive_date: "2013-11-17",
    responses: "175"
    },
    {
    receive_date: "2013-11-18",
    responses: "124"
    },
    {
    receive_date: "2013-11-19",
    responses: "75"
    },
    {
    receive_date: "2013-11-20",
    responses: "38"
    },
    {
    receive_date: "2013-11-21",
    responses: "40"
    },
    {
    receive_date: "2013-11-22",
    responses: "221"
    },
    {
    receive_date: "2013-11-23",
    responses: "54"
    },
    {
    receive_date: "2013-11-24",
    responses: "34"
    },
    {
    receive_date: "2013-11-25",
    responses: "38"
    },
    {
    receive_date: "2013-11-26",
    responses: "24"
    },
    {
    receive_date: "2013-11-27",
    responses: "23"
    },
    {
    receive_date: "2013-11-28",
    responses: "15"
    },
    {
    receive_date: "2013-11-29",
    responses: "21"
    },
    {
    receive_date: "2013-11-30",
    responses: "10"
    }
]


let svg = d3.select("#sketchpad")
  .append("svg")
  .attr("width", 600)
  .attr("height", 600)

svg.append("circle")
  .attr("cx", 150)
  .attr("cy", 200)
  .attr("r", 100)
  .attr("fill", "blue")

svg.append("rect")
  .attr("x", 200)
  .attr("y", 0)
  .attr("width", 250)
  .attr("height", 100)
  .attr("fill", "red")