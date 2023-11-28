import React from "react";

function GuessResults({ guessList }) {
  const list = guessList.map((item) => (
    <p key={crypto.randomUUID()} className="guess">
      {item}
    </p>
  ));

  return <div className="guess-results">{list}</div>;
}

export default GuessResults;
