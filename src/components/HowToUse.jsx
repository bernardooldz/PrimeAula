import ImageStep1 from '../assets/images/imageStep1.svg'
import ImageStep2 from '../assets/images/imageStep2.svg'
import ImageStep3 from '../assets/images/imageStep3.svg'

function HowToUse() {

    const steps = [
        {
            stepId: 1,
            number: "1",
            subtitle: "Escolha sua matéria e o plano que achar mais adequado",
            imageStep: ImageStep1
        },
        {
            stepId: 2,
            number: "2",
            subtitle: "Agende sua aula com um professor qualificado e em um horário confortável para você.",
            imageStep: ImageStep2
        },
        {
            stepId: 3,
            number: "3",
            subtitle: "Prontinho, agora é só aproveitar e focar nos estudos!",
            imageStep: ImageStep3
        }
    ]

    return (
        <div>
            <div className='container-htu1'>
                <div className="steps-htu">
                    {steps.map((step) => (
                        <div key={step.stepId} className="case-step">
                            <div className="step-number">{step.number}</div>
                            <p className="subtitles">{step.subtitle}</p>
                            <img src={step.imageStep} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HowToUse
