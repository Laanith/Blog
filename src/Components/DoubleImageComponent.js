import ImageComponent from "./ImageComponent";

function DoubleImageComponent(props) {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-evenly">
        <div>
          <ImageComponent imgProps={props.prop1}></ImageComponent>
          <br></br>
        </div>
        <div>
          <ImageComponent imgProps={props.prop2}></ImageComponent>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default DoubleImageComponent;
