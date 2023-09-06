import { Link } from "react-router-dom"
import { ProjectData } from "../../projectData"



export const ProjectSection = ()=>{
    return(
        <>
            <section className="projectSection container flex-column">
                <div className="titleSection">
                    <h5 className="mb-1">Projetos</h5>
                    <h2>Trabalhos Selecionados</h2>
                    <p className="p2 mt-1">"A criatividade é a inteligência se divertindo." - Albert Einstein</p>
                </div>
                <div className="projectContainer w-100  mt-2">
                    <div className="projectDesctiption flex-center flex-around  w-100 text-center">
                        <h2 className="project-number">{`0${ProjectData[0].id}`}</h2>
                        <h2 className="flex-item-4">{ProjectData[0].name}</h2>
                        <p className="p2 flex-item-1">{ProjectData[0].resume}</p>
                        <p className="p2 flex-item-1 mobile-none">Design & Desenvolvimento</p>
                        <Link to={`/${ProjectData[0].name}/${ProjectData[0].id}`}><button className="btn-3">Ver Mais</button></Link>
                    </div>
                </div>
                <div className="projectContainer w-100  mt-2">
                    <div className="projectDesctiption flex-center flex-around  w-100 text-center">
                        <h2 className="project-number">{`0${ProjectData[1].id}`}</h2>
                        <h2 className="flex-item-4">{ProjectData[1].name}</h2>
                        <p className="p2 flex-item-1">{ProjectData[1].resume}</p>
                        <p className="p2 flex-item-1 mobile-none">Design & Desenvolvimento</p>
                        <Link to={`/${ProjectData[1].name}/${ProjectData[1].id}`}><button className="btn-3">Ver Mais</button></Link>
                    </div>
                </div>
                <div className="projectContainer w-100  mt-2">
                    <div className="projectDesctiption flex-center flex-around  w-100 text-center">
                        <h2 className="project-number">{`0${ProjectData[2].id}`}</h2>
                        <h2 className="flex-item-4">{ProjectData[2].name}</h2>
                        <p className="p2 flex-item-1">{ProjectData[2].resume}</p>
                        <p className="p2 flex-item-1 mobile-none">Design & Desenvolvimento</p>
                        <Link to={`/${ProjectData[2].name}/${ProjectData[2].id}`}><button className="btn-3">Ver Mais</button></Link>
                    </div>
                </div>
                <div className="projectContainer w-100  mt-2">
                    <div className="projectDesctiption flex-center flex-around  w-100 text-center">
                        <h2 className="project-number">{`0${ProjectData[3].id}`}</h2>
                        <h2 className="flex-item-4">{ProjectData[3].name}</h2>
                        <p className="p2 flex-item-1">{ProjectData[3].resume}</p>
                        <p className="p2 flex-item-1 mobile-none">Design & Desenvolvimento</p>
                        <Link to={`/${ProjectData[3].name}/${ProjectData[3].id}`}><button className="btn-3">Ver Mais</button></Link>
                    </div>
                </div>
                
            </section>
        </>
    )
}