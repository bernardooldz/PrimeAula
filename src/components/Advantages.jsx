import { Check } from 'lucide-react'

function Advantages() {

    const advantages = [
        {
            advantageId: 1,
            advantageItem: "Professores qualificados;",
        },
        {
            advantageId: 2,
            advantageItem: "Flexibilidade de horários;",
        },
        {
            advantageId: 3,
            advantageItem: "Materiais exclusivos;",
        },
        {
            advantageId: 4,
            advantageItem: "Suporte constante e humanizado;",
        },
        {
            advantageId: 5,
            advantageItem: "Planejamento focado no seu aprendizado.",
        },
    ]

    return (

        <div className="container-advantage-hero">
            <p className="titles">Por que escolher a PrimeAula?</p>

            <div className="advantages-items">
                {advantages.map((advantage) => (
                    <div key={advantage.advantageId} className="advantage-item">
                        <div><Check strokeWidth={3} size={18} color=' #3453CD' className='icon-check-advantage'/></div>
                        <p className='subtitles'>{advantage.advantageItem}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Advantages