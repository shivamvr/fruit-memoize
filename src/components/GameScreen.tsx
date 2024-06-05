import React, { useEffect, useState } from "react";
import Card from "./Card";
import MatchedScreen from "./MatchedScreen";

const GameScreen = ({
  gameEndHandler,
  scoreHandler,
  goToBack,
  score,
}: {
  score: number;
  gameEndHandler: (status: boolean) => void;
  scoreHandler: (newScore: number) => void;
  goToBack: () => void;
}) => {
  const [lives, setLives] = useState(5);
  const [matched, setMatched] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    name: "xyz",
    type: "xyz",
  });
  const imageData = [
    { name: "apple", status: false, type: "image", visible: true },
    { name: "orange", status: false, type: "image", visible: true },
    { name: "grapes", status: false, type: "image", visible: true },
    { name: "pineapple", status: false, type: "image", visible: true },
    { name: "banana", status: false, type: "image", visible: true },
    { name: "mango", status: false, type: "image", visible: true },
  ]
  const letterData = [
    { name: "apple", status: false, type: "letter", visible: true },
    { name: "orange", status: false, type: "letter", visible: true },
    { name: "grapes", status: false, type: "letter", visible: true },
    { name: "pineapple", status: false, type: "letter", visible: true },
    { name: "banana", status: false, type: "letter", visible: true },
    { name: "mango", status: false, type: "letter", visible: true },
  ]
  const suffledImageData = shuffleArray(imageData)
  const suffledLetterData = shuffleArray(letterData)

  const [imagesCards, setImagesCards] = useState(suffledImageData);
  const [lettersCards, setLettersCards] = useState(suffledLetterData);


  const flipHandler = (name: string, type: string) => {
    if (type == selectedCard.type) return;
    if (type == "letter" && selectedCard.type == "xyz") return;

    if (type === "image") {
      const flippedCards = imagesCards.map((card) => {
        if (card.name === name) {
          card.status = true;
        }
        return card;
      });
      setImagesCards(flippedCards);
      setSelectedCard({ name, type });
    }

    if (type === "letter") {
      const flippedCards = lettersCards.map((card) => {
        if (card.name === name) {
          card.status = true;
        }
        return card;
      });
      setLettersCards(flippedCards);
      setSelectedCard({ name, type });
      if (
        selectedCard.name === name &&
        selectedCard.type === "image" &&
        type === "letter"
      ) {
        // ------------------Matched-------------------
        scoreHandler(score + 1);
        setTimeout(() => {
          setMatched(true);
        }, 500);
        if (score >= 5) {
          gameEndHandler(true);
        }
        setTimeout(() => {
          const newImageCards = imagesCards.map((card) => {
            if (card.name === name) {
              card.visible = false;
            }
            return card;
          });
          const newLetterCards = lettersCards.map((card) => {
            if (card.name === name) {
              card.visible = false;
            }
            return card;
          });
          setImagesCards(newImageCards);
          setLettersCards(newLetterCards);
          setMatched(false);
        }, 1500);
      } else {
        // ----------------------Not--Matched---------------
        setTimeout(() => {
          setLives((prev) => prev - 1);
          const resetImageCards = imagesCards.map((card) => {
            card.status = false;
            return card;
          });
          const resetLetterCards = lettersCards.map((card) => {
            card.status = false;
            return card;
          });
          setImagesCards(resetImageCards);
          setLettersCards(resetLetterCards);
          if (lives <= 1) {
            gameEndHandler(true);
          }
        }, 1000);
      }
    }
  };

  function shuffleArray(
    array: { name: string; visible: boolean; type: string; status: boolean }[]
  ) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className='game-screen'>
      <img
        className='back-btn'
        onClick={goToBack}
        src='/images/back.png'
        alt=''
      />
      <div className='progress-bar'>
        <div className='progress' style={{ width: `${score * 16.66}%` }}></div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "25px",
          right: "250px",
        }}
      >
        {[...Array(lives)].map((e) => (
          <img style={{ width: "25px" }} src='/images/live.png' alt='' />
        ))}
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <div className='card-container'>
          {imagesCards.map((card) => (
            <Card
              key={card.name}
              name={card.name}
              type={card.type}
              visible={card.visible}
              status={card.status}
              flipHandler={flipHandler}
            />
          ))}
        </div>
        <div className='card-container'>
          {lettersCards.map((card) => (
            <Card
              key={card.name}
              flipHandler={flipHandler}
              visible={card.visible}
              name={card.name}
              type={card.type}
              status={card.status}
            />
          ))}
        </div>
      </div>

      {matched && <MatchedScreen imgName={selectedCard.name} />}
    </div>
  );
};

export default GameScreen;
