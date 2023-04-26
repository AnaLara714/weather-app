import React from "react";
import * as Icon from 'react-feather';
import { ApiContext } from "@/context/apiContext";

interface Iprops {
  information: string;
  value: any;
  measure?: string;
  icon?: React.ReactNode;
}
export default function Others() {
  const {infosCity} = React.useContext(ApiContext);

  const Item = ({value, information, measure, icon}: Iprops) => {
    return (
      <div className="flex flex-col justify-between p-4 bg-[#FFFFFF] rounded w-52 h-32 items-center ">
        <div className="flex flex-row gap-2 flex items-center">
          <span className="font-semibold">{information}</span>
          <span>{icon}</span>
        </div>
        <span>{value}</span>
        <span>{measure}</span>
      </div>
    )
  }

  return (
    <div className="max-sm:h-max max-sm:justify-center max-xl:justify-center max-xl:w-[32rem] flex flex-row flex-wrap gap-y-2 gap-x-6 w-[58rem] h-80 justify-start ">
      <Item information="Humidade" value={infosCity?.current.humidity} measure="%" icon={<Icon.Droplet/>}/>
      <Item information="UV" value={infosCity?.current.uv} measure="nm" icon={<Icon.Sun/>}/>
      <Item information="Visibilidade" value={infosCity?.current.vis_km} measure="km" />
      <Item information="Nuvens" value={infosCity?.current.cloud} measure="%" icon={<Icon.Cloud/>}/>
      <Item information="Possibilidade de chuva" value={infosCity?.forecast.forecastday[0]?.day.daily_chance_of_rain} measure="%" icon={<Icon.CloudRain/>}/>
      <Item information="Velocidade do vento" value={infosCity?.current.wind_kph} measure="Km/h" icon={<Icon.Wind/>}/>
      <Item information="Direção do vento" value={infosCity?.current.wind_dir} icon={<Icon.Compass/>}/>
      <Item information="Temperatura" value={infosCity?.current.temp_c} measure="°C" icon={<Icon.Thermometer />}/>
      <Item information="Sensação térmica" value={infosCity?.current.feelslike_c} measure="°C"/>
      <Item information="Situação" value={infosCity?.current.condition.text}/>
      <Item information="Nascer do sol" value={infosCity?.forecast.forecastday[0].astro.sunrise} icon={<Icon.Sunrise/>}/>
      <Item information="Pôr do sol" value={infosCity?.forecast.forecastday[0].astro.sunset} icon={<Icon.Sunset/>}/>
    </div>
  )
}