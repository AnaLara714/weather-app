import React from "react";
import { ApiContext } from "@/context/apiContext";
import City from "@/components/city/city";
import Others from "@/components/moreInformation/moreInformation";

export default function Research() {
  const {infosCity} = React.useContext(ApiContext);
  return (
    <div className="flex flex-row max-sm:flex-wrap gap-4 mt-10 justify-center ">
    <City/>
    <Others/>
  </div>
  )
}