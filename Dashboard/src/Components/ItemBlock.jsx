import React from "react";

function ItemBlock({heading,value}) {
  return (
    <div className="">
      <div className=" text-xs text-zinc-500">{heading}</div>
      <div className=" ">{value}</div>
    </div>
  );
}

export default ItemBlock;
