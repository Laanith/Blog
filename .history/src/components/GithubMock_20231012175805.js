import Footer from "./Footer";
import Header from "./Header";
import ImageComponent from "./ImageComponent";

var props = {
    imgSrc : 'https://media.istockphoto.com/id/642166578/vector/making-a-face-emoticon.jpg?s=612x612&w=0&k=20&c=Z5sJltC7c9f6-0hiBYgOF9ATZms96tnP_iKdMSSZjS0=',
    imgAlt : 'prank-image',
    type : 'cover'
    scale :  1

}

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