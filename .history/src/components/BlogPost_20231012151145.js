import { useState } from "react";

function BlogPost(){

    const [props, setProps] = useState({
        title: "Redirecting...",
        content : "In this first Blogpost I am making, I would like to discuss about how to make myself more articulate, the sole purpose of starting this blog.  Just click on the title to read more about it... I know you will 😉",
        imgAlt : "Articulation",
        imgSrc : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fd2ds8yldqp7gxv.cloudfront.net%2FEffective%2BCommunication%2BSkill%2Bcourse%2FCommunication-Skillss.webp&tbnid=iwZBYM_I2ivehM&vet=12ahUKEwiy--TVmfCBAxVq5DgGHXOVDuoQMygqegUIARDJAQ..i&imgrefurl=https%3A%2F%2Fwww.sprintzeal.com%2Fcourse%2Fcommunication-skills-certification-training&docid=z_3a2KGU9-9CXM&w=800&h=800&q=effective%20communication%20skills&hl=en&client=opera&ved=2ahUKEwiy--TVmfCBAxVq5DgGHXOVDuoQMygqegUIARDJAQ"
    });


    return (
    <div className="mx-[200px]">
    <div className="flex h-[300px] text-black shadow-2xl shadow-slate-600 border-b-4 justify-between BlogPost">
                <img className="w-[150px] m-5 BlogPost_Image" alt={props.imgAlt} src={props.imgSrc}></img>
                <div>
                <h3 className="font-bold text-5xl m-5 BlogPost_Title"><a href="#">{props.title}</a></h3>
                <p className="m-5 BlogPost_Primer">{props.content}</p>
                </div>
            </div>
            <hr></hr>
    </div>
    )
}

export default BlogPost;