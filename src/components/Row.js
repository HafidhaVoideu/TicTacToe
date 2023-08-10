import React from "react";
import { Cell } from "./Cell";

function Row({ y }) {
  let cells = [0, 1, 2];
  return (
    <tr>
      {cells.map((cell) => (
        <Cell key={cell} x={cell} y={y} />
      ))}
    </tr>
  );
}

export default Row;
