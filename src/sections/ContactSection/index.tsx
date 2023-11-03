import { SVGContact } from "../../svg/SVGContact"
import profileImage from "../../assets/image/profileImage.jpg"



export const ContactSection = ()=>{
    return(
        <>
            <div className="ContactSectionContainer relative w-100 px-2 ">
                <SVGContact></SVGContact>
                <section className="ContactSectionContent flex-center flex-column">
                    <div data-aos-delay="0" data-aos-duration="1500" data-aos="fade-up" className="profileImage mb-2"><img className="profileImage" src={profileImage} alt="" /></div>
                    <h5 className="mb-1" data-aos-delay="100" data-aos-duration="1500" data-aos="fade-up">Vamos nos conectar !</h5>
                    <h4 data-aos-delay="200" data-aos-duration="1500" data-aos="fade-up">Gostaria de apresentar sua proposta ? </h4>
                    <a href="mailto:wwallace.dev@gmail.com?subject=Contato via Portifólio : "><h4 className="email" data-aos-delay="300" data-aos-duration="1500" data-aos="fade-up">wwallace.dev@gmail.com</h4></a>
                </section>
            </div>
            
        </>
    )
}