import { useState } from "react";
import BlogPost from "../components/BlogPost";

function Redirector_5() {
  const [props, setProps] = useState({
    title: "Revamp ! I discovered the power of CSS",
    content:
      "Look how I leveraged the power of CSS to make a minimal but nice looking UI",
    imgAlt: "CSS",
    imgSrc: "",
    type: "cover",
    link: "/revamp",
  });

  return <BlogPost props={props}></BlogPost>;
}

export default Redirector_5;
