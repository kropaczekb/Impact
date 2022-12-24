<script>
  import DriveLess from "./DriveLess.svelte";
  let selected
</script>

<select bind:value={selected}>
  <option value={""}>

  </option>
  <option value={"Drive Less"}>
    Drive Less
  </option>
</select>

{#if selected === "Drive Less"}
  <DriveLess />
{/if}
