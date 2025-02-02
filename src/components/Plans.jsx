import { Check } from "lucide-react"; // Certifique-se de importar corretamente o ícone

function Plans() {
    const plans = [
        {
            planId: 1,
            planName: "Essencial",
            planDescription: "Perfeito para quem precisa de um reforço pontual e suporte básico.",
            price: "R$69,90",
            planBeneficits: [
                { itemId: 1, itemBeneficit: "1 matéria à escolha" },
                { itemId: 2, itemBeneficit: "1 aula de 50 minutos" },
                { itemId: 3, itemBeneficit: "Suporte durante as aulas" },
                { itemId: 4, itemBeneficit: "1 teste de progresso ao final" },
                { itemId: 5, itemBeneficit: "Acesso a materiais complementares" },
            ]
        },
        {
            planId: 2,
            planName: "Iniciante",
            planDescription: "Ideal para quem quer dar os primeiros passos no aprendizado.",
            price: "R$99,90",
            planBeneficits: [
                { itemId: 1, itemBeneficit: "1 matéria à escolha" },
                { itemId: 2, itemBeneficit: "3 aulas de 30 minutos" },
                { itemId: 3, itemBeneficit: "Suporte durante as aulas" },
                { itemId: 4, itemBeneficit: "1 teste de progresso ao final" },
                { itemId: 5, itemBeneficit: "Acesso a materiais complementares" },
            ]
        },
        {
            planId: 3,
            planName: "Avançado",
            planDescription: "Para quem busca um aprendizado mais aprofundado com acompanhamento contínuo.",
            price: "R$149,90",
            planBeneficits: [
                { itemId: 1, itemBeneficit: "Até 2 matérias à escolha" },
                { itemId: 2, itemBeneficit: "6 aulas de 45 minutos" },
                { itemId: 3, itemBeneficit: "Suporte ilimitado via chat" },
                { itemId: 4, itemBeneficit: "Correção de exercícios personalizados" },
                { itemId: 5, itemBeneficit: "2 testes de progresso" },
                { itemId: 6, itemBeneficit: "Acesso a materiais exclusivos" },
            ]
        },
        {
            planId: 4,
            planName: "Premium",
            planDescription: "O pacote completo para quem deseja um suporte intensivo e personalizado.",
            price: "R$229,90",
            planBeneficits: [
                { itemId: 1, itemBeneficit: "Todas as matérias disponíveis" },
                { itemId: 2, itemBeneficit: "Aulas ilimitadas de 1 hora" },
                { itemId: 3, itemBeneficit: "Suporte prioritário 24/7" },
                { itemId: 4, itemBeneficit: "Simulados e avaliações personalizadas" },
                { itemId: 5, itemBeneficit: "Mentoria individual" },
                { itemId: 6, itemBeneficit: "Acesso a conteúdos premium e workshops" },
            ]
        }
    ];

    return (
        <div className="container-section">

            <div className="container-htu">
                <p className="titles">Conheça nossos planos.</p>
                <p className="subtitles">Confira os benefícios de cada um de nossos planos preparados especialmente para cada tipo de estudante.</p>
            </div>

            <div className="container-plans-case">
                <div className="plans-case">
                    {plans.map((plan) => (
                        <div key={plan.planId} className="plan-case">
                            <h1 className="titles">{plan.planName}</h1>
                            <div className="section-beneficits-plans">
                                {plan.planBeneficits.map((beneficit) => (
                                    <div key={beneficit.itemId} className="beneficit-item">
                                        <div><Check strokeWidth={3} color="#3453CD" size={24}/></div>
                                        <p>{beneficit.itemBeneficit}</p>
                                    </div>
                                ))}
                            </div>
                            <button className="button-price-plan">{plan.price}</button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Plans;