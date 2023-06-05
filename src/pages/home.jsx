import { HomeImages } from "../components/home_components/home-images";

export const Home = ({ handleHover, handleHoverOut }) => {
  return (
    <div className="relative flex flex-col items-center h-[90vh]">
      <h1 className="mb-5 font-patrick text-5xl text-black text-center">
        Happy Birthday Colleen Merhan!
      </h1>
      <div onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
        <HomeImages />
      </div>
    </div>
  );
};
