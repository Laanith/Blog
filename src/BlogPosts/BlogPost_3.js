import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ImageComponent from "../Components/ImageComponent";
import projectscreenshot from '../images/ProjectScreenshot.png'

const props = {
  imgSrc: projectscreenshot,
  caption: "screenshot of my project",
  style: {
    scale: 0.6,
    marginTop: 0,
    marginBottom: 0,
  },
};

function BlogPost_3() {
  return (
    <div className="flex flex-col min-w-[100vw] min-h-screen selection:bg-[#79d2ffe6]">
      <Header></Header>
      <div id="BODY" className="p-[20px] lg:mx-[200px]">
        <p>
          {" "}
          <i className="date">October 29, 2023</i>
          <br></br>
          <br></br>
          Hi again.
          <br></br>
          <br></br>I am writing this to discuss the workflow of how I deployed
          the MNIST-classifier model into web using tensorflowjs. It's a
          relatively easy task actually, which took 4 days of my free time apart
          from college. A small project that helps me code better. The work flow
          is as follows :<br></br>
          <br></br>1. Training a MNIST model on kaggle. Well, actually the
          dataset is available in tensorflow itself. So I trained a model and
          saved it as '.h5' file (keras models are intended to have this
          extension).
          <br></br>
          <br></br> 2. Next comes the web dev deployment part. It is actually a
          creepy thing that took most of my time. The major inconvenience I
          faced is that tensorflowjs does not load '.h5' keras models directly
          into javascript. When I looked into the documentation I found that you
          have to use <strong>tensorflowjs_converter</strong> command line
          utility that is installed into system using{" "}
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
          5. Then the final part included prediction of the output digit using
          model that is loaded through tensorflowjs functions. This thing
          involved javascript promises that are actually my nightmares as they
          ususally involve making separate asynchronous functions as wrappers
          (-_-). This thing really involved a lot of 'async' and 'await'
          keywords of JS. Finally the predicted output is sent through the
          response object (which is a built in object like 'File' object in
          javascript.). The frontend then displays the predicted class.
          <br></br>
          <br></br>I am including a screenshot as an example to provide you a
          better understanding. Pardon about the UI, it is still raw. I will
          modify it later on. I just have to play with a few lines of css that's
          all.
          <br></br>
          <br></br>
          The fact that I can use this as a template to deploy further
          complicated models actually makes me feel good. Finally , I have a
          good satifaction of doing somethin' that actually helped me upskill
          myself after 4 days of reckless gruelling.
          <br></br>
          <br></br>
        </p>
        <ImageComponent imgProps={props}></ImageComponent>
        <p className="mt-[15px]">
          {" "}
          Thanks for reading. I may stop blogging for a month as the next month
          schedule is actually packed up as my end semesters are gonna hunt me
          by the end of November. I am actually a mediocre in terms of my
          academic achievements and I have to figure out some way to out do my
          past self. Hope I will write those exams well. Let's meet after a
          month. Or probably even before it. Who knows, life is non
          deterministic. Bye.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default BlogPost_3;
