import Logo from '../assets/LogoPrimeAula.png'

function Header(){
    return(
        <header>
            <h1 className='logo'>
                <img src={Logo} alt="Logo" />
            </h1>
        </header>
    )
}

export default Header
