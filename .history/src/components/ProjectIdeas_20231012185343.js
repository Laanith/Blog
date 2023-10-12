import Footer from "./Footer";
import Header from "./Header";


function ProjectIdeas(){
    return (<>
    <Header></Header>
    <div className="mx-[200px] mb-66">
        <p className="text-gray-600 prompt mx-[5px]">
            I'm just a UG student , exploring the fields of Data-science , AI and Web-development.
            <br></br>
            <br></br>
            This page, is exclusively maintained for myself to keep track of stupid project ideas I have in my mind.
        </p>

        <ul className="mx-[40px] mt-[35px]">
            <li className="mb-[15px] text-gray-600 prompt mx-[30px]">
                   Now-a-days I have some interest in cricket. I am thinking of a data-visualisation project where I display vital information
                    of every cricketer across the world

            </li>
            {/* <li className="my-[15px]">
                <p className="text-gray-600 prompt mx-[30px]">
                    I have an idea to make my own portfolio
                </p>
            </li> */}
        </ul>
    </div>
    <Footer></Footer>
    </>)
}

export default ProjectIdeas;