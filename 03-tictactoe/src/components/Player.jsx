import { useState } from "react";

export default function Player({ initialName, symbol , isActive}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [editing, setEditing] = useState(false);

  function handleClick() {
    setEditing((editing) => !editing); //this is the recommended way to change based off previous state
  }

  function handleChange(event) {
    setPlayerName(event.target.value); //this event pointer comes automatically from the input element
  }
  return (
    <li className = {isActive ? "active" : undefined}>
      <span className="player">
        {editing ? (
          <input
            text="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{editing ? "Save" : "Edit"}</button>
    </li>
  );
}
