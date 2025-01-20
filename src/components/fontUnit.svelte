<script>
	let {onTagFocused, color, fontSize, tag, fontName, text, selected } = $props();
</script>
<textarea
 value={text}
 style:color={color}
 style:--fs={fontSize + "px"}
 style:--fn={fontName}
 style:--lb={selected ? "3px" : 0 }
 onfocus={()=>onTagFocused(tag)}
/>
<style>
textarea{
    display: block;
    border: none;
    outline: none;
    font-size: var(--fs);
    font-family: var(--fn);
    width:100%;
    border-left: var(--lb) solid #777;
}
</style>