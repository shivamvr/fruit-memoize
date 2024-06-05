import React from "react";

const FinalScreen = ({
  score,
  gameEndHandler,
  scoreHandler,
  goToBack,
}: {
  score: number;
  gameEndHandler: (status: boolean) => void;
  scoreHandler: (newScore: number) => void;
  goToBack: () => void;
}) => {
  const restartGameHandler = () => {
    gameEndHandler(false);
    scoreHandler(0);
  };

  return (
    <div className="final-screen">
      <img
        className='back-btn'
        onClick={goToBack}
        src='/images/back.png'
        alt=''
      />
      <div className="score-card">
        <h2
          style={{
            position: "absolute",
            top: "85px",
            left: "55px",
            color: "#fff",
            fontFamily: "Nunito",
            fontSize: "35px",
          }}
        >
          {score}
        </h2>
        <button
          onClick={restartGameHandler}
          className='image-button'
          style={{
            width: "220px",
            height: "50px",
            backgroundImage: `url("/images/yay.png")`,
            marginBottom: ".8rem",
          }}
        ></button>
      </div>
    </div>
  );
};

export default FinalScreen;
