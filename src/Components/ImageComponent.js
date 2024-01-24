function ImageComponent(props){
    return (
      <div className="pb-[10px] m-[20px] border-gray-400 border-4 text-center flex flex-col justify-center">
        <img
          className="mx-auto"
          alt="loda"
          src={props.imgProps.imgSrc}
          style={props.imgProps.style}
        ></img>
        {props.imgProps.caption === "" ? (
          <></>
        ) : (
          <p className="mt-[10px]">{props.imgProps.caption}</p>
        )}
      </div>
    );
}

export default ImageComponent;