
import IconGitHub  from "../../assets/Icon/iconGitHub.svg"
import IconLinkedIn from "../../assets/Icon/IconLinkedIn.svg"
import IconInstagram from "../../assets/Icon/IconInstagram.svg"
import { Link, Outlet } from "react-router-dom"

export const Footer = ()=>{
    return(
        <>
            <Outlet></Outlet>
            <section className="footerContainer">
                <p className="p2 mr-1">Todos os direitos reservados®</p>
                <p className="p2 ml-1">Portifólio Williams Wallace ® 2023</p>
                <div className="flex-center">
                    <Link to="https://www.instagram.com/williamswallace_/" target="_blank"><button className="btn-2 mx-1">@williamswallace_</button></Link>
                    {/* <div className=" px-1 desktop-none"><img src={IconInstagram} alt="" /></div> */}
                    <Link to="https://www.instagram.com/williamswallace_/" target="_blank"><div className=" px-1 icon-svg desktop-none"><img src={IconInstagram} alt="" /></div></Link>
                    <Link to="https://www.linkedin.com/in/williams-wallace" target="_blank"><div className=" px-1 icon-svg"><img src={IconLinkedIn} alt="" /></div></Link>
                    <Link to="https://github.com/WilliamsWallace-dev" target="_blank"><div className=" px-1 icon-svg"><img src={IconGitHub} alt="" /></div></Link>
                </div>
                
            </section>
        </>
    )
}