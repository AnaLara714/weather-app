import Header from "@/components/header/header";
import Main from "@/components/main/main";
import { ApiProvider } from "@/context/apiContext";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather App</title>
      </Head> 
      <ApiProvider>
        <Header/>
        <Main/>
      </ApiProvider>
    </>
  )
}
