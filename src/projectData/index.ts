import react from "../assets/Icon/React.svg"
import typeScript from "../assets/Icon/TypeScript.svg"
import sass from "../assets/Icon/Sass.svg"
import html from "../assets/Icon/Html.svg"
import javaScript from "../assets/Icon/JavaScript.svg"
import figma from "../assets/Icon/Figma.svg"
import gsap from "../assets/Icon/Gsap.svg"
import firebase from "../assets/Icon/Firebase.svg"
import mongodb from "../assets/Icon/Mongodb.svg"
import nodejs from "../assets/Icon/Nodejs.svg"
import css from "../assets/Icon/Css.svg"

import BackgroundGOG from "../assets/image/BackgroundGOG.jpg"
import BackgroundDS from "../assets/image/BackgroundDS.jpg"
import BackgroundVNB from "../assets/image/BackgroundVNB.jpg"
import BackgroundWC from "../assets/image/BackgroundWC.jpg"
import BackgroundTDL from "../assets/image/BackgroundTDL.jpg"




export const ProjectData = [
    
    {
        id : "1",
        name : "WMovies",
        deploy : "https://w-movies.vercel.app/",
        role : "Design & Desenvolvimento",
        client : "N/A",
        resume : "Blog com filmes, séries e animes escolhidos pelo administrador, permitindo que usuários criem contas  para favoritar conteúdo.",
        description : "Blog dedicado a filmes, séries e animes criteriosamente selecionados pelo administrador. Este blog é exclusivo para o administrador e oferece acesso à API para gerenciar e selecionar os conteúdos que serão compartilhados com a comunidade. Os usuários regulares têm a opção de criar uma conta para selecionar e salvar seus filmes favoritos, bem como aqueles que desejam assistir posteriormente. Além disso, eles têm acesso às informações sobre os conteúdos previamente selecionados pelo administrador.",
        gols : "Este projeto foi criado com o propósito de aprimorar a aplicação de conceitos relacionados ao TypeScript no contexto do React.js, integração da aplicação com API, além de explorar tecnologias como SASS, Axios e Firebase. Buscando criar um design criativo e intuitivo, com a finalidade de proporcionar uma experiência de usuário excepcional, além de desenvolver aplicações altamente funcionais.",
        background : BackgroundGOG,
        gitHub : "https://github.com/WilliamsWallace-dev/WMovies",
        figma : "https://www.figma.com/file/lSqBB4YlzI9MaXcxB2mk19/WMovies?type=design&node-id=5%3A35&mode=design&t=YlgDlJ7zLPyjGpWY-1",
        test: {
            username : "wwallace.dev@gmail.com",
            password : "wmoviesadm123",
            obs : "Conta de Administrador permite gerenciar o conteúdo do Blog."

        },
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
        description : "Esta aplicação foi desenvolvida com o propósito de gerenciar bolões relacionados à Copa do Mundo de 2022, oferecendo aos usuários a capacidade de criar suas próprias contas e, por meio delas, criar ou ingressar em outros bolões utilizando senhas fornecidas pelos criadores dos bolões. Cada conta de usuário pode definir seus palpites até o início do jogo correspondente, pois após o início, as edições são bloqueadas. Além disso, os usuários têm acesso às informações de classificação dos bolões em que participam, e essas informações são atualizadas automaticamente à medida que o administrador insere os resultados no banco de dados da aplicação.",
        gols : "Esta aplicação foi criada com o propósito de enriquecer a experiência durante a Copa do Mundo de 2022, oferecendo a oportunidade de ser usada por grupos de amigos e familiares. Foi desenvolvida em um prazo de cerca de 25 dias, com mais de 100 horas dedicadas, representando nosso primeiro projeto utilizando React.js.",
        background : BackgroundWC,
        gitHub : "https://github.com/WilliamsWallace-dev/Bol-oCopaDoMundo2022",
        figma : "https://www.figma.com/file/ugZ8ZnrldvqMOM5EnPS1H0/Bol%C3%A3oCopa2022?type=design&node-id=0%3A1&mode=design&t=7MGqU7aTlaZosTWb-1",
        test: {
            username : "Wwallace",
            password : "12345",
            obs : "Conta de usuário utilizada durante a Copa do mundo."

        },
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
        description : "Redesign da Landing Page do canal do YouTube intitulado 'Vai na Bíblia'. Após uma análise da página atualmente em uso pelo canal, foram identificadas oportunidades de melhoria que poderiam ser implementadas, com foco nos princípios de UI e UX, visando aprimorar a conversão e a apresentação do conteúdo.",
        siteRedesign : "https://jornadaga.com/",
        gols : "O foco primordial deste projeto era alcançar o meu primeiro trabalho como freelancer. Além disso, envolveu a prática de tecnologias como HTML, CSS, JavaScript e Motion Design, a criação de uma Landing Page desde a fase de design no Figma, e o estímulo à criatividade.",
        background : BackgroundVNB,
        gitHub : "https://github.com/WilliamsWallace-dev/LandingPage-CanalYoutubeVNBdef",
        figma : "https://www.figma.com/file/4rqmRU9yNNNjCBPwUmULIY/WireFrame---VNB?type=design&node-id=90%3A2&mode=design&t=Jp94IKuVp6TKEqf0-1",
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
        description : "Landing Page para divulgação da nova temporada de Demon Slayer.",
        gols : "Desenvolvido com objetivo de praticar a produção de design, aplicação da biblioteca GSAP, além dos princípios de UX e UI.",
        background : BackgroundDS,
        gitHub : "https://github.com/WilliamsWallace-dev/WebPageKimetsuNoYaiba",
        figma : "https://www.figma.com/file/WaOJmbDxfixzPnQw2kzxn2/Demon-Slayer?type=design&node-id=0%3A1&mode=design&t=ZIFShx669cQ0EZdW-1",
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
    {
        id : "5",
        name : "ToDoList",
        deploy : "https://to-do-list-iota-smoky.vercel.app/",
        role : "Desenvolvimento",
        client : "N/A",
        resume : "Projeto Back End com MongoDB, Express e Mongoose para criar uma TodoList com CRUD e integração eficaz.",
        description : "O projeto teve como objetivo principal aprofundar os conhecimentos em desenvolvimento Back End, com foco na utilização do MongoDB, um banco de dados NoSQL, em conjunto com o framework Express para Node.js e a biblioteca Mongoose. A aplicação resultante é uma API que utiliza a biblioteca EJS como mecanismo de visualização. Essa aplicação é uma TodoList que permite a criação de listas de tarefas, além da adição, edição e remoção de tarefas em cada lista. A implementação de operações CRUD (Create, Read, Update e Delete) foi o cerne do desenvolvimento, destacando a comunicação eficiente entre o Back End, o Front End e o banco de dados. O projeto buscou a integração bem-sucedida dessas tecnologias, consolidando habilidades essenciais no desenvolvimento de aplicações web robustas e escaláveis.",
        gols : "O principal objetivo deste projeto foi consolidar e aplicar o conhecimento adquirido no desenvolvimento Back End, com foco especial em bancos de dados NoSQL, usando o MongoDB. Além disso, buscamos demonstrar a habilidade de utilizar o framework Express e a biblioteca Mongoose para estabelecer uma sólida conexão entre a aplicação Node.js e o banco de dados MongoDB. A criação de uma aplicação prática de uma lista de tarefas (TodoList) serviu como um contexto real para aplicar esses conhecimentos. A aplicação permitia a criação de listas de tarefas, bem como a adição, edição e remoção de tarefas dentro dessas listas. O uso da biblioteca EJS como mecanismo de visualização contribuiu para uma experiência mais amigável ao usuário, tornando possível a visualização e manipulação das listas e tarefas de forma mais intuitiva.",
        background : BackgroundTDL,
        gitHub : "https://github.com/WilliamsWallace-dev/ToDoList",
        techs : [
            {
                name : "NodeJs",
                img : nodejs
            },
            {
                name : "JavaScript",
                img : javaScript
            },
            {
                name : "Css",
                img : css
            },
            {
                name : "MongoDB",
                img : mongodb
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
        description : string,
        gols : string,
        background : string,
        gitHub : string,
        figma? : string,
        test? : {
            username : string,
            password : string,
            obs : string
        }
        techs : techsDescription[],
        siteRedesign? : string
    }