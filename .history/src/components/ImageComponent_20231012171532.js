function ImageComponent(props){
    // console.log(typeof(props.s));
    return (
        <img src={props.props.imgSrc} style={{objectFit: props.props.type, scale : props.scale}} alt={props.props.imgAlt}  className="mx-auto ImagePost"></img>
    )
}

export default ImageComponent;
