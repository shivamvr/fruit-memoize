import React, { useState } from "react";

const WelcomeScreen = ({
  welcomeDoneHandler,
}: {
  welcomeDoneHandler: (status: boolean) => void;
}) => {
  const [welcomeScreen, setWelcomeScreen] = useState("start");
  const welcomeScreenHandler = () => {
    if (welcomeScreen === "start") {
      setWelcomeScreen("next");
    } else if (welcomeScreen === "next") {
      setWelcomeScreen("yes");
    } else if (welcomeScreen === "yes") {
      welcomeDoneHandler(true);
    }
  };

  return (
    <div className='welcome-screen'>
      <img
        src={`/images/${welcomeScreen}-message.png`}
        style={{
          width: "250px",
          marginRight: "-30rem",
          marginBottom: "-3rem",
        }}
        alt=''
      />

      <div style={{ paddingBottom: "2.8rem", marginRight: "-16rem" }}>
        <img style={{ width: "320px" }} src='/images/monkey.png' alt='' />
        <button
          onClick={welcomeScreenHandler}
          className='image-button'
          style={{
            backgroundImage: `url("/images/${welcomeScreen}.png")`,
            marginLeft: "1rem",
          }}
        ></button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
