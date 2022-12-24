<script>
  import * as d3 from "d3"
  import { afterUpdate, onMount } from "svelte";

  let milesPerWeek = 1
  let reducedMiles = 1
  $: newTarget = milesPerWeek - reducedMiles
  $: reductionPercent = reducedMiles/milesPerWeek * 100
  let totalEmissions = 617700000
  $: coReduction = 0.000445334 * reducedMiles
  $: percentCoReduction = coReduction * 52 / totalEmissions * 100
  $: everyCoReduction = coReduction * 135000000 * 52 / totalEmissions * 100
  $: pieData = [ newTarget, reducedMiles ]
  let testData = [ 1, 2, 3, 4, 5 ]
  var data = [2, 4, 8, 10];

  afterUpdate(() => {
    var svg = d3.select("svg"),
        width = svg.attr("width"),
        height = svg.attr("height"),
        radius = Math.min(width, height) / 2,
        g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);

    // Generate the pie
    var pie = d3.pie();

    // Generate the arcs
    var arc = d3.arc()
                .innerRadius(0)
                .outerRadius(radius);

    //Generate groups
    var arcs = g.selectAll("arc")
                .data(pie(pieData))
                .enter()
                .append("g")
                .attr("class", "arc")

    //Draw arc paths
    arcs.append("path")
        .attr("fill", function(d, i) {
            return color(i);
        })
        .attr("d", arc);

  })
  // let width = 300
  // let height = 200
  // let svg = d3.select("#pie"),
  //   // width = svg.attr("width"),
  //   // height = svg.attr("height"),
  //   radius = Math.min(width, height) / 2,
  //   g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  // let color = d3.scaleOrdinal(["#98abc5", "#8a89a6"])
  // let pie = d3.pie()
  // let arc = d3.arc()
  //   .innerRadius(0)
  //   .outerRadius(radius)

  // let arcs = g.selectAll("arc")
  //   .data(pie(testData))
  //   .enter()
  //   .append("g")
  //   .attr("class", "arc")

  // arcs.append("path")
  //   .attr("fill", function(d, i) {
  //     return color(i)
  //   })
  //   .attr("d", arc)


  //////////////////////
    // .value(function(d) {return d.value})
  // let data_ready = pie(Object.entries(pieData))

  // svg.selectAll('whatever')
  //   .data_ready(data_ready)
  //   .append('path')
  //   .attr('d', d3.arc()
  //     .innerRadius(0)
  //     .outerRadius(radius)
  //   )
  //   .attr('fill', function(d) { return(color(d.pieData.key))})
  //   .attr("stroke", "black")
  //   .style("stroke-width", "2px")
  //   .style("opacity", 0.7)
</script>

<input type=number bind:value={milesPerWeek} min={0}>
<input type=number bind:value={reducedMiles} min={0}>
<p>How much you're reducing your footprint: {reductionPercent}%</p>
<p>How much CO2 that's saving: {coReduction} tons</p>
<p>How much that affects our total: {percentCoReduction}%</p>
<p>If everyone in the U.S. also drove that many miles less: {everyCoReduction}%</p>
<svg id="pie" width="300" height="200"></svg>
