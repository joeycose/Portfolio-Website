import React from "react";
import HomePage from "./HomePage";
import NavbarMain from "./NavbarMain";
import ProjectPage from "./ProjectPage";


export default function Layout() {
    return <>
    <div style={{background: "black"}}>
    <NavbarMain/>
    <HomePage/>
    <ProjectPage/>
    </div>
    </>
}