<script>
  import * as d3 from "d3"

  let milesPerWeek = 1
  let reducedMiles = 1
  $: newTarget = milesPerWeek - reducedMiles
  $: reductionPercent = reducedMiles/milesPerWeek * 100
  let totalEmissions = 617700000
  $: coReduction = 0.000445334 * reducedMiles
  $: percentCoReduction = coReduction * 52 / totalEmissions * 100
  $: everyCoReduction = coReduction * 135000000 * 52 / totalEmissions * 100
</script>

<input type=number bind:value={milesPerWeek} min={0}>
<input type=number bind:value={reducedMiles} min={0}>
<p>How much you're reducing your footprint: {reductionPercent}%</p>
<p>How much CO2 that's saving: {coReduction} tons</p>
<p>How much that affects our total: {percentCoReduction}%</p>
<p>If everyone in the U.S. also drove that many miles less: {everyCoReduction}%</p>
<p></p>
