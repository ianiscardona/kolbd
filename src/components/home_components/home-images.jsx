// import { useEffect, useState } from "react";

import Marquee from "react-fast-marquee";

export const HomeImages = () => {
  // const [position, setPosition] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setPosition((prevPosition) => prevPosition - 1);
  //   }, 10);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  const images = [
    "/images/homeheroimages/kolbd-1.png",
    "/images/homeheroimages/kolbd-2.png",
    "/images/homeheroimages/kolbd-3.png",
    "/images/homeheroimages/kolbd-4.png",
    "/images/homeheroimages/kolbd-5.png",
  ];

  return (
    <div className="m-0 w-screen overflow-hidden">
      <ul className="list-none flex w-full">
        <Marquee speed={50} gradient={false}>
          {images.map((image, index) => (
            <li
              key={index}
              className="m-5 text-center w-[350px] h-[350px] hover:scale-110 transition-all"
            >
              <img
                className="object-cover w-full h-full"
                src={image}
                alt={`Image ${index}`}
              />
            </li>
          ))}
        </Marquee>
      </ul>
    </div>
  );
};
