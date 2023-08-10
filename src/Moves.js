import React from "react";
import { useGlobalContext } from "./context/Context";

export const Moves = () => {
  const { goToMove, moves } = useGlobalContext();

  return (
    <div className="moves">
      {Array.apply(null, Array(moves.length)).map((move, index) => {
        return (
          <button
            className={`${index % 2 === 0 ? "yellow" : "turquoise"}`}
            key={index}
            onClick={() => goToMove(index)}
          >
            move {index}{" "}
          </button>
        );
      })}
    </div>
  );
};
