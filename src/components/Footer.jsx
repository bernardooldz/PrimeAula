import Logo from '../assets/LogoPrimeAula.png'

function Footer(){
    return(
        <footer>
            <h1 className='logo'>
                <img src={Logo} alt="Logo" />
            </h1>
            <p className="subtitles">Desenvolvido por <a className='subtitles' href="https://github.com/bernardooldz">ldz_dev </a>| Todos os direitos reservados </p>
            
        </footer>
    )
}

export default Footer