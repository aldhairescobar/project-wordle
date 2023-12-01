import React from "react";
import { checkGuess } from "../../game-helpers";

function GuessInput({
  userInput,
  setUserInput,
  guessList,
  setGuessList,
  answer,
  isGameOver,
}) {
  const [input, setInput] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        const guessValidation = checkGuess(input, answer);
        const nextGuessList = [...guessList, guessValidation];

        setGuessList(nextGuessList);
        setUserInput(input);
        setInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={isGameOver}
        type="text"
        id="guess-input"
        pattern="\w{5,5}"
        value={input}
        onChange={(e) => {
          const value = e.target.value.toUpperCase();
          setInput(value);
        }}
      />
    </form>
  );
}

export default GuessInput;
