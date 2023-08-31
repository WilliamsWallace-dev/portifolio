import { SVGCv } from "../../svg/SVGCv"



export const CourseSection = ()=>{
    return(
        <>
            <section className="CourseSection container">
                <div className="titleSection w-100">
                    <h5 className="mb-1">Formação</h5>
                    <h2>Cursos Realizados</h2>
                </div>
                <SVGCv></SVGCv>
            </section>
        </>
    )
}