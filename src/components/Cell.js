import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/Context";
import { FaTimes, FaRegCircle } from "react-icons/fa";

export const Cell = ({ x, y }) => {
  const {
    player,
    matrix,
    setMatrix,
    moves,
    setMoves,
    nbrOfClicks,
    setNbrOfClicks,
    nextPlayer,
    checkWinner,
  } = useGlobalContext();
  const [CellContent, setCellContent] = useState("");
  const [isCellClicked, setIsCellClicked] = useState(false);

  useEffect(() => {
    setCellContent(matrix[y][x]);
    if (!isNaN(matrix[y][x])) setIsCellClicked(false);
  }, [matrix, y, x]);

  useEffect(() => {
    nextPlayer(nbrOfClicks);
    checkWinner();
  });

  const placeSymbole = () => {
    if (CellContent === "x") {
      return <FaTimes className="motif turquoise" />;
    } else if (CellContent === "o") {
      return <FaRegCircle className="motif yellow" />;
    } else {
      return <> </>;
    }
  };
  const palyCell = () => {
    let tempMatrix = JSON.parse(JSON.stringify(matrix));
    let cloneMatrix;

    if (!isCellClicked) {
      tempMatrix[y][x] = player;
      setMatrix(tempMatrix);
      setMoves([...moves, tempMatrix]);
      cloneMatrix = moves.slice(0, nbrOfClicks);
      setMoves([...cloneMatrix, tempMatrix]);
      setNbrOfClicks(nbrOfClicks + 1);
    }

    setIsCellClicked(true);
  };
  return <td onClick={palyCell}>{placeSymbole()}</td>;
};
