import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guessList }) {
  // It returns an array of (NUM_OF_GUESSES_ALLOWED === 6) Guess components
  const guesses = range(0, NUM_OF_GUESSES_ALLOWED).map((number) => (
    <Guess key={number} />
  ));

  // it returns an array of Guess components based of user input
  const list = guessList.map((item) => (
    <Guess key={crypto.randomUUID()} item={item} />
  ));

  return (
    <div className="guess-results">
      {[...list, ...guesses].slice(0, NUM_OF_GUESSES_ALLOWED)}
    </div>
  );
}

export default GuessResults;
