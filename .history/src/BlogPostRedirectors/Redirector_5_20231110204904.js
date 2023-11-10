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

const [props, setProps] = useState({
  title: "Revamp ! I discovered the power of CSS",
  content:
    "Look how I leveraged the power of CSS to make a minimal but nice looking UI",
  imgAlt: "CSS",
  imgSrc:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/180px-CSS3_logo_and_wordmark.svg.png",
  type: "cover",
  link: "/revamp",
});
