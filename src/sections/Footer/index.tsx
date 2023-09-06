
import IconGitHub  from "../../assets/Icon/iconGitHub.svg"
import IconLinkedIn from "../../assets/Icon/IconLinkedIn.svg"
import IconInstagram from "../../assets/Icon/IconInstagram.svg"
import { Outlet } from "react-router-dom"

export const Footer = ()=>{
    return(
        <>
            <Outlet></Outlet>
            <section className="footerContainer">
                <p className="p2 mr-1">Todos os direitos reservados®</p>
                <p className="p2 ml-1">Portifólio Williams Wallace ® 2023</p>
                <div className="flex-center">
                    <button className="btn-2 mx-1">@williamswallace_</button>
                    <div className=" px-1 desktop-none"><img src={IconInstagram} alt="" /></div>
                    <div className=" px-1"><img src={IconGitHub} alt="" /></div>
                    <div className=" px-1"><img src={IconLinkedIn} alt="" /></div>
                </div>
                
            </section>
        </>
    )
}