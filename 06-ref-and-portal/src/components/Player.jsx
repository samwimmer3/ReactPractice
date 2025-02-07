import { useState, useRef } from "react";

export default function Player() {
  const inputRef = useRef();
  const [name, setName] = useState("unknown entity");

  function handleClick(event) {
    if (inputRef.current.value === "") {
      return;
    }
    setName(inputRef.current.value);
    inputRef.current.value = "";
  }
  //using ref instead of extra state
  return (
    <section id="player">
      <h2>Welcome {name}!</h2>
      <p>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
