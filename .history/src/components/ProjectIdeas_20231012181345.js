import Footer from "./Footer";
import Header from "./Header";


function ProjectIdeas(){
    return (<>
    <Header></Header>
    <div className="mx-[200px]">
        <p className="text-gray-600 prompt mx-[5px]">
            I'm just a UG student , exploring the fields of Data-science , AI and Web-development.
            <br></br>
            <br></br>
            This page, is exclusively maintained for myself to keep track of stupid project ideas I have in my mind.
        </p>

        <ul>
            <li>
                <p text-gray-600 prompt mx-[5px]>Now-a-days I have some interest in cricket. I am thinking of a data-visualisation project where I display vital information
                    of every cricketer across the world
                </p>
            </li>
        </ul>
    </div>
    <Footer></Footer>
    </>)
}

export default ProjectIdeas;