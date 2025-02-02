import { SquareArrowOutUpRight } from 'lucide-react'
import Image from '../assets/images/imageStep3.svg'

function LastSection() {

    return (
           <div className="container-section">
                       <div className="container-home">
                           <div className="container-home-hero">
                               <p className="titles">Faça seu plano e começe já!</p>
                               <p className="subtitles">E aí? Pronto para aprender de jeito certo e no seu tempo?</p>
                               <button className="button-see-prices">Ver planos <SquareArrowOutUpRight /> </button>
                           </div>
                           <div className="image-last-section">
                               <img src={Image} alt=""/>
                           </div>
                       </div>
                   </div>

    )
}

export default LastSection