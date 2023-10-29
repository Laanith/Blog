import { useState } from "react";
import BlogPost from "../components/BlogPost";
import tf from "../images/tensorflow.png";

function Redirector_3() {
  const [props, setProps] = useState({
    title: "I deployed an MNIST digit classifier into web using Node !!!",
    content:
      "C++ is by far the best language I have ever seen, in terms of optimality. I regret not learning it until now :[",
    imgAlt: "C++",
    imgSrc: cpp,
    type: "contain",
    link: "/cplusplus",
  });

  return <BlogPost props={props}></BlogPost>;
}

export default Redirector_3;
