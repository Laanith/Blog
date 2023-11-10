import { useState } from "react";
import BlogPost from "../components/BlogPost";
import tf from "../images/tensorflow.png";

function Redirector_5() {
const [props, setProps] = useState({
  title: "Revamp ! I discovered the power of CSS",
  content:
    "Look how I leveraged the power of CSS to make a minimal but nice looking UI",
  imgAlt: "CSS",
  imgSrc:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/180px-CSS3_logo_and_wordmark.svg.png",
  type: "contain",
  link: "/revamp",
});

  return <BlogPost props={props}></BlogPost>;
}

export default Redirector_5;


