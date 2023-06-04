import { HomeImages } from "./home-images";

export const HomeHero = () => {
  return (
    <div className="relative flex flex-col items-center mb-10">
      <text className="font-mono text-4xl text-white text-center">
        Lorem Ipsumyan Neilman Meream!
      </text>
      <HomeImages />
    </div>
  );
};
