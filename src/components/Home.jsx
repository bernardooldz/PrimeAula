import ImageHome from '../assets/images/imageHome.svg'

function Home(){
    return(
        <div className="container-section">
            <div className="container-home">
                <div className="container-home-hero">
                    <p className="titleHome">Aulas que se ajustam ao seu ritmo.</p>
                    <p className="subtitleHome">Venha estudar na mehor plataforma online de ensino particular com aulas personalizadas e suporte humanizado para você aprender no seu tempo.</p>
                    <button className="button-see-prices">Ver planos</button>
                </div>
                <div className="image-home">
                    <img src={ImageHome} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home
