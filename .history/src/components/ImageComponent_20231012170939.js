function ImageComponent(props){
    console.log(typeof(props.props.scale));
    return (
        <img src={props.props.imgSrc} style={{objectFit: props.props.type, scale : props.props.scale}} alt={props.props.imgAlt}  className="mx-auto"></img>
    )
}

export default ImageComponent;
