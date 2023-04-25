import { ApiContext } from "@/context/apiContext";
import React from "react"

interface Iitem {
  city: any
}

export default function MenuDropdrown() {
  const {fav, removeFav, getSearchCity} = React.useContext(ApiContext);
  const [isOpen, setIsOpen] = React.useState(false);
  
  const clickMenuButtonClick = () => {
    setIsOpen(!isOpen);
  }

  const Item = ({ city }: Iitem) => {
    return (
      <div className="flex flex-row justify-between px-4 hover:bg-indigo-500 hover:text-white hover:rounded">
        <a 
          href="#" 
          onClick={(() => clickMenuButtonClick()) && (() => getSearchCity(city))}
          className={`${isOpen === true ? "block": "hidden"} block px-4 py-2 `}
        >{city}</a>
        <img src="/icons/x.svg" className="text-xs" onClick={() => removeFav(city)}/>
      </div>
    )
  }

  return(
    <div className="relative">
      <button className={`flex flex-row gap-x-1 items-center`} onClick={clickMenuButtonClick}>
        Favoritos
        <img src={isOpen == true ? "/icons/chevron-up.svg" : "/icons/chevron-down.svg"} alt="" />
      </button>
      <div className={`max-[320px]:left-0 absolute right-0 bg-white rounded-lg w-52 shadow-xl ${isOpen === true ? "block": "hidden"}`} >
        {fav?.map((city: string) => {
          return <Item city={city} />
        })}
      </div>
    </div>
  )
}