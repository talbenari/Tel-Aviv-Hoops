
function Map(props) {



    return (
        <iframe 
        title="myFrame"
        width="350" 
        height="300" 
        id="gmap_canvas" 
        src={props.courtSrc} 
        >
        </iframe>
    )

}

export default Map;