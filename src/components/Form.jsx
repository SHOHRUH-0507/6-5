import React, { useRef } from "react"
import { BsCurrencyDollar } from "react-icons/bs"

function Form() {
  const billInputRef = useRef();

  return (
    <form className="flex flex-col gap-8">
      <label className="flex flex-col">
        <div className="flex items-center gap-2 justify-between mb-1.5">
          <span>Bill</span>
          <span>Can’t be zero</span>
        </div>

        <span className="flex items-center rounded-[.3125rem] bg-light px-4.5 py-1.5">
          <BsCurrencyDollar className="block shrink-0 text-base text-icon font-bold" />
          <input
            ref={billInputRef}
            className="text-right grow text-2xl text-dark-green"
            type="number"
            placeholder="0"
            name="bill"
          />
        </span>
      </label>
    </form>
  );
}

export default Form;
