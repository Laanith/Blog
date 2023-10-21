function ImageComponent(props){
    return (
        <img src={props.props.imgSrc} style={{objectFit: props.props.type , transform : 'scale('+props.props.scale+')', width :'fit-content', height:'fit-content', marginTop : props.props.marginTop, marginBottom : props.props.marginBottom}} alt={props.props.imgAlt}  className="mx-auto ImagePost"></img>
    )
}

export default ImageComponent;
