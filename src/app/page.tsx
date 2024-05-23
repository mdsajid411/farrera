import Image from "next/image";
import ResponsiveAppBar from "./components/LayOut/ResponsiveAppBar";
import SignInSide from './components/SignIn'
import MainContent from "./components/Home/MainContent";
import Footer from "./components/LayOut/Footer";
import HomeCart from "./components/Home/HomeCart";
import HomeCartSlider from "./components/Home/HomeCartSlider";
import SignIn from "./components/SignIn";
// import '/global.css'
export default function Home() {
  return (
   
    
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
    
    <MainContent/>
   

     <HomeCart/>
     <HomeCartSlider/>
    <Footer></Footer>
     {/* <SignIn/> */}
    </>
  );
}
