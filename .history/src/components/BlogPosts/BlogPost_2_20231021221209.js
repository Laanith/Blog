import TitleBar from "../TitleBar";
import Header from "../Header";
import Footer from "../Footer";
import ImageComponent from "../ImageComponent";
import trainImg from "../../images/hcgbhavnagar_micu_mon--405_2022_5_30_7_20_12.jpeg";

const props = {
  imgSrc: trainImg,
  type: "contain",
  imgAlt: "train images",
  scale: 0.5,
  marginTop: -160,
  marginBottom: -100,
};

function BlogPost_2() {
  return (
    <>
      <Header></Header>
      <div id="wrapper" className="mx-[200px] mb-[80px]">
        <br></br>
        <br></br>
        <p className="text-gray-600 prompt">
          <i>October 16, 2023</i>
          <br></br>
          <br></br>
          Hi,
          <br></br>
          <br></br>
          Last weekend was too hectic, I felt too overwhelmed actually. There
          was a competition going on upon Kaggle being hosted by my University.
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
        <ImageComponent props={props}></ImageComponent>
        <p className="text-gray-600 prompt">
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

        <p className="text-gray-600 prompt">
          <i>October 21, 2023</i>
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
          Now the second step in making the pipeline is to make another CNN (Convolutional Neural Network)
          that takes these binary images as input and later gives the point pairs as the output.
          So I took all my training images, used that U-Net model to give me predictions of the masks to make a new training dataset of masks. Now I used corrseponding point pairs as labels. I implemented a CNN in which the input was this image, used to tf.keras.layers.Conv2D()(sorry for using direct python function 😂) layers upon this image each followed by a MaxPooling layer
        </p>
      </div>
      <Footer></Footer>
    </>
  );
}

export default BlogPost_2;
