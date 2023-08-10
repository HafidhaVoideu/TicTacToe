import React, { useState, useContext } from "react";
const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const initialMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const [player, setPlayer] = useState("x");
  const [matrix, setMatrix] = useState(initialMatrix);
  const [moves, setMoves] = useState([initialMatrix]);
  const [winner, setWinner] = useState("TBD");
  const [nbrOfClicks, setNbrOfClicks] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  const playAgain = () => {
    setMatrix(initialMatrix);
    setPlayer("x");
    setIsGameOver(false);
    setWinner("TBD");
    setNbrOfClicks(1);
    setMoves([initialMatrix]);
  };

  const goToMove = (index) => {
    setMatrix(moves[index]);
    setNbrOfClicks(index + 1);
    setIsGameOver(false);
    setWinner("TBD");
    nextPlayer(index);
  };

  const nextPlayer = (nbr) => {
    if (nbr % 2 === 0) setPlayer("o");
    else setPlayer("x");
  };

  const checkWinner = () => {
    let i = 0;
    let isThereWinner = false;

    while (i <= 2 && isThereWinner === false) {
      if (matrix[0][i] === matrix[1][i] && matrix[1][i] === matrix[2][i]) {
        isThereWinner = true;
        setWinner(matrix[0][i]);
      }

      if (matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2]) {
        isThereWinner = true;
        setWinner(matrix[i][0]);
      }

      if (
        (matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]) ||
        (matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2])
      ) {
        isThereWinner = true;
        setWinner(matrix[1][1]);
      }
      i++;
    }

    if ((nbrOfClicks > 9 && isThereWinner === false) || isThereWinner === true)
      setIsGameOver(true);
  };

  return (
    <AppContext.Provider
      value={{
        player,
        setPlayer,
        nextPlayer,
        matrix,
        setMatrix,
        winner,
        checkWinner,
        moves,
        setMoves,
        nbrOfClicks,
        setNbrOfClicks,
        isGameOver,
        goToMove,
        playAgain,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
