import react from "../assets/Icon/React.svg"
import typeScript from "../assets/Icon/typeScript.svg"
import sass from "../assets/Icon/sass.svg"
import html from "../assets/Icon/html.svg"
// import css from "../assets/Icon/css.svg"
import javaScript from "../assets/Icon/javaScript.svg"
import figma from "../assets/Icon/figma.svg"
import gsap from "../assets/Icon/gsap.svg"
import firebase from "../assets/Icon/firebase.svg"

import BackgroundGOG from "../assets/image/BackgroundGOG.jpg"
import BackgroundDS from "../assets/image/BackgroundDS.jpg"
import BackgroundVNB from "../assets/image/BackgroundVNB.jpg"
import BackgroundWC from "../assets/image/BackgroundWC.jpg"




export const ProjectData = [
    
    {
        id : "1",
        name : "WMovies",
        deploy : "https://w-movies.vercel.app/",
        role : "Design & Desenvolvimento",
        client : "N/A",
        resume : "Blog com filmes, séries e animes escolhidos pelo administrador, permitindo que usuários criem contas  para favoritar conteúdo.",
        decription : "Blog dedicado a filmes, séries e animes criteriosamente selecionados pelo administrador. Este blog é exclusivo para o administrador e oferece acesso à API para gerenciar e selecionar os conteúdos que serão compartilhados com a comunidade. Os usuários regulares têm a opção de criar uma conta para selecionar e salvar seus filmes favoritos, bem como aqueles que desejam assistir posteriormente. Além disso, eles têm acesso às informações sobre os conteúdos previamente selecionados pelo administrador.",
        gols : "Este projeto foi criado com o propósito de aprimorar a aplicação de conceitos relacionados ao TypeScript no contexto do React.js, além de explorar tecnologias como SASS, Axios e Firebase. Buscando criar um design criativo e intuitivo, com a finalidade de proporcionar uma experiência de usuário excepcional, além de desenvolver aplicações altamente funcionais.",
        background : BackgroundGOG,
        techs : [
            {
                name : "React.js",
                img : react
            },
            {
                name : "TypeScript",
                img : typeScript
            },
            {
                name : "Sass",
                img : sass
            },
            {
                name : "Firebase",
                img : firebase
            },
            {
                name : "Figma",
                img : figma
            }
    ]
    },
    {
        id : "2",
        name : "Bolão Copa do Mundo 2022",
        deploy : "https://bolaocopa2022ww.vercel.app/",
        role : "Design & Desenvolvimento",
        client : "N/A",
        resume : " App para bolões da Copa do Mundo 2022, com contas, palpites pré-jogo e classificação automática.",
        decription : "Esta aplicação foi desenvolvida com o propósito de gerenciar bolões relacionados à Copa do Mundo de 2022, oferecendo aos usuários a capacidade de criar suas próprias contas e, por meio delas, criar ou ingressar em outros bolões utilizando senhas fornecidas pelos criadores dos bolões. Cada conta de usuário pode definir seus palpites até o início do jogo correspondente, pois após o início, as edições são bloqueadas. Além disso, os usuários têm acesso às informações de classificação dos bolões em que participam, e essas informações são atualizadas automaticamente à medida que o administrador insere os resultados no banco de dados da aplicação.",
        gols : "Esta aplicação foi criada com o propósito de enriquecer a experiência durante a Copa do Mundo de 2022, oferecendo a oportunidade de ser usada por grupos de amigos e familiares. Foi desenvolvida em um prazo de cerca de 25 dias, com mais de 100 horas dedicadas, representando nosso primeiro projeto utilizando React.js.",
        background : BackgroundWC,
        techs : [
            {
                name : "React.js",
                img : react
            },
            {
                name : "JavaScript",
                img : javaScript
            },
            {
                name : "Sass",
                img : sass
            },
            {
                name : "Firebase",
                img : firebase
            },
            {
                name : "Figma",
                img : figma
            }
    ]
    },
    {
        id : "3",
        name : "Vai na Bíblia",
        deploy : "https://landing-page-canal-youtube-vn-bdef.vercel.app/",
        role : "Design & Desenvolvimento",
        client : "N/A",
        resume  : "Redesign da Landing Page do canal 'Vai na Bíblia' do YouTube para melhorar a conversão e apresentação de conteúdo.",
        decription : "Redesign da Landing Page do canal do YouTube intitulado 'Vai na Bíblia'. Após uma análise da página atualmente em uso pelo canal, foram identificadas oportunidades de melhoria que poderiam ser implementadas, com foco nos princípios de UI e UX, visando aprimorar a conversão e a apresentação do conteúdo.",
        siteRedesign : "https://jornadaga.com/",
        gols : "O foco primordial deste projeto era alcançar o meu primeiro trabalho como freelancer. Além disso, envolveu a prática de tecnologias como HTML, CSS, JavaScript e Motion Design, a criação de uma Landing Page desde a fase de design no Figma, e o estímulo à criatividade.",
        background : BackgroundVNB,
        techs : [
            {
                name : "Html",
                img : react
            },
            {
                name : "JavaScript",
                img : javaScript
            },
            {
                name : "Sass",
                img : sass
            },
            {
                name : "Figma",
                img : figma
            }
        ]
    },
    {
        id : "4",
        name : "Demon Slayer",
        deploy : "https://web-page-kimetsu-no-yaiba.vercel.app/",
        role : "Design & Desenvolvimento",
        client : "N/A",
        resume : "Landing Page para divulgaçaõ da nova temporada de Demon Slayer.",
        decription : "Landing Page para divulgaçaõ da nova temporada de Demon Slayer.",
        gols : "Desenvolvido com objetivo de praticar a produção de design, aplicação da biblioteca GSAP, além dos princípios de UX e UI.",
        background : BackgroundDS,
        techs : [
            {
                name : "Html",
                img : html
            },
            {
                name : "JavaScript",
                img : javaScript
            },
            {
                name : "Sass",
                img : sass
            },
            {
                name : "Gsap",
                img : gsap
            },
            {
                name : "Figma",
                img : figma
            }
        ]
    },
]

export interface techsDescription{
    name : string,
    img : string
}

export interface projectInfo {
        id : string,
        name : string,
        deploy : string,
        role : string,
        client : string,
        resume : string,
        decription : string,
        gols : string,
        background : string,
        techs : techsDescription[],
        siteRedesign? : string
    }