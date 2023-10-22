import { useState } from "react";
import BlogPost from "../components/BlogPost";

function Redirector_2() {
  const [props, setProps] = useState({
    title: "Come on bruh, why didn't I learn C++ until now !",
    content:
      "Let's talk about how I encountered some CV approaches while trying to solve PS of a Kaggle competition hosted by my University.",
    imgAlt: "Computer Vision",
    imgSrc:
      "https://miro.medium.com/v2/resize:fit:1400/1*8gmgaAkFdI-9OHY5cA93xQ.png",
    type: "contain",
    link: "/computer-vision",
  });

  return <BlogPost props={props}></BlogPost>;
}

export default Redirector_2;
