import { useState } from "react";
import BlogPost from "../components/BlogPost";
import cpp from "../images/C++.png"

function Redirector_2() {
  const [props, setProps] = useState({
    title: "Come on bruh, why didn't I learn C++ until now !",
    content:
      "C++ is byfar the best language I have ever seen, in terms of optimality. I regret not learning it until nowS",
    imgAlt: "C++",
    imgSrc:
      "https://miro.medium.com/v2/resize:fit:1400/1*8gmgaAkFdI-9OHY5cA93xQ.png",
    type: "contain",
    link: "/computer-vision",
  });

  return <BlogPost props={props}></BlogPost>;
}

export default Redirector_2;
