export const load = () => {
    const newStyle = {fontSize: 20}
    const styles ={h1:{color:"#333333", fontSize:32, fontName:"Libre Baskerville"}, h2:{color:"black", fontName:"Montserrat", ...newStyle}, p:{color:"black", fontName:"Besley", ...newStyle}}
    
	return {
        styles: styles,
        elements:[
        {
            tag:"h1",
            text:"Welcome to Font Playground!"
        }, 
        {
            tag:"h2",
            text:"Find the perfect font combination for your project"
        }, 
        {
            tag:"p",
            text:"Font Playground is a free tool where you can check various font combinations. Currently it only supports Google Fonts."
        }]}
};