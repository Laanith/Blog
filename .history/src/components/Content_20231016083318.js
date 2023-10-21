import BlogPost from "./BlogPost"
import Redirector_1 from "../BlogPostRedirectors/Redirector_1";
import Redirector_2 from "../BlogPostRedirectors/Redirector_2";

function Content(){
    return (
        <div id="content">
            {/* <Redirector_1></Redirector_1> */}
            <Redirector_2></Redirector_2>
        </div>
    );
}


export default Content;