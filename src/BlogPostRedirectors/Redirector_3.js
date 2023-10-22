import { useState } from "react";
import BlogPost from "../components/BlogPost";
import cpp from "../images/C++.png";

function Redirector_3() {
  const [props, setProps] = useState({
    title: "Come on bruh, why didn't I learn C++ until now !",
    content:
      "C++ is by far the best language I have ever seen, in terms of optimality. I regret not learning it until now :[",
    imgAlt: "C++",
    imgSrc:
      cpp,
    type: "contain",
    link: "/cplusplus",
  });

  return <BlogPost props={props}></BlogPost>;
}

export default Redirector_3;
