import ImageComponent from "./ImageComponent";


function DoubleImageComponent(props) {

    console.log(props.props);
    return (
      <>
        <div className="flex justify-evenly">
          <div>
            <ImageComponent props={props.prop1}></ImageComponent>
            <br></br>
            <span className="flex justify-center">
              <strong>{props.prop1Caption}</strong>
            </span>
          </div>
          <div>
            <ImageComponent props={props.prop2}></ImageComponent>

            <br></br>
            <span className="flex justify-center">
              <strong>{props.prop2Caption}</strong>
            </span>
          </div>
        </div>
      </>
    );
}


export default DoubleImageComponent;
