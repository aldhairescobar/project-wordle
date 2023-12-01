import React from "react";

function Guess({ item }) {
  // [{},{}]
  // `cell ${status}`

  /* const [hasWon, setHasWon] = React.useState("");
  console.log(item); */

  /* if (item) {
    const arr = item.filter((i) => i.status !== "correct");

    arr.length > 0 ? setHasWon(true) : setHasWon("");
  } */

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
