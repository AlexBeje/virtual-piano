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
    black: ["C-Sharp", "D-Sharp", "", "F-Sharp", "G-Sharp", "A-Sharp"],
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("👱", e.currentTarget.value);
    const audio = new Audio(`sounds/piano_${e.currentTarget.value}.mp3`);
    e.currentTarget.value && audio.play();
  };

  return (
    <div className="app flex h-screen">
      <div className="m-auto text-center">
        <h1 className="app__title mb-10">VIRTUAL PIANO</h1>
        <Piano
          whitePianoKeys={pianoKeys.white}
          blackPianoKeys={pianoKeys.black}
          handleClick={handleClick}
        />
        <div className="flex justify-between mt-5">
          <div className="flex items-center">
            <AiFillGithub className="mr-5" />
            <FiFigma />
          </div>
          <div className="flex items-center">
            <AiOutlineCopyrightCircle />
            Alexandru Bejenaru
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
