import React, { useEffect, useRef } from 'react';
import axios from "axios";
import { IDataWeather } from '@/service/interface';
import { toast } from 'react-toastify';
//127b38e92ca76411be80f8c2af154c21
  
const URL = "http://api.weatherapi.com/v1/forecast.json?key=15c8c44bc0b440108cf235848231804&q=";

interface IApi {
  searchCity: string | undefined;
  infosCity?: IDataWeather;
  itFound: boolean;
  isLoading?: boolean;
  fav?: any[];
  getSearchCity: (city: any) => void;
  addFav: (city: any) => void;
  removeFav: (city: any) => void;
}
interface IApiProviderProps {
  children: React.ReactNode;
}

export const ApiContext = React.createContext<IApi>({} as IApi, );

export const ApiProvider: React.FC<IApiProviderProps> = ({children}) => {
  const [searchCity, setSearchCity] = React.useState("");
  const [infosCity, setInfosCity] = React.useState();
  const [itFound, setItFound] = React.useState(false);
  const [fav, setFav] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>();

  const handleError = () => {
    toast.error("Cidade não encontrada!😭");
  }
  function getSearchCity(city: any) {
    setItFound(false);
    setIsLoading(true);
    axios.get(`${URL}=${city}`)
    .then(response => {
      setItFound(true);
      setInfosCity(response.data);
      console.log(response.data)
      setIsLoading(false);
    })
    .catch(error => {
      handleError();
    })
  }

  const addFav = (city: any) => {
    const favList = [...fav];
    const isInFav = favList.some(cityName => cityName === city)
      if (isInFav) return

    favList.push(city)
    setFav(favList);
    console.log("adicionado", fav)
  };
  
  const removeFav = (city: any) => {
    const favList = fav.filter(cityName => cityName !== city)
    setFav(favList);
    console.log("delete", fav)
  }
  console.log("lista", fav)
  return (
    <ApiContext.Provider value={{
      searchCity,
      infosCity,
      itFound,
      isLoading,
      fav,
      getSearchCity,
      addFav,
      removeFav,
    }}>
      {children}
    </ApiContext.Provider>
  )
}