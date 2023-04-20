import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import liranImg from "./assets/liran.png";
import liranAudio from "./assets/liran.mp3";
import tzippiImg from "./assets/tzippi.png";
import tzippiAudio from "./assets/tzippi.mp3";
import viteLogo from "/vite.svg";
import "./App.css";

const family = ["liran", "tzippi", "gal"]

function App() {
  const [count, setCount] = useState(0);
  const [audio] = useState(new Audio(liranAudio));

  const handleClick = () => {
    audio.play();
  };

  return (
    <div className="App">
      {/* <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={liranImg} className="logo" />
      </div> */}
      <div className="card">
        <button onClick={handleClick}>
          {/* count is {count} */}
          <img src={liranImg} className="card-image" />
        </button>
      </div>
    </div>
  );
}

export default App;
