import { useEffect, useState } from "react";
import { sampleChars } from "../../seedData/sampleChars";

export function CharList({ handleChange, stickyClass }) {

  const charNames = sampleChars.map((char, index) => (
    <option key={char.name} value={index}>
      {char.name}
    </option>
  ));

  return (
    <div className={`sidebar ${stickyClass}`}>
      <h3>Character List</h3>
      <select className="listbox" defaultValue={0} size={2} onChange={handleChange}>
        {charNames}{" "}
      </select>
    </div>
  );
}
