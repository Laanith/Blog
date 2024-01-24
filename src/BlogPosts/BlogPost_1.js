import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ImageComponent from "../Components/ImageComponent";
import DoubleImageComponent from "../Components/DoubleImageComponent";
import trainImg from '../images/hcgbhavnagar_micu_mon--405_2022_5_30_7_20_12.jpeg';
import img from '../images/image.png';
import imgMask from '../images/imagemask.png';
import OpenerComponent from "../Components/OpenerComponent";


function BlogPost_1() {

const props = {
  imgSrc:
    trainImg,
  caption: "A sample of image from the train set",
  style: {
    width : '60vw',
    objectFit: "contain",
    marginTop : 20
  },
  };
  


  const img1props = {
    imgSrc: img,
    caption: "An image from training set",
    style: {
      margin : 10
    }
  }

  const img2props = {
    imgSrc: imgMask,
    caption: "The mask generated using U-Net",
    style: {
      margin : 10
    }
  }

  const openerProps = {
    imgSrc:
      "https://miro.medium.com/v2/resize:fit:1400/1*8gmgaAkFdI-9OHY5cA93xQ.png",
    title: "Computer Vision - the visual magic of deep learning paradigm",
  };
  
  return (
    <div className="flex flex-col min-w-[100vw] min-h-screen selection:bg-[#79d2ffe6]">
      <Header></Header>
      <div id="BODY" className="p-[20px] lg:mx-[200px]">
        <OpenerComponent openerProps={openerProps} />
        <p>
          <i className="date">October 16, 2023</i>
          <br></br>
          <br></br>
          Hi,
          <br></br>
          <br></br>
          Last weekend was too hectic, I felt too overwhelmed actually. There
          was a competition going on upon Kaggle being hosted by my university.
          The problem statement was to extract screen-region of several ECG
          monitors captured in different orientations.
          <br></br>
          <br></br>
          The dataset was clean. The actual problem in the statement is that the
          screens need not be rectangular. Actually , applying a rectangular
          bounding box using YOLO would have been easy if all the train images
          were homogeneous. They contain screens which are quadrilateral in
          shape too actually, as the camera was capturing the image of ECG
          machine from different orientations in the room.
          <br></br>
          <br></br>
          Have a sneek peak of an image if you want...
          <br></br>
          <br></br>
        </p>
        <ImageComponent imgProps={props}></ImageComponent>
        <p className="mt-[15px]">
          The actual dataset contained a csv file in which name of each image is
          given along with the quadrilateral corner points of box, in the form
          of [ [x<sub>1</sub>,y<sub>1</sub>], [x
          <sub>2</sub>,y<sub>2</sub>], [x<sub>3</sub>,y<sub>3</sub>], [x
          <sub>4</sub>,y<sub>4</sub>] ] format ( let us call these as point
          pairs ). Where [x<sub>1</sub>,y
          <sub>1</sub>] are the pixel coordinates of top-left corner of the
          screen in the image. [x<sub>2</sub>,y<sub>2</sub>] are the same of the
          top-right corner and so on....
          <br></br>
          <br></br>
          <br></br>
          <hr className="mb-10"></hr>
        </p>

        <p>
          <i className="date">October 21, 2023</i>
          <br></br>
          <br></br>
          Welcome again, took a small break before coming back with content.
          <br></br>
          <br></br>
          I've been practicing consistency lately. Abruptly stopped writing the
          blog on 16th October. On that morning, I just woke up and wrote the
          stuff displayed above. Had to stop as I had to go to college.
          <br></br>
          <br></br>
          Now coming back to the topic, the approach we used was to leverage the
          capabilities of a pre-trained model called U-Net. The approach is as
          follows.{" "}
          <strong>The expected input and output of model was this :</strong>
          <br></br>
          <br></br>
          RGB 1280 x 720 image &rarr; [ [x<sub>1</sub>,y<sub>1</sub>], [x
          <sub>2</sub>,y<sub>2</sub>], [x<sub>3</sub>,y<sub>3</sub>], [x
          <sub>4</sub>,y<sub>4</sub>] ]<br></br>
          <br></br>
          <strong>The model pipeline goes as follows :</strong>
          <br></br>
          <br></br>
          RGB 1280 x 720 image &rarr; 265 x 256 Binary Mask of Screen &rarr; [
          [x
          <sub>1</sub>,y<sub>1</sub>], [x
          <sub>2</sub>,y<sub>2</sub>], [x<sub>3</sub>,y<sub>3</sub>], [x
          <sub>4</sub>,y<sub>4</sub>] ]<br></br>
          <br></br>
          Using U-Net, whose architecture is well defined for Image
          segmentation, I duplicated its architecture in tensorflow (a library
          for implementing deep-learning models in python).
          <br></br>
          <br></br>
          Thereafter, for each image in the given train set, I resized the image
          into 256 x 256 shape using cv2.resize() function. ( cv2 is a library
          in python that works as an API for open-cv library. ) I used the
          corrseponding point pairs to create a 256 x 256 mask of the input 256
          x 256 image using cv2.Polyfill() function. This process was repeated
          for all images present in the training dataset. Label set Y also had
          binary mask of same size. Using binary crossentropy as loss, I trained
          the U-Net model. The loss was reduced to the order of 10<sup>
            -5
          </sup>{" "}
          which was actually good. (There is a huge chance that the model has
          overfit to the train set, but actually, it didn't. I tried testing it
          with some random pics and it worked out pretty well. )<br></br>
          <br></br>
          <DoubleImageComponent
            prop1={img1props}
            prop2={img2props}
          ></DoubleImageComponent>
          <br></br>
          And oh, I forgot to annotate the U-Net model architecture and details.
          I know your curiosity makes you google it, but let me provide a{" "}
          <a
            className="text-blue-600"
            href="https://www.geeksforgeeks.org/u-net-architecture-explained/"
          >
            link
          </a>{" "}
          anyways. I actually appreciate your curiosity, otherwise you wouldn't
          be here reading a blog of some random anonymous mad man writing
          anything that he wants on the internet.Getting back to the point, the
          model worked pretty good.
          <br></br>
          <br></br>
          Now the second step in making the pipeline is to make another CNN
          (Convolutional Neural Network) that takes these binary images as input
          and later gives the point pairs as the output. So I took all my
          training images, used that U-Net model to give me predictions of the
          masks to make a new training dataset of masks. Now I used
          corrseponding point pairs as labels. I implemented a CNN in which the
          input was this image, used to tf.keras.layers.Conv2D() [ Sorry for
          using python function directly &#58;) ] layers upon this image each
          followed by a MaxPooling layer. Then I flattened the output to train
          into dense (fully-connected) layers that gave an output of a 8x1
          vector, where each element in the vector is a representation of a
          co-ordinate in point pairs.
          <br></br>
          <br></br>I trained this custom CNN using Mean-Square Error as loss
          function, and I later on got to know that this is called as Corner
          Regression in DL paradigm. That's how the whole process went on.
          Training part is actually good, waiting for model to train epoch by
          epoch while it runs on GPU associated with Kaggle.
          <br></br>
          <br></br>
          That's how the whole pipeline went off. The model gave me pretty good
          results. There was atmost 5-6 pixel variation in the final predictions
          for both train and test images. Actually the training and test set
          were a lot refined. They did not have any abrupt intensity and color
          variations and thus making model to stand robust. The accuracy was
          about 0.97 on Kaggle. ( There is no accuracy associated with
          Regression models but actually, tensorflow uses it as a measure to
          tell us the robustness of the model ). After getting the corner points
          from the above mentioned C Well, upon submission the model actually
          gave me a Kaggle score of 0.96 which is pretty high. That was enough
          for me, thanks to my 2 days of sleeplessness by then. I quit improving
          that later on. Maybe I will try my hands on it again.
          <br></br>
          <br></br>
          That's it, folks. That's how the whole process went on. I conclude
          this blog with this. Actually this blog was to appreciate the
          excellence of deep learning models in the field of computer vision. I
          love this a lot. Hope I will do more projects in this domain.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default BlogPost_1;
