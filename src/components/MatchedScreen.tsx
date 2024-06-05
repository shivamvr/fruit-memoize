import React from "react";

const MatchedScreen = ({ imgName }: { imgName: string }) => {
  return (
    <div className="matched-screen">
      <div style={{ display: "flex", alignItems: "start" }}>
        <img
          src={`/images/${imgName}.png`}
          alt=''
          style={{ width: "150px", transform: "rotate(-15deg)" }}
        />
        <span
          className='nunito'
          style={{
            color: "#EF8F35",
            textShadow: "1px 1px 1px #fff",
            fontSize: "50px",
          }}
        >
          It's a match!{" "}
        </span>
      </div>
      <img
       src={`/images/${imgName}-letter.png`}
        style={{
          width: "180px",
          transform: "rotate(15deg)",
          marginTop: "-6rem",
          marginLeft: "2.5rem",
        }}
        alt=''
      />
    </div>
  );
};

export default MatchedScreen;
