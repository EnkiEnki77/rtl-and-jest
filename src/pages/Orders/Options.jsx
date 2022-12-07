import React from "react";
import Option from "./Option";
import axios from "axios";
import { useEffect, useState } from "react";
import ScoopsNumber from "./ScoopsNumber";
import ToppingsCheckbox from "./ToppingsCheckbox";

const Options = ({ optionTitle, price }) => {
  const optionPrice = price.length === 1 ? `$2.00 each` : `$1.50 each`;
  const [response, setResponse] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionTitle}`)
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => error);
  }, [optionTitle]);

  console.log(response);
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-3xl capitalize">{optionTitle}</h2>
      <p className="">{optionPrice}</p>
      <p>{`Scoops total: $6.00`}</p>
      <div className="flex gap-10">
        {response.map((option) => (
          <Option
            key={option.name}
            name={option.name}
            imagePath={option.imagePath}
          >
            {optionTitle === "scoops" ? (
              <ScoopsNumber scoopLabel={option.name} />
            ) : (
              <ToppingsCheckbox toppingsLabel={option.name} />
            )}
          </Option>
        ))}
      </div>
    </div>
  );
};

export default Options;
