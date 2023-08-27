import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card({ imagen }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgba(0, 0, 0, 0.25)"
      : "0 2px 10px rgba(0, 0, 0, 0.08)",
  });

  return (
    <animated.div
      className="flex flex-col items-center justify-center w-full rounded-lg"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" className="w-full rounded-lg mb-4" />
      {/* <h2 className="text-xl font-bold mb-1">Title</h2>
      <p className="mb-6">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>  */}
       {/* /* Buttons
      /* Uncomment and replace with Tailwind CSS buttons */  }
      {/* <div className="flex justify-between items-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Demo</button>
        <button className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg">Code</button>
      </div> */}
    </animated.div>
  );
}

export default Card;
