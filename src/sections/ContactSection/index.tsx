import { SVGContact } from "../../svg/SVGContact"



export const ContactSection = ()=>{
    return(
        <>
            <div className="ContactSectionContainer relative w-100 px-2">
                <SVGContact></SVGContact>
                <section className="ContactSectionContent flex-center flex-column">
                    <div className="profileImage mb-2"></div>
                    <h5 className="mb-1">Vamos nos conectar !</h5>
                    <h4>Gostaria de apresentar sua proposta ? </h4>
                    <h4 className="email">wwallace.dev@gmail.com</h4>
                </section>
            </div>
            
        </>
    )
}