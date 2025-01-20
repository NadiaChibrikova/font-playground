<script>
import FontUnit from '../components/fontUnit.svelte';
import fontNames from '../fontNames.json';
    let { data } = $props();
    const elements = data.elements
    const styles = $state(data.styles)

    let selectedTag = $state("h1")
    let fontName = $state('')
    const onTagFocused=(tag)=>{
        selectedTag=tag
        fontName = styles[tag].fontName
        }
    const loadedFonts=[]
    const addFont = (fontName) => {
        if(typeof document == "undefined" || !fontName || loadedFonts.includes(fontName)) return;
        
        loadedFonts.push(fontName)
        const fontUrl = `https://fonts.googleapis.com/css2?family=${fontName.replace(' ','+')}&display=swap`
        const fontLink = document.createElement("link")
        fontLink.href = fontUrl
        fontLink.rel = "stylesheet"
        document.head.appendChild(fontLink)
        }

    for (const property in styles)
        addFont(styles[property].fontName);

</script>

{#each elements as el}
<FontUnit tag={el.tag} onTagFocused={onTagFocused} {...styles[el.tag]} text={el.text} selected={el.tag==selectedTag} />
{/each}
<select name="fonts" size="8" bind:value={fontName}>
{#each fontNames as fn}
<option value={fn}>{fn}</option>
{/each}
</select>
<button onclick={()=>{
    addFont(fontName)
    styles[selectedTag].fontName=fontName
    }}>load font</button>
 <div>Font-size</div>
     <input bind:value={styles[selectedTag].fontSize} type="number" />

