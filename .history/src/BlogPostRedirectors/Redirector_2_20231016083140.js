import { useState } from "react";
import BlogPost from "../components/BlogPost";



function Redirector_1() {


    const [props, setProps] = useState({
        title: "Computer Vision - the first acquaintaince in deeplearning journey",
        content: "Let's talk about how I encountered some CV approaches while trying to solve PS of a Kaggle competition hosted by my University.",
        imgAlt: "Computer Vision",
        imgSrc: "https://static.javatpoint.com/blog/images/communication3.png",
        type: "contain",
        link: "/articulation"
    });


    return (
        <BlogPost props={props}></BlogPost>
    );

}

export default Redirector_1;