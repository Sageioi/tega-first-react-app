import React from "react"

const Spinner = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-left"><Spinner aria-label="Loading..." /></div>
    </div>
  );
}

export default Spinner;