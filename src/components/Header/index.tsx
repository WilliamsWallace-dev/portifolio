import { Link } from "react-router-dom"



export const Header = ()=>{
    return(
        <>
            <section className="header ">
                <h4 className="logo" data-aos-delay="0" data-aos-duration="1500" data-aos="fade-up">Wwallace.Dev</h4>
                <div className="flex-center" data-aos-delay="100" data-aos-duration="1500" data-aos="fade-up">
                <Link to="https://drive.google.com/file/d/1skD07a2gwgZrSHm0imoHTtEbA12PZ7FT/view?usp=sharing" target="_blank"><button className="btn-2 mr-3">Download CV</button></Link>
                <a href="mailto:wwallace.dev@gmail.com?subject=Contato via Portifólio : "><button className="btn-1">Entrar em contato</button></a>
                </div>
            </section>
            <section className="headerMobile ">
                <div className="flex-center flex-between w-100" data-aos-delay="0" data-aos-duration="1500" data-aos="fade-up">
                    <Link to="https://drive.google.com/file/d/1skD07a2gwgZrSHm0imoHTtEbA12PZ7FT/view?usp=sharing" target="_blank"><button className="btn-2 mr-3 ">Download CV</button></Link>
                    <a href="mailto:wwallace.dev@gmail.com?subject=Contato via Portifólio : "><button className="btn-1">Entrar em contato</button></a>
                </div>
            </section>
        </>
    )
}