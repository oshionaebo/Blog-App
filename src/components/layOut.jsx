import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";

const LayOut = (props) => {
    const {children} = props

    return (
        <>
        <NavBar/>
        {children}
        <Footer/>
        </>
    )
}
export default LayOut;