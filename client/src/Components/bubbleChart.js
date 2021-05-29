import * as d3 from 'd3';

function bubbleChart(refNode, setModalOpen) {
  //https://observablehq.com/@d3/zoomable-circle-packing
  //https://www.youtube.com/watch?v=R7nY78akAl0
  
  

  function pack(size) {
    return d3.pack()
    .size(size)
    .padding(3)
  }
  function makeHierarchy(data) {
    return d3.hierarchy({children: data})
    .sum(d => d.value)
  }

  
  const personalData = require('./data.json');
  const data = []
  data.push(personalData)
  let svg = d3.select(refNode.current);
  const width = 932;
  const height = 932;

  const hierarchyData = makeHierarchy(data)
  let packLayout = pack([450, 450]);
  const root = packLayout(hierarchyData)

  let focus = root;
  let view;
  
  const color = d3.scaleLinear()
      .domain([0, 5])
      .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
      .interpolate(d3.interpolateHcl)
  // change create to append
  svg.selectAll("g").remove()
  
  svg.attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
      .style("display", "block")
      .style("margin", "10 10px")
      .style("background", "#262626")
      .style("cursor", "pointer")
      .on("click", (event) => zoom(event, root));

  const node = svg.append("g")
    .selectAll("circle")
    .data(root.descendants().slice(1))
    .join("circle")
      .attr("fill", function(d){
        if (typeof(d.children) === 'undefined') {
          return "#F2F2F2"
        } else if (d.depth === 2 && d.height === 1) {
          return "#BFBFBF"
        } else {
          return "#7F7F7F"
        }
      })
      .on("mouseover", function() { d3.select(this).attr("fill", "#C55A11"); })
      .on("mouseout", function(event,d) { 
        if (typeof(d.children) === 'undefined') {
          d3.select(this).attr("fill", "#F2F2F2")
        } else if (d.depth === 2 && d.height === 1) {
          d3.select(this).attr("fill", "#BFBFBF")
        } else {
          d3.select(this).attr("fill", "#7F7F7F")
        }

        
      })
      .on("click", (event, d) => (zoom(event, d), event.stopPropagation()));
      
  const label = svg.append("g")
      .style("font", "19px sans-serif")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
    .selectAll("text")
    .data(root.descendants())
    .join("text")
      .style("fill-opacity", d => d.depth === 2 && d.height === 1 ? 1 : 0)
      .style("display", d => d.depth === 2 && d.height === 1 ? "inline" : "none")
      .text(d => d.data.name);
  
  

  zoomTo([root.x, root.y, root.r * 2]);

  function zoomTo(v) {
    const k = width / v[2];

    view = v;

    label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
    node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
    node.attr("r", d => d.r * k);
  }

  function zoom(event, d) {

    focus = d;
    if (focus.depth === 3) {
      setModalOpen({'activated':focus.data.id})
    }else{

    const transition = svg.transition()
        .duration(event.altKey ? 7500 : 750)
        .tween("zoom", d => {
          const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
          return t => zoomTo(i(t));
        });

    // fillRect
    //   .transition(transition)
    //     .style("fill-opacity", d => focus.depth==3 && focus.height ==0 ? 1 : 0)

    label
      .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
      .transition(transition)
        .style("fill-opacity", d => d.parent === focus ? 1 : 0)
        .on("start", function(d) { if (d.parent === focus || d.children === null) this.style.display = "inline"; })
        .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });

      }
  }

  return svg.node();

}
export default bubbleChart