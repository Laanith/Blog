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
          <i>November 10, 2023</i>
          Hi all. ( Incase there are multiple people reading this except me and
          you.)
          <br></br>
          <br></br>I got a free weekend on which I actually wasted ( not
          literally wasted but actually learnt something) 3hrs spending time
          working on revamping the UI of my previously completed mini-project
          kinda thing.
          <br></br>
          <br></br>
          Well here we go.
        </p>
      </div>
      <Footer></Footer>
    </>
  );
}

export default BlogPost_5;
