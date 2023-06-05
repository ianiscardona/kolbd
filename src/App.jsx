import { useState } from "react";
import { ContentMessages } from "./pages/content-messages";
import { Home } from "./pages/home";

function App() {
  const [bgColor, setBgColor] = useState(true);

  const handleHover = () => {
    setBgColor(false);
  };

  const handleHoverOut = () => {
    setBgColor(true);
  };

  return (
    <div
      className={`relative pt-5 overflow-hidden ${
        bgColor === true ? "bg-white" : "bg-[#eabbcf]"
      } transition-all duration-700 ease-in-out`}
    >
      <Home handleHover={handleHover} handleHoverOut={handleHoverOut} />
      <ContentMessages />
    </div>
  );
}

export default App;
