<script lang="ts">
  import StandardCheckbox from "$lib/components/common/StandardCheckbox.svelte";
  import colors from "$lib/stores/colors";

  export let label: string,
    id: string,
    value: boolean = false,
    contrast: boolean = false
</script>


<div class="container">
  <StandardCheckbox
    bind:value={value}
    id={id}
  ></StandardCheckbox>
  <label
    style:margin-left="0.7rem"
    style:color={contrast ? $colors.contrast : $colors.lightContrast}
    for={id}>{label}
  </label>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
  }
</style>