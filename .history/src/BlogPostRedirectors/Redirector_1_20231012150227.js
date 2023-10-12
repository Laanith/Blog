import BlogPost from "../components/BlogPost";


const props = {
    title: "Redirecting...",
    content : "In this first Blogpost I am making, I would like to discuss about how to make myself more articulate, the sole purpose of starting this blog.  Just click on the title to read more about it... I know you will 😉",
    imgAlt : "Articulation",
    imgSrc : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fd2ds8yldqp7gxv.cloudfront.net%2FEffective%2BCommunication%2BSkill%2Bcourse%2FCommunication-Skillss.webp&tbnid=iwZBYM_I2ivehM&vet=12ahUKEwiy--TVmfCBAxVq5DgGHXOVDuoQMygqegUIARDJAQ..i&imgrefurl=https%3A%2F%2Fwww.sprintzeal.com%2Fcourse%2Fcommunication-skills-certification-training&docid=z_3a2KGU9-9CXM&w=800&h=800&q=effective%20communication%20skills&hl=en&client=opera&ved=2ahUKEwiy--TVmfCBAxVq5DgGHXOVDuoQMygqegUIARDJAQ"
}

function Redirector_1(){

    return (
        <BlogPost props={props}></BlogPost>
    );

}

export default Redirector_1;