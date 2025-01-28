<script>
	let {header, children } = $props();
</script>

<div class='body'
        style:--top={10 + "px"}
        style:--left={20 + "px"}
        >
<div class='header'>
{@render header()}
</div>
<div>
{@render children()}
</div>
</div>

<style>
    .header{
        height: 25px;
        line-height: 25px;
        background-color: #ddd;
        cursor: move;
    }
    .body{
        display: flex;
        flex-direction: column;
        border: 1px solid #666;
        position: absolute;
        top:var(--top);
        left:var(--left);
    }
</style>