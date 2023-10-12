function ImageComponent(props){
    return (
        <img src={props.props.src} style={{objectFit: props.props.type}}></img>
    )
}