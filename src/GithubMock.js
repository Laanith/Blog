import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ImageComponent from "./Components/ImageComponent";

function GithubMock() {

    var props = {
      imgSrc:
        "https://media.istockphoto.com/id/642166578/vector/making-a-face-emoticon.jpg?s=612x612&w=0&k=20&c=Z5sJltC7c9f6-0hiBYgOF9ATZms96tnP_iKdMSSZjS0=",
      caption: "",
      imgStyle: {
        objectFit: "cover",
        scale: 0.9,
      },
    };


  return (
    <div className="flex flex-col min-w-[100vw] min-h-screen selection:bg-[#79d2ffe6]">
      <Header></Header>
      <div id="BODY" className="p-[20px]">
        <p >
          What's the point of being anonymous if I give you my GitHub ID ? Go
          back, read my blogs.
          <br></br>
          <br></br>
          You will get to know me later.
        </p>
        <ImageComponent imgProps={props}></ImageComponent>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default GithubMock;
