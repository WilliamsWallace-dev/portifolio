import aboutImage1 from "../../assets/image/aboutImage-1.jpg"
import aboutImage12 from "../../assets/image/aboutImage-12.jpg"
import { SVGAboutDown, SVGAboutDownMobile, SVGAboutUp, SVGAboutUpMobile } from "../../svg/SVGAbout"
// import aboutImage21 from "../../assets/image/aboutImage-21.jpg"
// import aboutImage22 from "../../assets/image/aboutImage-22.jpg"
// import aboutImage23 from "../../assets/image/aboutImage-23.jpg"
// import aboutImage31 from "../../assets/image/aboutImage-31.jpg"
// import aboutImage32 from "../../assets/image/aboutImage-32.jpg"
// import aboutImage33 from "../../assets/image/aboutImage-33.jpg"
// import aboutImage34 from "../../assets/image/aboutImage-34.jpg"


 {/* <p className="p2 mt-1">Olá, meu nome é Williams Wallace e sou um Desenvolvedor Front-end com formação em 
                        Análise e Desenvolvimento de Software. Minha abordagem é focada na criação de interfaces inovadoras que 
                        harmonizam perfeitamente os princípios de UI e UX. Destaco-me por minha criatividade, disciplina e 
                        proatividade, constantemente ultrapassando limites ao incorporar ideias de maneira proativa.</p> */}



export const AboutSection = ()=>{
    return(
        <>
            <div className="relative">
                <SVGAboutUp></SVGAboutUp>
                <SVGAboutDown></SVGAboutDown>
                <SVGAboutUpMobile></SVGAboutUpMobile>
                <SVGAboutDownMobile></SVGAboutDownMobile>
                <section className="AboutSection container ">
                    <div className="AboutDescription flex-center flex-column mr-5 ">
                        <h5 data-aos-delay="0" data-aos-duration="1500" data-aos="fade-up" className="">About Me</h5>
                        <h2 data-aos-delay="100" data-aos-duration="1500" data-aos="fade-up">Williams Wallace</h2>                      
                        <p data-aos-delay="200" data-aos-duration="1500" data-aos="fade-up" className="p2 mt-1 presentation-1">Olá, sou o Williams Wallace, um Desenvolvedor Front-end com formação em 
                        Análise e Desenvolvimento de Software. Minha abordagem é focada na criação de interfaces criativas e amigáveis, garantindo 
                        que os sites e aplicativos que desenvolvo sejam atrativos e funcionais. Sou conhecido pela 
                        criatividade, disciplina e por estar sempre trazendo novas ideias de forma proativa.</p>
                        <p data-aos-delay="200" data-aos-duration="1500" data-aos="fade-up" className="p2 mt-1 presentation-2">Williams Wallace, Desenvolvedor Front-end especializado em criar interfaces atrativas e funcionais para sites e aplicativos. Reconhecido pela criatividade e disciplina na geração proativa de ideias. Formado em Análise e Desenvolvimento de Software.</p>
                    </div>
                    <div className="imgContainer relative ">
                        <div data-aos-delay="300" data-aos-duration="1500" data-aos="fade-up" className="image1"><img  src={aboutImage1} alt="" /></div>
                        <div data-aos-delay="400" data-aos-duration="1500" data-aos="fade-up" className="image12"><img src={aboutImage12} alt="" /></div>
                    </div>
                </section>

                {/* <section className="AboutSection container ">
                    <div className="AboutDescription flex-center flex-column mr-5 ">
                        <h5 className="">About Me</h5>
                        <h2>Williams Wallace</h2>
                        <p className="p2 mt-1 mobile-none">Tenho uma forte convicção no poder da colaboração em equipe e estou continuamente 
                        em busca de aprimoramento e aquisição de novas habilidades para enfrentar desafios de forma eficaz. Para 
                        além do universo digital, mantenho um entusiasmo ativo por esportes, desfruto de momentos com a família e
                         amigos, e aprecio filmes, séries e animes. Além disso, tenho um interesse especial em viajar, explorando 
                         novos destinos e enriquecendo minhas experiências pessoais.</p>
                         <p className="p2 mt-1 desktop-none">Acredito na colaboração em equipe e estou sempre aprendendo para enfrentar 
                         desafios. Fora do trabalho, adoro esportes, momentos com a família e amigos, além de filmes, 
                         séries e viagens para enriquecer minhas experiências pessoais.</p>
                    </div>
                    <div className="imgContainer relative mobile-none ">
                        <div className="image2 mb-2"><img  src={aboutImage21} alt="" /></div>
                        <div className="image2"><img src={aboutImage22} alt="" /></div>
                    </div>
                    <div className="image21 ml-2 mobile-none"><img src={aboutImage23} alt="" /></div>
                    <div className="imgContainer relative desktop-none ">
                        <div className="image1"><img  src={aboutImage23} alt="" /></div>
                        <div className="image12"><img src={aboutImage23} alt="" /></div>
                    </div>
                </section> */}


                {/* <section className="About3 AboutSection container flex-around ">
                    <div className="imgContainer relative mobile-none  ">
                        <div className="image31"><img  src={aboutImage31} alt="" /></div>
                        <div className="image32"><img src={aboutImage32} alt="" /></div>
                    </div>
                    <div className="AboutDescription flex-center flex-column ">
                        <h5 className="">About Me</h5>
                        <h2>Williams Wallace</h2>
                        <p className="p2 mt-1 mobile-none">Minha expertise consiste em transformar conceitos em interfaces funcionais e envolventes, 
                        com destaque especial na criação de designs responsivos que proporcionam uma experiência de usuário 
                        excepcional. Meu compromisso é entregar soluções de alta qualidade que não só atendam, mas ultrapassem 
                        expectativas, impulsionando a inovação.</p>
                        <p className="p2 mt-1 desktop-none">Minha expertise é transformar ideias em interfaces funcionais
                         e envolventes, com foco em designs responsivos para ótima experiência do 
                         usuário. Meu objetivo é superar expectativas com soluções de alta qualidade, 
                         impulsionando a inovação.</p>
                    </div>
                    <div className="imgContainer relative mobile-none ">
                        <div className="image33"><img  src={aboutImage33} alt="" /></div>
                        <div className="image34"><img src={aboutImage34} alt="" /></div>
                    </div>
                    <div className="imgContainer relative desktop-none">
                        <div className="image33"><img  src={aboutImage33} alt="" /></div>
                        <div className="image34"><img src={aboutImage33} alt="" /></div>
                    </div>
                </section> */}

                {/* <section className="About4 AboutSection container flex-around ">

                    <div className="AboutDescription flex-center flex-column ">
                        <h4 className="textAbout4">
                        Se você está em busca de um profissional comprometido e qualificado para projetos, estou à 
                        disposição para discutir como posso contribuir para o sucesso de seu empreendimento. Não hesite em 
                        entrar em contato para explorarmos juntos as possibilidades de criar algo verdadeiramente notável.
                        </h4>
                    </div>

                </section> */}
            </div>
            
        </>
    )
}