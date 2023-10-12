import { useState } from "react";
import BlogPost from "../components/BlogPost";



function Redirector_1(){


    const [props, setProps] = useState({
        title: "Redirecting...",
        content : "In this first Blogpost I am making, I would like to discuss about how to make myself more articulate, the sole purpose of starting this blog.  Just click on the title to read more about it... I know you will 😉",
        imgAlt : "Articulation",
        imgSrc : "https://static.javatpoint.com/blog/images/communication3.png"
        type : "contain"
    });


    return (
        <BlogPost props={props}></BlogPost>
    );

}

export default Redirector_1;