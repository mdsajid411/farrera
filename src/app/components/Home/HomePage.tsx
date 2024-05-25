import * as React from "react"
import ResponsiveAppBar from "../LayOut/ResponsiveAppBar"
import MainContent from "./MainContent"
import HomeCart from "./HomeCart"
import HomeCartSlider from "./HomeCartSlider"
import Footer from "../LayOut/Footer"
const HomePage:React.FC=()=>{
  return(
    <>
    <ResponsiveAppBar/>
    <MainContent/>
    <HomeCart/>
    <HomeCartSlider/>
    <Footer/>
    </>
  )
}
export default HomePage