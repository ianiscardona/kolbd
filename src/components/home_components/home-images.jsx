import Marquee from "react-fast-marquee";

export const HomeImages = () => {
  const images = [
    "/images/homeheroimages/kolbd-1.jpg",
    "/images/homeheroimages/kolbd-2.jpg",
    "/images/homeheroimages/kolbd-3.jpg",
    "/images/homeheroimages/kolbd-4.jpg",
    "/images/homeheroimages/kolbd-5.jpg",
  ];

  return (
    <div className="w-screen">
      <ul className="list-none flex w-full">
        <Marquee speed={50} gradient={false}>
          {images.map((image, index) => (
            <li
              key={index}
              className="m-5 text-center w-[300px] h-[300px] border rounded-3xl border-gray-900 hover:scale-110 transition-all"
            >
              <img
                className="object-cover w-full h-full shadow-md rounded-3xl"
                src={image}
                alt={`Image ${index}`}
                loading="lazy"
              />
            </li>
          ))}
        </Marquee>
      </ul>
    </div>
  );
};
