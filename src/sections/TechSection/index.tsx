// import { BackgroundTechs } from "../../components/BackgroundTechs"
import { SVGTechs } from "../../svg/SVGTechs"
import { Techs } from "../../svg/Techs"



export const TechSection = ()=>{
    return(
        <>
            <section className="techSectionContainer relative">
                <div className="techSection container">
                    <div className="titleSection">
                        <h5 className="mb-1" data-aos-delay="0" data-aos-duration="1500" data-aos="fade-up">Teck Stack</h5>
                        <h2 data-aos-delay="100" data-aos-duration="1500" data-aos="fade-up">Tecnologias</h2>
                        <ul className="listTechSection flex-center flex-wrap mt-1">
                            <li className="itemListTech p2" data-aos-delay="200" data-aos-duration="1500" data-aos="fade-up">React</li>
                            <li className="itemListTech p2" data-aos-delay="300" data-aos-duration="1500" data-aos="fade-up">TypeScript</li>
                            <li className="itemListTech p2" data-aos-delay="400" data-aos-duration="1500" data-aos="fade-up">Sass</li>
                            <li className="itemListTech p2" data-aos-delay="500" data-aos-duration="1500" data-aos="fade-up">Figma</li>   
                            <li className="itemListTech p2" data-aos-delay="600" data-aos-duration="1500" data-aos="fade-up">Javascript</li>
                            <li className="itemListTech p2" data-aos-delay="700" data-aos-duration="1500" data-aos="fade-up">HTML</li>
                            <li className="itemListTech p2" data-aos-delay="800" data-aos-duration="1500" data-aos="fade-up">CSS</li>
                            <li className="itemListTech p2" data-aos-delay="900" data-aos-duration="1500" data-aos="fade-up">Gsap</li>
                            <li className="itemListTech p2" data-aos-delay="1000" data-aos-duration="1500" data-aos="fade-up">Firebase</li>
                        </ul>
                    </div>
                </div>
                <SVGTechs/>
                <Techs></Techs>
            </section>
            
        </>
    )
}