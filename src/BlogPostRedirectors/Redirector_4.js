import { useState } from "react";
import BlogPost from "../components/BlogPost";
import tf from "../images/tensorflow.png";

function Redirector_4() {
  const [props, setProps] = useState({
    title: "I deployed an MNIST digit classifier into web using Node !!!",
    content:
      "Let's look into how I trained and deployed a digit classification model using tensorflowjs and Node.js",
    imgAlt: "Tensorflow",
    imgSrc: tf,
    type: "contain",
    link: "/mnist-deployment",
  });

  return <BlogPost props={props}></BlogPost>;
}

export default Redirector_4;
