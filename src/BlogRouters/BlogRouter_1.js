import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function BlogRouter_1() {

  const navigate = useNavigate();

  const [props, setProps] = useState({
    imgSrc:
      "https://miro.medium.com/v2/resize:fit:1400/1*8gmgaAkFdI-9OHY5cA93xQ.png",
    title: "Computer Vision - the first acquaintaince in deeplearning journey",
    route: "/computer-vision",

    description:
      "Let's talk about how I encountered some CV approaches while trying to solve PS of a Kaggle competition hosted by my University.",
    imgStyle: {},
  });



    return (
      <div
        className="my-[30px] h-fit flex flex-col justify-center border-gray-400 min-w-[100%] shadow-2x border-t-4 border-2 sm:flex-row cursor-pointer SHADOW"
        onClick={() => {
          navigate(props.route);
        }}
      >
        <img
          src={props.imgSrc}
          className="m-[10px] object-contain sm:w-[30%]"
          alt="pic"
        ></img>
        <div className="flex flex-col justify-start m-[10px]">
          <h1 className=" font-sans font-bold text-3xl sm:text-4xl">{props.title}</h1>
          <p className="mt-[10px]"> {props.description}</p>
        </div>
      </div>
    );
}

export default BlogRouter_1;
