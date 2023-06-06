import { useEffect, useState } from "react";
import { HomeImages } from "../components/home_components/home-images";
import happySong from "/public/music/Happy.mp3";

export const Home = ({ handleHover, handleHoverOut }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio(happySong));

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative pb-5 flex flex-col items-center h-screen w-full">
      <h1 className="font-patrick text-4xl text-black text-center">
        Happy Birthday
      </h1>
      <h1 className="mb-3 font-patrick text-5xl text-black text-center">
        Colleen Merhan!
      </h1>
      <div
        className="mb-5"
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <HomeImages />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-coming text-xl mb-2">
          Play the <span className="font-bold">Happy Song</span> :D
        </h1>
        <button
          className="w-20 rounded-full p-2 border-2 border-black bg-white"
          onClick={toggleAudio}
        >
          <h2 className="font-coming font-bold text-lg">
            {isPlaying ? "Pause" : "Play"}
          </h2>
        </button>
      </div>
    </div>
  );
};
