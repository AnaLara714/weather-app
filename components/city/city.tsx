import React from "react";
import * as Icon from 'react-feather';
import { ApiContext } from "@/context/apiContext";

export default function City() {
  const {infosCity, addFav} = React.useContext(ApiContext);
  const [like, setLike] = React.useState(false);
  const isLike = () => {
    setLike(true);
  }
  return (
    <div className="flex flex-col p-4 rounded bg-[#FFFFFF] w-64 h-96 items-center justify-around">
      <button className="flex items-end ml-40" onClick={isLike}>
        <Icon.Heart fill={like === false ? "none" : "yes"} onClick={() => addFav(infosCity?.location.name)}/>
      </button>
      <div className="flex flex-col items-center gap-y-8">
        <img className="w-24 mt-8" src={infosCity?.current.condition.icon}/>
        <div className="flex flex-col items-center">
          <h1 className="flex items-center font-semibold">{infosCity?.location.name}, {infosCity?.location.region}, {infosCity?.location.country}</h1>
          <span>{infosCity?.location.localtime}</span>
        </div>
      </div>
    </div>
  )
}