import React from "react";
import HomePage from "./HomePage";
import NavbarMain from "./NavbarMain";

export default function Layout() {
    return <>
    <div style={{background: "black"}}>
    <NavbarMain/>
    <HomePage/>
    </div>
    </>
}