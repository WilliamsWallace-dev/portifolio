import IconGitHub  from "../../assets/Icon/iconGitHub.svg"
import IconFigma  from "../../assets/Icon/IconFigma.svg"
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
                    <div className="background" data-aos-delay="0" data-aos-duration="1500" data-aos="fade"><img src={project.background} alt="" /></div>
                    <div className="titleProject mt-3">
                        {/* <div className=""> */}
                        <h5 data-aos-delay="100" data-aos-duration="1500" data-aos="fade-up">Projeto</h5>
                        {/* <Link to="https://github.com/WilliamsWallace-dev" target="_blank"><div className=" px-1 icon-svg"><img src={IconGitHub} alt="" /></div></Link> */}
                        {/* </div> */}
                        <h1 data-aos-delay="200" data-aos-duration="1500" data-aos="fade-up">{project.name}</h1>
                        <div>
                        <a href={project.deploy} target="_blank"><button className="btn-1 mt-1 mr-2" data-aos-delay="300" data-aos-duration="1500" data-aos="fade-up">Abrir site</button></a>
                        <Link to={project.gitHub} target="_blank"><div className=" px-1 " data-aos-delay="350" data-aos-duration="1500" data-aos="fade-up"><img src={IconGitHub} alt="" className="icon-svg"/></div></Link>
                        {project.figma && <Link to={project.figma} target="_blank"><div className=" px-1 " data-aos-delay="400" data-aos-duration="1500" data-aos="fade-up"><img src={IconFigma} alt="" className="icon-svg" /></div></Link>}
                        </div>
                        
                    </div>
                </div>
                <div className="infoSection">
                    <div className="mr-3">
                        <h6 className="mb-2" data-aos-anchor-placement="center-bottom" data-aos-anchor=".info" data-aos-delay="100" data-aos-duration="1500" data-aos="fade-up">Função</h6>
                        <p className="p2 info" data-aos-anchor-placement="center-bottom" data-aos-delay="200" data-aos-duration="1500" data-aos="fade-up">{project.role}</p>
                    </div>
                    <div className="mr-3">
                        <h6 className="mb-2" data-aos-anchor-placement="center-bottom" data-aos-anchor=".info" data-aos-delay="200" data-aos-duration="1500" data-aos="fade-up">Cliente</h6>
                        <p className="p2 info" data-aos-anchor-placement="center-bottom" data-aos-delay="300" data-aos-duration="1500" data-aos="fade-up">{project.client}</p>
                    </div>
                    <div className="mr-3">
                        <h6 className="mb-2" data-aos-anchor-placement="center-bottom" data-aos-anchor=".info" data-aos-delay="300" data-aos-duration="1500" data-aos="fade-up">Descrição</h6>
                        {project.test ? <p className="p2 info" data-aos-anchor-placement="center-bottom" data-aos-delay="400" data-aos-duration="1500" data-aos="fade-up">{project.description}<br/>Usuário : {project.test.username}<br/>Senha : {project.test.password}<br/>Observação : {project.test.obs}</p> : <p className="p2 info" data-aos-anchor-placement="center-bottom" data-aos-delay="400" data-aos-duration="1500" data-aos="fade-up">{project.description}</p>}
                        
                    </div>
                    <div className="">
                        <h6 className="mb-2" data-aos-anchor-placement="center-bottom" data-aos-anchor=".info" data-aos-delay="400" data-aos-duration="1500" data-aos="fade-up">Objetivos</h6>
                        <p className="p2 info" data-aos-anchor-placement="center-bottom" data-aos-delay="500" data-aos-duration="1500" data-aos="fade-up">{project.gols}</p>
                    </div>
                </div>
                <div className="techContainer">
                    <h6 className="" data-aos-anchor-placement="center-bottom" data-aos-delay="100" data-aos-duration="1500" data-aos="fade-up">Tecnologias</h6>
                    <ul className="techList flex-wrap" data-aos-anchor-placement="center-bottom" data-aos-delay="200" data-aos-duration="1500" data-aos="fade-up">
                        
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
                    <h5 data-aos-delay="100" data-aos-anchor-placement="center-bottom" data-aos-duration="1500" data-aos="fade-up" data-aos-anchor=".nextProject">Proximo Projeto</h5>
                    {parseInt(project.id) != 5 ? <Link to = {`../${ProjectData[parseInt(project.id)].name}/${ProjectData[parseInt(project.id)].id}`} ><a ><h2 className="link" data-aos-delay="200" data-aos-anchor-placement="center-bottom" data-aos-duration="1500" data-aos="fade-up" data-aos-anchor=".nextProject">{ProjectData[parseInt(project.id)].name}</h2></a></Link> : <Link to = {`../${ProjectData[0].name}/${ProjectData[0].id}`} ><a ><h2 className="link" data-aos-delay="200" data-aos-anchor-placement="center-bottom" data-aos-duration="1500" data-aos="fade-up" data-aos-anchor=".nextProject">{ProjectData[0].name}</h2></a></Link> } 
                    <p className="p1 my-2" data-aos-delay="300" data-aos-anchor-placement="center-bottom" data-aos-duration="1500" data-aos="fade-up" data-aos-anchor=".nextProject">ou</p>
                    <Link to="/"><button className="btn-2" data-aos-delay="400" data-aos-anchor-placement="center-bottom" data-aos-duration="1500" data-aos="fade-up" data-aos-anchor=".nextProject">Página Principal</button></Link>
                </div>
                
            </section>
        </>
    )
}