function ImageComponent(props){
    return (
        <img src={props.props.imgSrc} style={{objectFit: props.props.type}} alt={props.props.imgAlt}></img>
    )
}

export default ImageComponent;
