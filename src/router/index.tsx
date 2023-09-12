import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Footer } from "../sections/Footer"
import { ProjectPage } from "../pages/ProjectPage"
import { ScrollToTop } from "./ScrollToTop"



export const AppRoutes = ()=>{


    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<><Footer></Footer></>}>
                        <Route path="" element = {<Home></Home>}></Route>
                        <Route path="/:name/:id" element = {<ProjectPage></ProjectPage>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}