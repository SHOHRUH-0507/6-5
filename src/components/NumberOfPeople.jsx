import React from 'react'

function NumberOfPeople() {
    return (
        <div className="flex flex-col">
        <div className="flex items-center gap-2 justify-between mb-1.5">
          <span>Number of People</span>
          <span className='text-red'>Can’t be zero</span>
        </div>
          <input
            className={"input bg-[url(./user.svg)] outline-red"}
            type="number"
            placeholder="0"
            name="Number of People"
          />
      </div>
    )
}

export default NumberOfPeople
