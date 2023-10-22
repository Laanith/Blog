import ImageComponent from "./ImageComponent";


function DoubleImageComponent(props) {
    return (
      <>
        <div className="flex justify-evenly">
          <div>
            <ImageComponent props={imgProps}></ImageComponent>
            <br></br>
            <span className="flex justify-center">
              <strong>Input for the U-Net Model</strong>
            </span>
          </div>
          <div>
            <ImageComponent props={imgMaskProps}></ImageComponent>

            <br></br>
            <span className="flex justify-center">
              <strong>Mask predicted by the U-Net model</strong>
            </span>
          </div>
        </div>
      </>
    );
}


export default DoubleImageComponent;
