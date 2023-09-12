// import { BackgroundHero } from "../../components/BackgroundHero"


import { BackgroundHero } from "../../components/BackgroundHero"
import { Header } from "../../components/Header"


export const Hero = ()=>{
    
    
    return(
        <>
            <section className="heroContainer relative">
                <BackgroundHero></BackgroundHero>
                <Header></Header>
                <section className="heroContent relative flex-center">
                    <div className="flex-center flex-between w-100">
                        <div className="name flex-item-4 ">
                            <div className="titleSection">
                                <h5 className="mb-1" data-aos-delay="200" data-aos-duration="1500" data-aos="fade-left">Olá,meu nome é</h5>
                                <h1 data-aos-delay="400" data-aos-duration="1500" data-aos="fade-left">Williams Wallace</h1>
                            </div>
                            <h5 className="movWord-1" data-aos-delay="500" data-aos-duration="1500" data-aos="fade-left">Criatividade</h5>
                            <h5 className="movWord-2" data-aos-delay="600" data-aos-duration="1500" data-aos="fade-right">Proatividade</h5>
                            <h5 className="movWord-3" data-aos-delay="700" data-aos-duration="1500" data-aos="fade-left">Disciplina</h5>
                        </div>
                        <div className="presentation flex-item-1 ">
                            <h5 data-aos-delay="800" data-aos-duration="1500" data-aos="fade-right">Ademais,</h5>
                            <h4 data-aos-delay="1000" data-aos-duration="1500" data-aos="fade-right">Desenvolvedor Front-End,
                                fascinado por aprender novas habilidades,
                                sempre buscando o mais alto nível de qualidade nos projetos.
                            </h4>
                            <h5 className="iconLocalization mt-2" data-aos-delay="1100" data-aos-duration="1500" data-aos="fade-right">Brasília-DF,Brasil</h5>
                        </div>
                    </div>
                </section>


                <section className="heroContentMobile relative flex-center">
                    <div className="flex-center flex-column w-100 h-100 flex-between py-3 ">
                        <div className="name ">
                            <div className="titleSection text-center">
                                <h5 className="mb-1">Olá,meu nome é</h5>
                                <h1>Williams Wallace</h1>
                            </div>
                            <h5 className="movWord-1">Criatividade</h5>
                            <h5 className="movWord-2">Proatividade</h5>
                            <h5 className="movWord-3">Disciplina</h5>
                        </div>
                        <div className="presentation text-center">
                            <h5>Ademais</h5>
                            <h4>Desenvolvedor Front-End,
                                fascinado por aprender novas habilidades,
                                sempre buscando o mais alto nível de qualidade nos projetos.
                            </h4>
                            <h5 className="iconLocalization mt-2 w-100 flex-center">Brasília-DF,Brasil</h5>
                        </div>
                    </div>
                </section>


            </section>
           
        </>
    )
}