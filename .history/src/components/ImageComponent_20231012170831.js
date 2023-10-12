function ImageComponent(props){
    return (
        <img src={props.props.imgSrc} style={{objectFit: props.props.type}} alt={props.props.imgAlt}  className="mx-auto"></img>
    )
}

export default ImageComponent;
