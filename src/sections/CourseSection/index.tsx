import { SVGCv } from "../../svg/SVGCv"



export const CourseSection = ()=>{
    return(
        <>
            <section className="CourseSection container">
                <div className="titleSection w-100">
                    <h5 className="mb-1">Formação</h5>
                    <h2>Cursos Realizados</h2>
                </div>
                <ul className="mt-2 mb-4">
                    <li className="courseItem mb-1">
                        <h4>Análise e Desenvolvimento de Sistemas - Unicesumar</h4>
                        <p className="p4 greenColor my-1">Completo</p>
                        <ul className="courseList">
                            <li className="p3 ml-3">Lógica de Programação</li>
                            <li className="p3 ml-3">Banco de dados</li>
                            <li className="p3 ml-3">Estrutura de Dados</li>
                            <li className="p3 ml-3">Java</li>
                            <li className="p3 ml-3">Design de Interação</li>
                        </ul>
                    </li>
                    <li className="courseItem mb-1">
                        <h4>Eng. Mecatrônica - UnB</h4>
                        <p className="p4 yellowColor my-1">Incompleto</p>
                        <ul className="courseList">
                            <li className="p3 ml-3">Linguagem C</li>
                            <li className="p3 ml-3">Estrutura de Dados</li>
                            <li className="p3 ml-3">Eletrônica</li>
                            <li className="p3 ml-3">Circuitos Lógicos</li>
                            <li className="p3 ml-3">Organização e Arquitetura de Computadores</li>
                            <li className="p3 ml-3">Assembly</li>
                            <li className="p3 ml-3">Empresa Junior ( Mecajun )</li>
                        </ul>
                    </li>
                    <li className="courseItem mb-1">
                        <h4>TigerCodes</h4>
                        <p className="p4 greenColor my-1">Completo</p>
                        <ul className="courseList">
                            <li className="p3 ml-3">HTML</li>
                            <li className="p3 ml-3">CSS</li>
                            <li className="p3 ml-3">JavaScript</li>
                            <li className="p3 ml-3">Design (UX e UI)</li>
                            <li className="p3 ml-3">Figma</li>
                        </ul>
                    </li>
                    <li className="courseItem mb-1">
                        <h4>FrontPush 2.0</h4>
                        <p className="p4 greenColor my-1">Completo</p>
                        <ul className="courseList">
                            <li className="p3 ml-3">React.js</li>
                            <li className="p3 ml-3">Sass</li>
                            <li className="p3 ml-3">Motion Design</li>
                            <li className="p3 ml-3">UX Design</li>
                            <li className="p3 ml-3">UI Design</li>
                            <li className="p3 ml-3">Figma</li>
                        </ul>
                    </li>

                    <li className="courseItem mb-1">
                        <h4>OneBitCode - FullStack</h4>
                        <p className="p4 greenColor my-1">Completo</p>
                        <ul className="courseList">
                            <li className="p3 ml-3">JavaScript</li>
                            <li className="p3 ml-3">React.js</li>
                            <li className="p3 ml-3">Sass</li>
                            <li className="p3 ml-3">TypeScript</li>
                            <li className="p3 ml-3">Next.Js</li>
                            <li className="p3 ml-3">Git e GitHub</li>
                            <li className="p3 ml-3">NodeJS</li>
                            <li className="p3 ml-3">MongoDB</li>
                        </ul>
                    </li>
                    <li className="courseItem mb-1">
                        <h4>CoffStack</h4>
                        <p className="p4 yellowColor my-1">Incompleto</p>
                        <ul className="courseList">
                            <li className="p3 ml-3">React Native</li>
                        </ul>
                    </li>
                    <li className="courseItem mb-1">
                        <h4>Inglês e Espanhol</h4>
                        <p className="p4 greenColor my-1">Intermediário</p>
                    </li>

                </ul>
                <SVGCv></SVGCv>
                
            </section>
        </>
    )
}