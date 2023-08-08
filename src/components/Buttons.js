import React from "react";

const Buttons = ({ activiti, size }) => {
  return (
    <div
      onClick={activiti}
      className={`flex items-center justify-center p-4 rounded-lg  cursor-pointer bg-primary ${size}`}
    >
      Watch Now
    </div>
  );
};

export default Buttons;
