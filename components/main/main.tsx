import React from "react";
import Research from "@/components/research/research";
import { ApiContext } from "@/context/apiContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Main() {
  const {infosCity, itFound, isLoading} = React.useContext(ApiContext);
  console.log(infosCity);

  return (
    <div className={`
    ${ 
      !itFound 
        ? isLoading 
          ? ""
          : "max-sm:h-screen  bg-[#f1f5f9]"
        : infosCity?.current.is_day === 1 
        ? "bg-[#fbbf24] " 
        : "bg-[#155e75]"
    } max-sm:h-max p-4 h-screen lg:h-max xl:h-screen flex flex-col `}
    >
      <ToastContainer
        position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false}
        closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored"
      />
      { isLoading ? 
        (<button 
          className="bg-[#f1f5f9] w-32 h-16 p-4 flex justify-center rounded" 
          disabled
        >
          <svg 
            className="animate-[spin_8000s_linear_infinite] flex flex-row justify-center items-center"/>
            Buscando...
        </button>) 
        : ("")
      }
      {itFound ? (
        <Research/> 
      ) : (
        <span className="flex justify-center font-semibold">
          Aqui você pode saber sobre e clima todas as cidades do mundo, testa aí!
        </span>
      )} 
    </div>
  )
}