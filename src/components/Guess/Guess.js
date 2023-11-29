import React from "react";

function Guess({ item }) {
  // [{},{}]
  // `cell ${status}`

  return (
    <>
      {item ? (
        <p className="guess">
          {item.map(({ letter, status }) => (
            <span key={crypto.randomUUID()} className={`cell ${status}`}>
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
