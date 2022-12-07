import React from "react";

const Option = ({ imagePath, name, children }) => {
  return (
    <div>
      <img src={imagePath} alt={`${name} scoop`} />
      {children}
    </div>
  );
};

export default Option;
