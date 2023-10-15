import React from "react";

const ProductTile = (props) => {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="w-3/5 flex items-center gap-5">
        <img src={props.image} alt="" className=" w-2/12 rounded-md " />
        <div className=" w-10/12">
          <p className=" text-2xl ">{props.title}</p>
          <p className=" text-xs text-gray-600">{props.subtitle}</p>
        </div>
      </div>
      <div className="w-2/5">
        <div className="flex items-center justify-around gap-5">
          <p className="text-s text-gray-600">{props.stock}</p>
          <p className="text-s font-bold text-gray-600">${props.price}</p>
          <p className="text-s text-gray-600">{props.sales}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
