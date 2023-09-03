
import BackgroundDS from "../../assets/image/BackgroundDS.jpg"
import { ProjectData } from "../../projectData"


export const DescriptionProject = ()=>{
    return(
        <>
            <section className="descriptionProject">
                <div className="mainSection w-100 relative">
                    <div className="background"><img src={BackgroundDS} alt="" /></div>
                    <div className="titleProject">
                        <h5>Projeto</h5>
                        <h1>{ProjectData[0].name}</h1>
                        <button className="btn-1 mt-1">Abrir site</button>
                    </div>
                </div>
                <div className="infoSection container">
                    <div className="mr-3">
                        <h6 className="mb-2">Função</h6>
                        <p className="p2 info">{ProjectData[0].role}</p>
                    </div>
                    <div className="mr-3">
                        <h6 className="mb-2">Cliente</h6>
                        <p className="p2 info">{ProjectData[0].client}</p>
                    </div>
                    <div className="mr-3">
                        <h6 className="mb-2">Descrição</h6>
                        <p className="p2 info">{ProjectData[0].decription}</p>
                    </div>
                    <div className="">
                        <h6 className="mb-2">Objetivos</h6>
                        <p className="p2 info">{ProjectData[0].gols}</p>
                    </div>
                </div>
                <div className="techList mt-2">
                    <div className="techItem">
                        <div className="iconTech"><img src="" alt="" /></div>
                        <h6>HTML 5</h6>
                    </div>
                </div>
                <div className="nextProject flex-center flex-column my-3 ">
                    <h5>Proximo Projeto</h5>
                    <h2>{ProjectData[1].name}</h2>
                    <p className="p1 my-2">ou</p>
                    <button className="btn-2">Página Principal</button>
                </div>
                
            </section>
        </>
    )
}