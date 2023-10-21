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
          of [x1,y1,x2,y2,x3,y3,x4,y4] format. Where [x1,y1] are the pixel
          coordinates of top-left corner of the screen in the image. [x2,y2] are
          the same of the top-right corner and so on....
          <br></br>
        </p>

        <p>
          <i>October 21, 2023</i>
          <br></br>
          <br></br>
        </p>
      </div>
      <Footer></Footer>
    </>
  );
}

export default BlogPost_2;
