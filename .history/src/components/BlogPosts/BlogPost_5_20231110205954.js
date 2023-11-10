import TitleBar from "../TitleBar";
import Header from "../Header";
import Footer from "../Footer";
import ImageComponent from "../ImageComponent";
import cpp from "../../images/C++.png";

const props = {
  imgSrc: cpp,
  type: "contain",
  imgAlt: "quote by May Sarton - Belgian Female Novelist",
  scale: 0.2,
  marginTop: -450,
  marginBottom: -450,
};

function BlogPost_5() {
  return (
    <>
      <Header></Header>
      <div id="wrapper" className="mx-[200px]">
        {/* <ImageComponent props={props}></ImageComponent> */}

        <p className="text-gray-600 prompt">
          <i>November 10, 2023</i></p>
      </div>
      <Footer></Footer>
    </>
  );
}

export default BlogPost_5;
