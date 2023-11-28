import React from "react";

function GuessInput() {
  const [input, setInput] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();

        console.log(input);
        setInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
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
