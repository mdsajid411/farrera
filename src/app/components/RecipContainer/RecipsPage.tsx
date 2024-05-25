import * as React from 'react'
import ResponsiveAppBar from '../LayOut/ResponsiveAppBar'
import HeaderContainer from './HeaderContainer'
import Footer from '../LayOut/Footer'
const RecipesPage:React.FC=()=>{
    return(
        <>
        <ResponsiveAppBar/>
        <HeaderContainer/>
        <Footer/>
        </>
    )
}

export default RecipesPage