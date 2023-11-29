import React from "react";

function Guess({ item }) {
  return (
    <>
      {item ? (
        <p className="guess">
          {[...item].map((letter) => (
            <span key={crypto.randomUUID()} className="cell">
              {letter}
            </span>
          ))}
        </p>
      ) : (
        <p className="guess">
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
        </p>
      )}
    </>
  );
}

export default Guess;
