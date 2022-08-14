import React from "react";

const InformationBox = ({icon,dataNumber,percent,title}) => {
  return (
    <div className="bg-custom text-cyan-200 p-4 mx-4 rounded-lg flex flex-col items-center justify-between h-52">
        {icon}
      <div className="flex items-center justify-between">
        <span className="ml-8">{dataNumber}</span>
        <span className="text-yellow-500">{percent} %</span>
      </div>
      <span>{title}</span>
    </div>
  );
};

export default InformationBox;
