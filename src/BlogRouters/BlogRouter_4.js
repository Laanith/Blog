import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BlogRouter_4() {
    const navigate = useNavigate();


  const [props, setProps] = useState({
    title:"Revamp ! I discovered the power of CSS and regenerated a dead old project",
      description:
         "Look how I leveraged the power of CSS to make a minimal but nice looking UI",
      imgSrc: 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/180px-CSS3_logo_and_wordmark.svg.png",
    route: "/revamp",
      imgStyle: {
          height: '30vh',
          margin : 40
    },
  });

  return (
    <div
      className="my-[60px] min-w-[100%] h-fit flex flex-col justify-center border-2 border-gray-400 shadow-2x border-t-4 sm:flex-row cursor-pointer SHADOW"
      onClick={() => {
        navigate(props.route);
      }}
    >
      <img
        src={props.imgSrc}
        style={props.imgStyle}
        className="m-[10px] object-contain sm:w-[30%]"
        alt="pic"
      ></img>
      <div className="flex flex-col justify-start m-[10px]">
        <h1 className=" font-sans font-bold text-3xl sm:text-4xl">
          {props.title}
        </h1>
        <p className="mt-[10px]"> {props.description}</p>
      </div>
    </div>
  );
}

export default BlogRouter_4;
