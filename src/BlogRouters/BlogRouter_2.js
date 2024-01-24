import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cpp from '../images/C++.png';

function BlogRouter_2() {
  const navigate = useNavigate();

  const [props, setProps] = useState({
    title: "Come on bruh, why didn't I learn C++ until now !",
    description:
      "C++ is by far the best language I have ever seen, in terms of optimality. I regret not learning it until now :[",
    imgSrc: cpp,
    route: "/cplusplus",
      imgStyle: {
        height : '30vh'
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

export default BlogRouter_2;
