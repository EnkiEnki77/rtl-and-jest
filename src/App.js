import { useState } from "react";
import "./App.css";

import OrderSummary from "./pages/summary/OrderSummary";
import SummaryForm from "./pages/summary/SummaryForm";

export function replaceCamelWithSpaces(colorName) {
  const arr = [...colorName].map((item) =>
    item === item.toUpperCase() ? ` ${item}` : item
  );

  return arr[0].toUpperCase().concat(arr.slice(1).join(""));
}

// console.log(replaceCamelWithSpaces("redViolet"));

// function App() {
//   const [color, setColor] = useState("MediumVioletRed");
//   const [isChecked, setIsChecked] = useState(false);

//   const handleColor = () => {
//     setColor((prev) =>
//       prev === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed"
//     );
//   };

//   const handleCheckbox = (e) => {
//     setIsChecked(e.target.checked);
//   };

//   return (
//     <div className="App">
//       <button
//         style={{
//           backgroundColor: isChecked ? "gray" : color,
//           cursor: isChecked ? "not-allowed" : "pointer",
//         }}
//         onClick={handleColor}
//         disabled={isChecked}
//       >
//         Changes to{" "}
//         {`${color === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed"}`}
//       </button>
//       <label>
//         Disable button
//         <input type="checkbox" onChange={(e) => handleCheckbox(e)} />
//       </label>
//     </div>
//   );
// }

const App = () => {
  return <div></div>;
};

export default App;
