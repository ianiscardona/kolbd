import { ContentMessages } from "./pages/content-messages";
import { Home } from "./pages/home";

function App() {
  return (
    <div className="relative px-5 py-10 w-full h-full bg-pink-300">
      <Home />
      <ContentMessages />
    </div>
  );
}

export default App;
