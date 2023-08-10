import React from "react";
import { Moves } from "./Moves";
import { Table } from "./Table";
import { useGlobalContext } from "./context/Context";
import Modal from "./components/modal/Modal";

export const Tic = () => {
  const { player, winner, isGameOver } = useGlobalContext();
  return (
    <div className="game__container">
      <p className={`turn ${player === "x" ? "turquoise" : "yellow"} `}>
        <span> {player}</span>
        Player {player === "x" ? 1 : 2}, you're up!
      </p>
      {<>{isGameOver ? <Modal text="Game Is Over" /> : undefined}</>}
      <div className="game__content">
        <Table />
        <Moves />
      </div>
      {winner !== "TBD" ? (
        <Modal text={`The winner is  ${winner}`} />
      ) : undefined}
    </div>
  );
};
