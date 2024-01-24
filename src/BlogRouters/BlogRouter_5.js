import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BlogRouter_5() {
  const navigate = useNavigate();

  const [props, setProps] = useState({
    title: "A comeback after a long time",
    description: "Just read the blog...I think you'll love it. The context is about my return to the blog after a long time..... with me walking like a badass and my whole life being destroyed in the background like in the image beside. I love Logan by the way..",
    imgSrc:
      "https://ew.com/thmb/zYGEmpKIQQ_vAZXhQRL6inVF12Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hugh-jackman_612x380_1-09507249e2e24ca19bd9477af2afa0c9.jpg",
    route: "/return",
    imgStyle: {
      height: "30vh",
    },
  });

  return (
    <div
      className="my-[60px] min-w-[100%] h-fit flex flex-col justify-around border-2 border-gray-400 shadow-2x border-t-4 sm:flex-row cursor-pointer SHADOW"
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

export default BlogRouter_5;
