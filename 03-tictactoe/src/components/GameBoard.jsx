const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, turns}) {

//   const[gameBoard, setGameBoard] = useState(initialGameBoard);
//   function handleSelectSquare(rowIndex, colIndex)
//   {
//     setGameBoard((prevGameboard) => {
//         const updatedBoard = [...prevGameboard.map((innerArray) => [...innerArray])]; //need to update immutable
//         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
//         return updatedBoard;
//     });
//     onSelectSquare();
//   }

    const gameBoard = initialGameBoard;

    for(const turn of turns){
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>onSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
