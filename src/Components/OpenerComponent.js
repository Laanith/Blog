import { useEffect, useState } from "react";

function OpenerComponent({ openerProps }) {

    const [hover, setHover] = useState(false);  
  

  return (
    <div
      className="relative h-fit bg-gray-500 mb-[20px]"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <img
        src={openerProps.imgSrc}
        alt="img-bg"
        className="w-full h-[50vh] object-cover"
      />
      <p
        className={`absolute bottom-0 text-white w-full p-[10px] transition-all duration-300
        ${hover ? "opacity-100" : "opacity-0"} img-grad sohne`}
      >
        {openerProps.title}
        <span className="block m-0 read-time">
          {" "}
          <span className="text-[20px] text-center align-middle justify-center">&#11049;</span> 3 min read
        </span>
      </p>
    </div>
  );
}

export default OpenerComponent;