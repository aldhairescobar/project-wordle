import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuestInput from "../GuessInput";
import GuestResults from "../GuessResults";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userInput, setUserInput] = React.useState("");
  const [guessList, setGuessList] = React.useState([]);
  /* const [userHasWon, setUserHasWon] = React.useState(false);
  const [userHasLost, setUserHasLost] = React.useState(true); */

  let userHasWon = false;
  let userHasLost = false;
  let isGameOver = false;

  if (guessList.length <= 6 && userInput === answer) {
    userHasWon = !userHasWon;
    isGameOver = !isGameOver;
  } else if (guessList.length === 6 && userInput !== answer) {
    userHasLost = !userHasLost;
    isGameOver = !isGameOver;
  }

  return (
    <>
      <GuestResults guessList={guessList} />
      <GuestInput
        userInput={userInput}
        setUserInput={setUserInput}
        guessList={guessList}
        setGuessList={setGuessList}
        answer={answer}
        isGameOver={isGameOver}
      />
      {userHasWon && <Banner numOfGuesses={guessList.length} />}
      {userHasLost && <Banner answer={answer} />}
    </>
  );
}

export default Game;
