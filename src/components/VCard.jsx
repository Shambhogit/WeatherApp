import React from "react";

const VCard = (props) => {
  return (
    <div className=" flex gap-5 items-center justify-between px-6 py-3">
      <p className="text-white/50 font-mont text-sm font-semibold">{props.day}</p>
      <div className="flex justify-center items-center gap-3">
        <img src={props.icon} alt="img" className="w-[50px] h-[50px]" />
        <p className="text-white/80 font-mont  font-semibold">{props.weather}</p>
      </div>

      <h2 className="font-mont text-white/70 font-semibold">{props.tempC}&#176;<span className='font-medium text-white/50'>/{props.tempF}F</span></h2>
    </div>
  );
};

export default VCard;
