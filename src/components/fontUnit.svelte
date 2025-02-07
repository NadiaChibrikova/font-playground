<script>
	let {onTagFocused, color, fontSize, tag, fontName, text, selected } = $props();
</script>
<div
 contenteditable="true"
 style:color={color}
 style:--fs={fontSize + "px"}
 style:--fn={fontName}
 style:--lb={selected ? "3px" : 0 }
 onfocus={()=>onTagFocused(tag)}
>{text}</div>
<style>
div{
    border: none;
    outline: none;
    font-size: var(--fs);
    font-family: var(--fn);
    width:100%;
    border-left: var(--lb) solid #777;
    padding-left:8px;
}
</style>