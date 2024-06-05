import React from "react";

const InstructionsScreen = ({playGame}:{playGame: (isGameStart: boolean)=>void}) => {
  return (
    <div className="instruction-screen" >
      <div>
        <img src='/images/steps.png' style={{ width: "550px" }} alt='' />
      </div>
      <div>
        <button
          className='image-button'
          onClick={()=>playGame(true)}
          style={{
            backgroundImage: `url("/images/play.png")`,
            marginLeft: "36rem",
            marginBottom: '3rem'
          }}
        ></button>
      </div>
    </div>
  );
};

export default InstructionsScreen;
