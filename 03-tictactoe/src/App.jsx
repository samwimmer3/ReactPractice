import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
import {WINNING_COMBINATIONS} from './winning-combinations'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveCurrPlayer(gameTurns) {
  let newestPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    newestPlayer = "O";
  }
  return newestPlayer;
}

function App() {

  const [gameTurns, setGameTurns] = useState([]); //try to use the least amount of states possible
  const currentPlayer = deriveCurrPlayer(gameTurns);
  let winner;
  
  const gameBoard = initialGameBoard;
    for(const turn of gameTurns){
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }

  for(const combination of WINNING_COMBINATIONS){
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if(firstSquare && firstSquare === secondSquare && secondSquare === thirdSquare){
      console.log('Winner!');
      winner = firstSquare;
    }
  }

  function handleCurrentPlayer(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      let newestPlayer = deriveCurrPlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: newestPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={currentPlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={currentPlayer === "O"}
          />
        </ol>
        {winner && <h2>{winner} wins!</h2>}
        <GameBoard onSelectSquare={handleCurrentPlayer} turns={gameTurns} board={gameBoard}/>
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
