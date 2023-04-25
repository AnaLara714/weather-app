import MenuDropdrown from "@/components/dropdown";
import { ApiContext } from "@/context/apiContext"
import React from "react";

export default function Header() {
  const [city, setCity] = React.useState("");
  const {getSearchCity} = React.useContext(ApiContext);

  const SearchCity = () => {
    getSearchCity(city);
    
  }

  return (
    <header className="flex flex-row gap-x-4 p-6 items-center justify-between flex-wrap gap-y-1.5 ">
      <h1 className="text-xl font-bold">Weather App</h1>
      <div className="flex flex-row gap-x-2 items-center max-xl:flex-wrap max-xl:gap-y-2">
        <div className="flex flex-row">
          <input
            className="bg-[#f5f5f5] mr-1 p-1 rounded" 
            placeholder="Search a city..."
            onChange={(evt) => setCity(evt.target.value)}
          />
          <button
            onClick={SearchCity}
          >
           <img src="/icons/search.svg"/>
          </button>
        </div>
        <div className="dropdown">
      </div>
      <MenuDropdrown/>
    </div>
    </header>
  )
}