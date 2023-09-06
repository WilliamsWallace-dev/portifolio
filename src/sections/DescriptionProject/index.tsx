
import { Link, useParams } from "react-router-dom"
import { ProjectData, projectInfo } from "../../projectData"


export const DescriptionProject = ()=>{

    const params = useParams();
        const project = ProjectData.filter((e : projectInfo)=>{ return e.id == params.id})[0]
        console.log(project)
    

    return(
        <>
            <section className="descriptionProject">
                <div className="mainSection w-100 relative">
                    <div className="background"><img src={project.background} alt="" /></div>
                    <div className="titleProject mt-3">
                        <h5>Projeto</h5>
                        <h1>{project.name}</h1>
                        <a href={project.deploy} target="_blank"><button className="btn-1 mt-1">Abrir site</button></a>
                    </div>
                </div>
                <div className="infoSection">
                    <div className="mr-3">
                        <h6 className="mb-2">Função</h6>
                        <p className="p2 info">{project.role}</p>
                    </div>
                    <div className="mr-3">
                        <h6 className="mb-2">Cliente</h6>
                        <p className="p2 info">{project.client}</p>
                    </div>
                    <div className="mr-3">
                        <h6 className="mb-2">Descrição</h6>
                        <p className="p2 info">{project.decription}</p>
                    </div>
                    <div className="">
                        <h6 className="mb-2">Objetivos</h6>
                        <p className="p2 info">{project.gols}</p>
                    </div>
                </div>
                <div className="techContainer">
                    <h6 className="">Objetivos</h6>
                    <ul className="techList flex-wrap">
                        
                            {
                                project.techs.map((tech)=>{
                                    return(
                                    <>
                                        <li className="techItem flex-center flex-column">
                                            <div className="iconTech"><img src={tech.img} alt={tech.name}/></div>
                                            <h6>{tech.name}</h6>
                                        </li>
                                    </>
                                    )
                                })
                            }
                        
                    </ul>
                </div>
                <div className="nextProject flex-center flex-column my-4 ">
                    <h5>Proximo Projeto</h5>
                    {parseInt(project.id) != 4 ? <Link to = {`../${ProjectData[parseInt(project.id)].name}/${ProjectData[parseInt(project.id)].id}`} ><a ><h2 className="link">{ProjectData[parseInt(project.id)].name}</h2></a></Link> : <Link to = {`../${ProjectData[0].name}/${ProjectData[0].id}`} ><a ><h2 className="link">{ProjectData[0].name}</h2></a></Link> } 
                    <p className="p1 my-2">ou</p>
                    <Link to="/"><button className="btn-2">Página Principal</button></Link>
                </div>
                
            </section>
        </>
    )
}