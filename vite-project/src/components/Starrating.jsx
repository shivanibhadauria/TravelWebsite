import { useState } from "react";
import { FaDungeon, FaStar } from "react-icons/fa6";

export default function Starrating({ noOfStart = 5 }) {
  const [stars, setStarts] = useState(0);
  const [hover, setHover] = useState(0)

  function handleClick(index) {
    setStarts(index)

  }

  function handleMouseEnter(index){
    setHover(index)

  }

  function handleMouseLeave(){
    setHover(0)

  }

  return (
    <>
      <div className="flex">
        {[...Array(noOfStart)].map((_, index) => {
            index = index + 1;
          return (
            <>
              <FaStar
              className={  index <= hover || index <= stars ? "text-yellow-500" : "text-gray-800"}


                key={index}
                onClick={()=>handleClick(index)}
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave(index)}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
