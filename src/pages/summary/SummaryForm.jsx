import React, { useState } from "react";
import { useEffect } from "react";

const SummaryForm = () => {
  const [checked, setChecked] = useState(false);
  const [popoverHidden, setPopOverHidden] = useState(false);

  const handleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <form className="flex flex-col gap-10 ">
        <label>
          <input
            className="mr-4"
            type="checkbox"
            checked={checked}
            onChange={handleChecked}
          />
          I agree to{" "}
          <span
            className="text-blue-500 hover:text-purple-500"
            onMouseEnter={() => setPopOverHidden(true)}
            onMouseLeave={() => setPopOverHidden(false)}
          >
            terms and conditions
          </span>
        </label>
        {popoverHidden && (
          <div className=" top-[40%] right-[20%] h-24 border absolute border-black p-4 flex items-center justify center">
            Ice cream will not actually be delivered
          </div>
        )}
        <button
          className="text-black border border-black cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed"
          type="submit"
          disabled={!checked}
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default SummaryForm;
