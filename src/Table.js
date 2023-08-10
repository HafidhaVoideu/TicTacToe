import React from "react";
import Row from "./components/Row";
export const Table = () => {
  let rows = [0, 1, 2];
  return (
    <table>
      <tbody>
        {rows.map((row) => (
          <Row key={row} y={row} />
        ))}
      </tbody>
    </table>
  );
};
