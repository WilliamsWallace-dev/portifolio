// import { BackgroundTechs } from "../../components/BackgroundTechs"
import { SVGTechs } from "../../svg/SVGTechs"
import { Techs } from "../../svg/Techs"



export const TechSection = ()=>{
    return(
        <>
            <section className="techSectionContainer relative">
                <div className="techSection container">
                    <div className="titleSection">
                        <h5 className="mb-1">Teck Stack</h5>
                        <h2>Tecnologias</h2>
                        <ul className="listTechSection flex-center flex-wrap mt-1">
                            <li className="itemListTech p2">React</li>
                            <li className="itemListTech p2">TypeScript</li>
                            <li className="itemListTech p2">Sass</li>
                            <li className="itemListTech p2">Figma</li>
                            <li className="itemListTech p2">Gsap</li>
                            <li className="itemListTech p2">Javascript</li>
                            <li className="itemListTech p2">HTML</li>
                            <li className="itemListTech p2">CSS</li>
                        </ul>
                    </div>
                </div>
                <SVGTechs/>
                <Techs></Techs>
            </section>
            
        </>
    )
}