import React from "react";

function Result({ tipAmount, total, onReset }) {
  return (
    <div className="bg-dark-green text-white rounded-2xl p-6 flex flex-col gap-6 justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">Tip Amount</p>
            <span className="text-xs text-gray">/ person</span>
          </div>
          <p className="text-3xl text-primary">${(4.27)}</p>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">Total</p>
            <span className="text-xs text-gray">/ person</span>
          </div>
          <p className="text-3xl text-primary">${(32.79)}</p>
        </div>
      </div>

      <button
        onClick={onReset}
        className="bg-primary text-dark-green font-bold py-2 rounded-md hover:opacity-80"
      >
        RESET
      </button>
    </div>
  );
}

export default Result;
