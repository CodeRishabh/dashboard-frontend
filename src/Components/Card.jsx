import React from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const Card = ({
  icon,
  iconColor,
  bgColor,
  title,
  number,
  subtitle,
  isPositive,
}) => {
  return (
    <div
      className={` w-[350px] lg:w-[280px] h-36 flex items-center justify-evenly shadow-md border-2 border-gray-300	gap-2 rounded-md bg-white `}
    >
      <div
        className={` flex items-center justify-center text-6xl w-28 h-28 rounded-full ${iconColor} ${bgColor} `}
      >
        {icon}
      </div>
      <div>
        <h2 className=" text-xs text-gray-600">{title}</h2>
        <h2 className=" text-2xl ">{number}</h2>
        {subtitle && (
          <p
            className={`text-xs flex items-center justify-center ${
              isPositive ? "text-[#07aa53]" : "text-red-700"
            }`}
          >
            {isPositive ? <BsArrowUp /> : <BsArrowDown />}
            {subtitle}
            <span className=" text-xs text-gray-600">&nbsp;this month</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
