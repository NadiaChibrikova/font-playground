<script>
	let {header, children } = $props();
     let dx = $state(0)
     let dy = $state(0)
     let mx = $state(0)
     let my = $state(0)
     let isDragging = $state(false)
    const getX = (e)=>(e.clientX ?? e.touches[0].clientX)
    const getY = (e)=>(e.clientY ?? e.touches[0].clientY)
     function mouseHandler(e) {
        if(!isDragging) return
        mx=getX(e)+dx;
        my=getY(e)+dy;
    }
    function mouseDonwHandler(e) {
        isDragging=true
        const rect = e.currentTarget.getBoundingClientRect()
        dx= rect.x - getX(e)
        dy= rect.y - getY(e)
    }
</script>

<div on:mousemove={mouseHandler} on:touchmove={mouseHandler} on:mousedown={mouseDonwHandler} on:touchstart={mouseDonwHandler} on:mouseup={()=>{isDragging=false}} on:touchend={()=>{isDragging=false}}
    class='body'
        style:--top={my + "px"}
        style:--left={mx + "px"}
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
        padding:4px;
        border-radius:8px;
    }
</style>