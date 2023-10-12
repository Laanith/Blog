import Footer from "./Footer";
import Header from "./Header";
import ImageComponent from "./ImageComponent";


function GithubMock(){

    return (
        <>
        <Header></Header>
        <div id="wrapper" className="mx-[200px]">
            <ImageComponent></ImageComponent>
        </div>
        <Footer></Footer>
        </>
    )
    
}

export default GithubMock;