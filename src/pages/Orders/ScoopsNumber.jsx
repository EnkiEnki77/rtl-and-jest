import React from "react";

const ScoopsNumber = ({ scoopLabel }) => {
  return (
    <label className="flex gap-2">
      {scoopLabel}
      <input
        type="number"
        min="0"
        value="0"
        className="border border-black opacity-100 w-10"
      />
    </label>
  );
};

export default ScoopsNumber;
