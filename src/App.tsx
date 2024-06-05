import React, { useState } from "react";
import "./App.css";
import GameScreen from "./components/GameScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import InstructionsScreen from "./components/InstructionsScreen";
import FinalScreen from "./components/FinalScreen";

function App() {
  const [isGameStart, setIsGameStart] = useState(false);
  const [welcomeScreenDone, setWelcomeScreenDone] = useState(false);
  const [isGameEnd, setIsGameEnd] = useState(false);
  const [score, setScore] = useState(0);

  const playGame = (status: boolean) => {
    setIsGameStart(status);
  };

  const welcomeDoneHandler = (status: boolean) => {
    setWelcomeScreenDone(status);
  };

  const gameEndHandler = (status: boolean) => {
    setIsGameEnd(status);
  };

  const scoreHandler = (newScore:number)=>{
    setScore(newScore)
  }

  const goToBack = ()=>{
    setWelcomeScreenDone(false)
    setIsGameStart(false)
    setIsGameEnd(false)
  }

  return (
    <>
      {!welcomeScreenDone && <WelcomeScreen welcomeDoneHandler={welcomeDoneHandler} />}
      {welcomeScreenDone && !isGameStart &&<InstructionsScreen playGame={playGame} />}
      {/* {isGameStart && <GameScreen/>} */}
      {!isGameEnd && isGameStart &&  (
        <GameScreen score={score} scoreHandler={scoreHandler} gameEndHandler={gameEndHandler} goToBack={goToBack} />
      )}
      {isGameEnd && <FinalScreen score={score} goToBack={goToBack} gameEndHandler={gameEndHandler} scoreHandler={scoreHandler}   />}
    </>
  );
}

export default App;
