import './styles/App.css'
import './styles/responsive.css'

import Advantages from './components/Advantages'
import Comments from './components/Comments'
import HowToUse from './components/HowToUse'
import Plans from './components/Plans'

import Logo from './assets/LogoPrimeAula.png'
import ImageHome from './assets/images/imageHome.svg'
import ImageAdvantages from './assets/images/imageAdvantages.svg'
import Titles from './components/Titles'
import ButtonPrices from './components/ButtonPrices'
import ImageLast from './assets/images/imageStep3.svg'


function App() {

  return (
    <>
      <header>
        <h1 className='logo'>
          <img src={Logo} alt="Logo" />
        </h1>
      </header>

      <div className="container-section">
        <div className="container-home">
          <div className="container-home-hero">
            <p className="titleHome">Aulas que se ajustam ao seu ritmo.</p>
            <p className="subtitleHome">Venha estudar na mehor plataforma online de ensino particular com aulas personalizadas e suporte humanizado para você aprender no seu tempo.</p>
            <ButtonPrices />
          </div>
          <div className="image-home">
            <img src={ImageHome} alt="" />
          </div>
        </div>
      </div>

      <div className="container-section">
        <div className="container-advantages">
          <div className="advantage-image">
            <div>
              <img src={ImageAdvantages} alt="" />
            </div>
          </div>

          <Advantages />
        </div>
      </div>

      <div className="container-section">
        <Titles
          title={'Só tres passos...'}
          subtitle={'Veja esse passo a passo e descubra como é fácil utilizar nossa plataforma.'}
        />
        <HowToUse />
      </div>

      <div className="container-section">
        <Titles
          title={'Conheça nossos planos.'}
          subtitle={'Confira os benefícios de cada um de nossos planos preparados especialmente para cada tipo de estudante.'}
        />
        <Plans />
      </div>

      <div className="container-section">
        <Titles
          title={'O que nossos alunos estão dizendo'}
          subtitle={'Confira alguns comentártios de pessoas que utilizaram nossa plataforma.'}
        />
        <Comments />
      </div>

      <div className="container-section">
        <div className="container-home">
          <div className="container-home-hero">
            <Titles
              title={'Faça seu plano e começe já!'}
              subtitle={'E aí? Pronto para aprender de jeito certo e no seu tempo?'}
            />
            <ButtonPrices />
          </div>
          <div className="image-last-section">
            <img src={ImageLast} alt="" />
          </div>
        </div>
      </div>

      <footer>
        <h1 className='logo'>
          <img src={Logo} alt="Logo" />
        </h1>
        <p className="subtitles">Desenvolvido por <a className='subtitles' href="https://github.com/bernardooldz">ldz_dev </a>| Todos os direitos reservados </p>
      </footer>

    </>
  )
}

export default App
