


export const Header = ()=>{
    return(
        <>
            <section className="header ">
                <h4 className="logo">Wwallace.Dev</h4>
                <div className="flex-center">
                    <button className="btn-2 mr-3">Download CV</button>
                    <button className="btn-1">Entrar em contato</button>
                </div>
            </section>
            <section className="headerMobile ">
                <div className="flex-center flex-between w-100">
                    <button className="btn-2 mr-3 ">Download CV</button>
                    <button className="btn-1 ">Entrar em contato</button>
                </div>
            </section>
        </>
    )
}