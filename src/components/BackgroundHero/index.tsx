// import { LuzMov1, LuzMov2, LuzMov3, LuzMov4 } from "../../svg/LuzMovHero"
import { SVGHero } from "../../svg/SVGHero"



export const BackgroundHero = ()=>{
    return(
        <>
            <div className="backgroundHero flex-center overflow-hidden">
                <SVGHero/>
                {/* <LuzMov1></LuzMov1>
                <LuzMov2></LuzMov2>
                <LuzMov3></LuzMov3>
                <LuzMov4></LuzMov4> */}
            </div>
        </>
    )
}