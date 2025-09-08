import React, { useState } from "react";
import Bill from "./Bill";
import NumberOfPeople from "./NumberOfPeople";
import TipSelect from "./TipSelect";
import Result from "./Result";

function Form() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState(0);

  const tipAmount = people > 0 ? (bill * tip / 100) / people : 0;
  const total = people > 0 ? bill / people + tipAmount : 0;

  const handleReset = () => {
    setBill(0);
    setPeople(1);
    setTip(0);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-8">
        <Bill onChange={(e) => setBill(Number(e.target.value))} />
        <TipSelect onSelect={setTip} />
        <NumberOfPeople onChange={(e) => setPeople(Number(e.target.value))} />
      </div>

      <Result tipAmount={tipAmount} total={total} onReset={handleReset} />
    </div>
  );
}

export default Form;

