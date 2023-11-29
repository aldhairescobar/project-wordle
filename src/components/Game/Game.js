import React from "react";
// import { sample } from "../../utils";
// import { WORDS } from "../../data";
import GuestInput from "../GuessInput";
import GuestResults from "../GuessResults";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

/* 
  In GuessInput component:

  When user inputs a Guess word we need to validate it
    Calling the checkGuess helper and returning the array with the result
  Then we need to add the new array with the validation to the list of guesses instead of only the word

  In Guess component:
  Where are expecting the array of arrays with the validation

*/

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  // [ [] ,[{},{}], [] ]

  return (
    <>
      <GuestResults guessList={guessList} />
      <GuestInput guessList={guessList} setGuessList={setGuessList} />
    </>
  );
}

export default Game;
