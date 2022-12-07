import React from "react";

const ToppingsCheckbox = ({ toppingsLabel }) => {
  return (
    <label className="flex gap-2">
      <input type="checkbox" />
      {toppingsLabel}
    </label>
  );
};

export default ToppingsCheckbox;
