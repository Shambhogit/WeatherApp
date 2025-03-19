import React from "react";
import HCard from "./components/HCard";
import { Fa6, FaTemperatureHalf } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import VCard from "./components/VCard";

const App = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-bl from-zinc-700 to-zinc-800 flex justify-center items-center">
      <div className="flex flex-row flex-wrap justify-center items-center gap-10 p-5 w-[70%] h-[80%] bg-zinc-900 rounded-2xl shadow-2xl shadow-black">
        <div className="w-[60%] flex flex-col gap-3 p-3 h-full rounded-2xl">
          <div className="flex flex-row">
            {/* Search bar */}
            <input
              type="text"
              className=" bg-zinc-700 w-full px-2 py-1 text-white placeholder:text-gray-500 outline-none rounded-l-md"
              placeholder="Search for city"
            />
            <button className="bg-blue-600 px-7 rounded-r-md font-roboto text-gray-300 font-semibold hover:shadow-lg hover:shadow-blue-600/60 duration-300">
              Search
            </button>
          </div>

          <div className="flex justify-between h-[28%] ">
            {/* mid zone */}
            <div className="flex flex-col justify-between p-5">
              <div className="flex flex-col">
                <h1 className="text-white/80 font-semibold font-mont text-3xl">
                  Madrid
                </h1>
                <p className="text-white/50 text-xs mt-1">chance of rain 0%</p>
              </div>

              <h1 className="text-white/80 font-mont text-5xl font-semibold">
                31&#176;
              </h1>
            </div>

            <div className="flex justify-center items-center p-10">
              <img
                src="./public/sun.png"
                alt="weather"
                className="h-[130px] w-[130px]"
              />
            </div>
          </div>

          <div className="bg-zinc-700 h-[30%] w-full rounded-2xl flex flex-col p-4">
            {/* bottom box1 */}

            <h3 className=" text-white/50 font-semibold font-mont text-sm mb-2">TODAY'S FORECAST</h3>

            <div className="h-full flex flex-row flex-wrap">
              <HCard />
            </div>
          </div>

          <div className="bg-zinc-700 h-[35%] w-full rounded-2xl flex flex-col p-4">
            {/* bottom box2 */}
            <h3 className=" text-white/50 font-semibold font-mont text-sm mb-2">AIR CONDITIONS</h3>

            <div className="flex flex-wrap justify-start">

              <div className="flex gap-2 w-[50%]">
                <div>
                  <FaTemperatureHalf className="text-2xl mt-1 text-white/30 "/>
                </div>
                <div className="flex flex-col">
                  <h3 className=" text-white/50 font-mont mb-2">Real Feel</h3>
                  <h2 className='text-3xl font-mont text-white/70 font-bold'>31&#176;</h2>
                </div>
              </div>

              <div className="flex gap-2 w-[50%]">
                <div>
                  <FaWind className="text-2xl mt-1 text-white/30 "/>
                </div>
                <div className="flex flex-col">
                  <h3 className=" text-white/50 font-mont mb-2">Wind</h3>
                  <h2 className='text-3xl font-mont text-white/70 font-bold'>0.2 km</h2>
                </div>
              </div>

            </div>

            <div className="flex flex-wrap justify-start mt-5">

              <div className="flex gap-2 w-[50%]">
                <div>
                  <IoWater className="text-2xl mt-1 text-white/30 "/>
                </div>
                <div className="flex flex-col">
                  <h3 className=" text-white/50 font-mont mb-2">Chance of rain</h3>
                  <h2 className='text-3xl font-mont text-white/70 font-bold'>0%</h2>
                </div>
              </div>

              <div className="flex gap-2 w-[50%]">
                <div>
                  <FaSun className="text-2xl mt-1 text-white/30 "/>
                </div>
                <div className="flex flex-col">
                  <h3 className=" text-white/50 font-mont mb-2">UV Index</h3>
                  <h2 className='text-3xl font-mont text-white/70 font-bold'>3</h2>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="w-[35%] flex flex-col p-4 h-full bg-zinc-700 rounded-2xl">
        <h3 className=" text-white/50 font-semibold font-mont text-sm mb-2">LAST 7-DAY FORECAST</h3>

        <VCard/>
        
        </div>
      </div>
    </div>
  );
};

export default App;
