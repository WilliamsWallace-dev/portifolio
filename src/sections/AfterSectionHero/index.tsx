import { Link } from "react-router-dom"
// import { IconGitHub } from "../../svg/IconGitHub"
// import { IconLinkedIn } from "../../svg/IconLinkedIn"

import IconGitHub  from "../../assets/Icon/iconGitHub.svg"
import IconLinkedIn from "../../assets/Icon/IconLinkedIn.svg"
// import IconInstagram from "../../assets/Icon/IconInstagram.svg"


export const AfterSectionHero = ()=>{
    return(
        <>
            <section className="afterSectionHero container ">
                <div className="mr-1">
                    <div className="titleSection ">
                        <h5 className="mb-1" data-aos-delay="0" data-aos-duration="1500" data-aos="fade-up">Eu sou</h5>
                        <h2 data-aos-delay="100" data-aos-duration="1500" data-aos="fade-up">Front-end React Developer</h2>
                    </div>
                    <p className="p2 my-2" data-aos-delay="200" data-aos-duration="1500" data-aos="fade-up">Concretizando projetos com criatividade, aprendizado contínuo e 
                        habilidades em design e código, sempre superando expectativas.
                    </p>
                    <div className="flex-center" style={{justifyContent : "flex-start"}} data-aos-delay="300" data-aos-duration="1500" data-aos="fade-up">
                        <Link to="https://www.linkedin.com/in/williams-wallace" target="_blank"><div className=" px-1 icon-svg"><img src={IconLinkedIn} alt="" /></div></Link>
                        <Link to="https://github.com/WilliamsWallace-dev" target="_blank"><div className=" px-1 icon-svg"><img src={IconGitHub} alt="" /></div></Link>
                        {/* <IconLinkedIn></IconLinkedIn>
                        <IconGitHub></IconGitHub> */}
                    </div>
                </div>
                <div className="secondContent ">
                    <h5 className="mb-1" data-aos-delay="400" data-aos-duration="1500" data-aos="fade-up">Envolvido com</h5>
                    <h4 data-aos-delay="500" data-aos-duration="1500" data-aos="fade-right">UI Design</h4>
                    <h4 data-aos-delay="600" data-aos-duration="1500" data-aos="fade-left">Motion Design</h4>
                </div>
            </section>
        </>
    )
}