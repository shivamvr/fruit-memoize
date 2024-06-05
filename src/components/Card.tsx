import React from "react";

const Card = ({
  name,
  status,
  type,
  visible,
  flipHandler,
}: {
  name: string;
  status: boolean;
  type: string;
  visible: boolean;
  flipHandler: (name: string, type: string) => void;
}) => {
  return visible ? (
    <div
      onClick={() => flipHandler(name, type)}
      className="card"
    >
      {/* <p>{status ? name : ""}</p> */}
      {type === "image" ? (
        status ? (
          <img style={{ width: "100%" }} src={`/images/${name}.png`} alt='' />
        ) : (
          <img style={{ width: "100%" }} src='/images/image-card.png' alt='' />
        )
      ) : status ? (
        <img
          style={{ width: "100%" }}
          src={`/images/${name}-letter.png`}
          alt=''
        />
      ) : (
        <img style={{ width: "100%" }} src='/images/letter-card.png' alt='' />
      )}
    </div>
  ) : (
    <div
      style={{ background: "transparent", width: "100px", height: "150px" }}
    ></div>
  );
};

export default Card;
