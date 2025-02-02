import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
}

function deriveCurrPlayer(gameTurns) {
  let newestPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    newestPlayer = "O";
  }
  return newestPlayer;
}

function deriveWinner(gameBoard,players) {

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      secondSquare === thirdSquare
    ) {
      console.log("Winner!");
      winner = players[firstSquare];
    }
  }

  return winner;
}

function deriveGameboard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return gameBoard;
}


function App() {

  //States
  const [gameTurns, setGameTurns] = useState([]); //try to use the least amount of states possible
  const [players, setPlayers] = useState(PLAYERS);

  //Game Variables
  const currentPlayer = deriveCurrPlayer(gameTurns);
  const gameBoard = deriveGameboard(gameTurns);
  const winner = deriveWinner(gameBoard,players);
  const draw = gameTurns.length === 9 && !winner;

  //Input handlers
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

  function handleRematch() {
    console.log("rematch");
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={currentPlayer === "X"}
            onChangeName = {handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={currentPlayer === "O"}
            onChangeName = {handlePlayerNameChange}
          />
        </ol>
        {(winner || draw) && (
          <GameOver winner={winner} onSelect={handleRematch} />
        )}
        <GameBoard
          onSelectSquare={handleCurrentPlayer}
          turns={gameTurns}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
