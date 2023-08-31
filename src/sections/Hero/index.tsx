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
                                <h5 className="mb-1">Olá,meu nome é</h5>
                                <h1>Williams Wallace</h1>
                            </div>
                            <h5 className="movWord-1">Criatividade</h5>
                            <h5 className="movWord-2">Proatividade</h5>
                            <h5 className="movWord-3">Disciplina</h5>
                        </div>
                        <div className="presentation flex-item-1 ">
                            <h5>Ademais</h5>
                            <h4>Desenvolvedor Front-End,
                                fascinado por aprender novas habilidades,
                                sempre buscando o mais alto nível de qualidade nos projetos.
                            </h4>
                            <h5 className="iconLocalization mt-2">Brasília-DF,Brasil</h5>
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