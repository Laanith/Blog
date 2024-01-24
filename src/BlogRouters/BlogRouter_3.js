import { useState } from "react";
import { useNavigate } from "react-router-dom";
import tf from '../images/tensorflow.png'

function BlogRouter_3() {
  const navigate = useNavigate();


  const [props, setProps] = useState({
    title: "I deployed an MNIST digit classifier into web using Node !!!",
    imgSrc : tf,
    description:
      "Let's look into how I trained and deployed a digit classification model using tensorflowjs and Node.js",
    route: "/mnist-deployment",
    imgStyle : {}
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

export default BlogRouter_3;
