<script>
	let {fontSize, selectedFont, allFonts } = $props();
    let fontName = $state(selectedFont)
</script>

<select name="fonts" size="8" bind:value={fontName}>
{#each allFonts as fn}
<option value={fn}>{fn}</option>
{/each}
</select>