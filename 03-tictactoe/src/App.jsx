import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

import { useState } from "react";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleCurrentPlayer(rowIndex, colIndex) {
    setCurrentPlayer(()=> currentPlayer === "X" ? "O" : "X");
    setGameTurns((prevTurns)=> {
      let newestPlayer ='X';
      if(prevTurns.length > 0 && prevTurns[0].player === 'X')
      {
        newestPlayer = 'O';
      }
      const updatedTurns = [{ square: {row: rowIndex, col: colIndex}, player: newestPlayer}, ...prevTurns];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className = "highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={currentPlayer==="X"}/>
          <Player initialName="Player 2" symbol="O" isActive={currentPlayer==="O"}/>
        </ol>
        <GameBoard onSelectSquare={handleCurrentPlayer} turns={gameTurns}/>
      </div>
      <Log turns = {gameTurns}/>
    </main>
  );
}

export default App;
