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
          from college. A small project that helps me code better. The work flow
          is as follows : 1. Training a MNIST model on kaggle. Well, actually
          the dataset is available in tensorflow itself. So I trained a model
          and saved it as '.h5' file (keras models are intended to have this
          extension).
          <br></br>
          <br></br> 2. Next comes the web dev deployment part. It is actually a
          creepy thing that took most of my time. The major inconvenience I
          faced is that tensorflowjs does not load '.h5' keras models directly
          into javascript. When I looked into the documentation I found that you
          have to use <strong>tensorflow_converter</strong> command line utility
          that is installed into system using{" "}
          <strong>
            <i>pip install tensorflowjs</i>
          </strong>
          <br></br>
          <br></br>
          Using this utility, the '.h5' model converts into '.json' extension
          which is easily readable by javascript programming language.
          <br></br>
          <br></br>
          3. The further process is relatively small. The frontend involved a
          form that took an image file through which the file transfers along
          with binary data using Javascript 'File' object. It is done using a
          simple fetch request.
          <br></br>
          <br></br>
          4. Later step on server side includes analysing the response object,
          extracting the received File object from client using <i>
            Multer
          </i>{" "}
          package in node.js. Next part involved reading this image (using Jimp
          package - shorthand for Javascript image processing) and resizing this
          recieved image as per model's input specifications, namely 28 x 28
                  grayscale image.
                  <br></br>
          <br></br>
        </p>
      </div>
      <Footer></Footer>
    </>
  );
}

export default BlogPost_4;
