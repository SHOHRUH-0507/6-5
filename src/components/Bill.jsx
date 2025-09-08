import React from 'react'

function Bill() {
    return (
    <div className="flex flex-col">
        <div className="flex items-center gap-2 justify-between mb-1.5">
          <span>Bill</span>
          <span>Can’t be zero</span>
        </div>
          <input
            className={"input bg-[url(./dollar.svg)] outline-primary"}
            type="number"
            placeholder="0"
            name="bill"
          />
      </div>
    )
}

export default Bill
