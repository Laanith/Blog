import TitleBar from "../TitleBar";
import Header from "../Header";
import Footer from "../Footer";
import ImageComponent from "../ImageComponent";
import cpp from "../../images/C++.png";

// const props = {
//   imgSrc: cpp,
//   type: "contain",
//   imgAlt: "quote by May Sarton - Belgian Female Novelist",
//   scale: 0.2,
//   marginTop: -450,
//   marginBottom: -450,
// };

function BlogPost_4() {
  return (
    <>
      <Header></Header>
      <div id="wrapper" className="mx-[200px]">
        <p className="text-gray-600 prompt">
          <i>October 29, 2023</i>
          <br></br>
          <br></br>
          Hi again.
          <br></br>
          <br></br>I am writing this to discuss the workflow of how I deployed
          the MNIST-classifier model into web using tensorflowjs. It's a
          relatively easy task actually, which took 4 days of my free time apart
                  from college. A small project that helps me code better.
                  

                  The work flow is as follows :

                  1. Training a MNIST model on kaggle. Well, actually the dataset is available in tensorflow itself. So I trained a model and saved it as '.h5' file (keras models are intended to have this extension).

                  {/* 2. To my utter ashtonisment, you cannot */}
        </p>
      </div>
      <Footer></Footer>
    </>
  );
}

export default BlogPost_4;
