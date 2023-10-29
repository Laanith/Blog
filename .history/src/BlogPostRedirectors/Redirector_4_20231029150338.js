import { useState } from "react";
import BlogPost from "../components/BlogPost";
import tf from "../images/tensorflow.png";

function Redirector_3() {
  const [props, setProps] = useState({
    title: "I deployed an MNIST digit classifier into web using Node !!!",
    content:
      "Let's look into how I did train and deployed a digit classification model using tensorflowjs and Node.js",
    imgAlt: "Tensorflow",
    imgSrc: tf,
    type: "cover",
    link: "/cplusplus",
  });

  return <BlogPost props={props}></BlogPost>;
}

export default Redirector_3;
