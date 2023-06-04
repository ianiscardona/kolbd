import { HomeImages } from "../components/home_components/home-images";

export const Home = ({ handleHover, handleHoverOut }) => {
  return (
    <div className="relative flex flex-col items-center h-screen">
      <text className="mb-5 font-loveya text-6xl text-black text-center">
        Lorem Ipsumyan Neilman Meream!
      </text>
      <div onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
        <HomeImages />
      </div>
    </div>
  );
};
