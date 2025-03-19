import React from "react";

const VCard = () => {
  return (
    <div className=" flex gap-5 items-center justify-between px-6 py-3">
      <p className="text-white/50 font-mont text-sm font-semibold">Today</p>
      <div className="flex justify-center items-center gap-3">
        <img src="./public/sun.png" alt="img" className="w-[50px] h-[50px]" />
        <p className="text-white/80 font-mont  font-semibold">Sunny</p>
      </div>

      <h2 className="text-xl font-mont text-white/70 font-bold"> 36<span className='font-medium'>/22</span></h2>
    </div>
  );
};

export default VCard;
