import React, { useState } from "react";

// Style
import "./App.scss";
import "./tailwind.output.scss";

// Icons
import { AiFillGithub, AiOutlineCopyrightCircle } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";

// Components
import Piano from "./components/piano/piano.component";

function App() {
  const [pianoKeys] = useState({
    white: ["C", "D", "E", "F", "G", "A", "B"],
    black: ["C-Sharp", "D-Sharp", "F-Sharp", "G-Sharp", "A-Sharp"],
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.currentTarget.textContent);
    const audio = new Audio(`sounds/piano_${e.currentTarget.textContent}.mp3`);
    audio.play();
  };

  return (
    <div className="App flex h-screen">
      <div className="m-auto text-center">
        <h1>Virtual Piano</h1>
        <Piano
          whitePianoKeys={pianoKeys.white}
          blackPianoKeys={pianoKeys.black}
          handleClick={handleClick}
        />
        <div className="flex justify-between items-center">
          <AiFillGithub />
          <FiFigma />
          <AiOutlineCopyrightCircle />
          Alexandru Bejenaru
        </div>
      </div>
    </div>
  );
}

export default App;
