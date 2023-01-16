
function Map(props) {



    return (
        <iframe
            title="myFrame"
            width="80%"
            height="60%"
            id="gmap_canvas"
            src={props.courtSrc}
        >
        </iframe>
    )

}

export default Map;