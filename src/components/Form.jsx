import React from "react"
import Bill from "./Bill";
import NumberOfPeople from "./NumberOfPeople";

function Form() {
  return (
    <div className="flex flex-col gap-8">
     <Bill/>
     <NumberOfPeople/>
    </div>
  );
}

export default Form;
