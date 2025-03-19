import React, { useEffect, useState } from "react";
import HCard from "./components/HCard";
import { Fa6, FaLocationDot, FaTemperatureHalf } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { IoTimeSharp, IoWater } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import VCard from "./components/VCard";
import axios from "axios";
import { RiTimeZoneFill } from "react-icons/ri";

const App = () => {
  const [city, setCity] = useState();
  const [titleCity, setTitleCity] = useState();
  const [forecast, setForecast] = useState([]);
  const [current, setCurrent] = useState();
  const [location, setLocation] = useState();

  const fetchWeatherInformation = async (searchCity) => {
    try {
      const apiKey = "4f74a455ed5f4c7bb95141903251903";
      const response = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchCity}&days=9`
      );
      setCurrent(response.data.current);
      setForecast(response.data.forecast);
      setTitleCity(response.data.location.name);
      setLocation(response.data.location);
      console.log(response);
    } catch (error) {
      console.log("error");
    }
  };
  
  useEffect(() => {
    fetchWeatherInformation(!city ? "Pune" : city);
  }, []);

  const handleSearch = ()=>{
    fetchWeatherInformation(city);
  }

  return (
    <div className="w-full h-screen bg-gradient-to-bl from-zinc-700 to-zinc-800 flex justify-center items-center">
      <div className="flex flex-row flex-wrap justify-center items-center gap-10 p-5 w-[70%] h-[80%] bg-zinc-900 rounded-2xl shadow-2xl shadow-black">
        <div className="w-[60%] flex flex-col gap-3 p-3 h-full rounded-2xl">
          <div className="flex flex-row">
            {/* Search bar */}
            <input
              type="text"
              value={city}
              onChange={(e)=>setCity(e.target.value)}
              className=" bg-zinc-700 w-full px-2 py-1 text-white placeholder:text-gray-500 outline-none rounded-l-md"
              placeholder="Search for city"
            />
            <button
            onClick={()=>handleSearch()}
   
            className="bg-blue-600 px-7 rounded-r-md font-roboto text-gray-300 font-semibold hover:shadow-lg hover:shadow-blue-600/60 duration-300">
              Search
            </button>
          </div>

          <div className="flex justify-between h-[28%] ">
            {/* mid zone */}
            <div className="flex flex-col justify-between p-5">
              <div className="flex flex-col">
                <h1 className="text-white/80 font-semibold font-mont text-3xl">
                  {titleCity}
                </h1>
                <p className="text-white/50 text-xs mt-1">chance of rain 0%</p>
              </div>

              <h1 className="text-white/80 font-mont text-5xl font-semibold">
                {current?.temp_c}&#176;
              </h1>
            </div>

            <div className="flex justify-center items-center p-10">
              <img
                src={current?.condition?.icon}
                alt="weather"
                className="h-[150px] w-[150px]"
              />
            </div>
          </div>

          <div className="bg-zinc-700 h-[35%] w-full rounded-2xl flex flex-col p-4">
            {/* bottom box1 */}

            <h3 className=" text-white/50 font-semibold font-mont text-sm mb-2">
              LOCATION DETAILS
            </h3>

            <div className="flex flex-wrap justify-start">
              <div className="flex gap-2 w-[50%]">
                <div>
                  <FaLocationDot className="text-2xl mt-1 text-white/30 " />
                </div>
                <div className="flex flex-col">
                  <h3 className=" text-white/50 font-mont mb-2">Country</h3>
                  <h2 className="text-3xl font-mont text-white/70 font-bold">
                    {location?.country}
                  </h2>
                </div>
              </div>

              <div className="flex gap-2 w-[50%]">
                <div>
                  <FaChartArea className="text-2xl mt-1 text-white/30 " />
                </div>
                <div className="flex flex-col">
                  <h3 className=" text-white/50 font-mont mb-2">Region</h3>
                  <h2 className="text-3xl font-mont text-white/70 font-bold">
                    {location?.region} 
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-start mt-5">
              <div className="flex gap-2 w-[50%]">
                <div>
                  <RiTimeZoneFill className="text-2xl mt-1 text-white/30 " />
                </div>
                <div className="flex flex-col">
                  <h3 className=" text-white/50 font-mont mb-2">
                    Time Zone
                  </h3>
                  <h2 className="text-3xl font-mont text-white/70 font-bold">
                    {location?.tz_id}
                  </h2>
                </div>
              </div>

              <div className="flex gap-2 w-[50%]">
                <div>
                  <IoTimeSharp className="text-2xl mt-1 text-white/30 " />
                </div>
                <div className="flex flex-col">
                  <h3 className=" text-white/50 font-mont mb-2">Local Time</h3>
                  <h2 className="text-3xl font-mont text-white/70 font-bold">
                    {location?.localtime}
                  </h2>
                </div>
              </div>
            </div>
           
          </div>

          <div className="bg-zinc-700 h-[35%] w-full rounded-2xl flex flex-col p-4">
            {/* bottom box2 */}
            <h3 className=" text-white/50 font-semibold font-mont text-sm mb-2">
              AIR CONDITIONS
            </h3>

            <div className="flex flex-wrap justify-start">
              <div className="flex gap-2 w-[50%]">
                <div>
                  <FaTemperatureHalf className="text-2xl mt-1 text-white/30 " />
                </div>
                <div className="flex flex-col">
                  <h3 className=" text-white/50 font-mont mb-2">Real Feel</h3>
                  <h2 className="text-3xl font-mont text-white/70 font-bold">
                    {current?.feelslike_c}&#176;
                  </h2>
                </div>
              </div>

              <div className="flex gap-2 w-[50%]">
                <div>
                  <FaWind className="text-2xl mt-1 text-white/30 " />
                </div>
                <div className="flex flex-col">
                  <h3 className=" text-white/50 font-mont mb-2">Wind</h3>
                  <h2 className="text-3xl font-mont text-white/70 font-bold">
                    {current?.wind_kph} <span className="text-xl">Km</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-start mt-5">
              <div className="flex gap-2 w-[50%]">
                <div>
                  <IoWater className="text-2xl mt-1 text-white/30 " />
                </div>
                <div className="flex flex-col">
                  <h3 className=" text-white/50 font-mont mb-2">
                    Humidity
                  </h3>
                  <h2 className="text-3xl font-mont text-white/70 font-bold">
                    {current?.humidity} <span className="text-xl">mg/l</span>
                  </h2>
                </div>
              </div>

              <div className="flex gap-2 w-[50%]">
                <div>
                  <FaSun className="text-2xl mt-1 text-white/30 " />
                </div>
                <div className="flex flex-col">
                  <h3 className=" text-white/50 font-mont mb-2">UV Index</h3>
                  <h2 className="text-3xl font-mont text-white/70 font-bold">
                    {current?.uv}
                  </h2>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="w-[35%] flex flex-col p-4 h-full bg-zinc-700 rounded-2xl">
          <h3 className=" text-white/50 font-semibold font-mont text-sm mb-2">
            NEXT 9-DAY'S FORECAST
          </h3>

          {forecast.forecastday?.map((day) => (
            <VCard
              key={day.date} // Always use a unique key when mapping components
              day={day.date}
              icon={day.day.condition.icon}
              weather={day.day.condition.text}
              tempC={day.day.avgtemp_c}
              tempF={day.day.avgtemp_f}
            />
          ))}

        </div>
      </div>
    </div>
  );
};

export default App;
