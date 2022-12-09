import React, { useState } from "react";



function InputList({ addToList, buttonText }) {
  const [input, setInput] = useState(""); // Here is where the input field is tracked for list adding goodness.

  function handleInput(event) {
    // This function tracks the string information typed into the input field.
    const value = event.target.value;
    setInput(value);
  }

  function handleClick() {
    addToList(input);
    setInput("");
  }

  return (
    <section>
      <input className="inputForm" value={input} onChange={handleInput} />
      <button className="InputList" onClick={handleClick}>
        {buttonText}
      </button>
    </section>
  );
}

export default InputList;
