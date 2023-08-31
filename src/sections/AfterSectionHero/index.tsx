import { IconGitHub } from "../../svg/IconGitHub"
import { IconLinkedIn } from "../../svg/IconLinkedIn"


export const AfterSectionHero = ()=>{
    return(
        <>
            <section className="afterSectionHero container ">
                <div className="">
                    <div className="titleSection ">
                        <h5 className="mb-1">Eu sou</h5>
                        <h2>Front-end React Developer</h2>
                    </div>
                    <p className="p2 my-2">Concretizando projetos com criatividade, aprendizado contínuo e 
                        habilidades em design e código, sempre superando expectativas.
                    </p>
                    <div className="flex-center" style={{justifyContent : "flex-start"}}>
                        <IconLinkedIn></IconLinkedIn>
                        <IconGitHub></IconGitHub>
                    </div>
                </div>
                <div className="secondContent ">
                    <h5 className="mb-1">Envolvido com</h5>
                    <h2>UI Design</h2>
                    <h2>Motion Design</h2>
                </div>
            </section>
        </>
    )
}