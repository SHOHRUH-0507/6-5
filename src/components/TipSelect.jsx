import React, { useState } from "react";

function TipSelect({ onSelect }) {
  const tips = [5, 10, 15, 25, 50];
  const [custom, setCustom] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <span className="mb-1.5">Select Tip %</span>
      <div className="grid grid-cols-3 gap-2">
        {tips.map((t) => (
          <button
            key={t}
            onClick={() => onSelect(t)}
            className="bg-dark-green text-white font-bold py-2 rounded-md hover:bg-primary hover:text-dark-green"
          >
            {t}%
          </button>
        ))}
        <input
          type="number"
          value={custom}
          onChange={(e) => {
            setCustom(e.target.value);
            onSelect(Number(e.target.value));
          }}
          placeholder="Custom"
          className="input text-center"
        />
      </div>
    </div>
  );
}

export default TipSelect;
