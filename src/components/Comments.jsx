function Comments() {

    const comments = [
        {
            commentId: 1,
            author: "Mariana R.",
            authorCategory: "Estudante do Ensino Médio",
            opinion: "A PrimeAula me ajudou muito com matemática! Antes eu tinha dificuldade em entender alguns conceitos, mas com as aulas personalizadas, tudo ficou mais claro. Recomendo demais!"
        },
        {
            commentId: 2,
            author: "Lucas S.",
            authorCategory: "Universitário",
            opinion: "A flexibilidade dos horários foi o que mais me atraiu. Consegui conciliar as aulas com minha rotina e tive um suporte excelente dos professores. Vale cada centavo!"
        },
        {
            commentId: 3,
            author: "Ana C.",
            authorCategory: "Concurseira",
            opinion: "Estava estudando para um concurso e precisava de reforço em português. As aulas foram super didáticas e me ajudaram a melhorar minha interpretação de texto. Adorei!"
        },
        {
            commentId: 4,
            author: "Pedro M.",
            authorCategory: "Ensino Fundamental",
            opinion: "Minha mãe contratou as aulas para me ajudar em inglês, e foi incrível! Os professores explicam de um jeito fácil e divertido. Agora me sinto mais confiante!"
        },
        {
            commentId: 5,
            author: "Fernanda T.",
            authorCategory: "Estudante de TI",
            opinion: "A plataforma tem um suporte incrível! Sempre que eu tinha dúvidas, conseguia falar com um professor rapidamente. Isso fez toda a diferença nos meus estudos."
        }
    ]
    
    return (
        <div className="container-section">

           <div className="container-htu">
                <p className="titles">O que nossos alunos estão dizendo</p>
                <p className="subtitles">Confira alguns comentártios de pessoas que utilizaram nossa plataforma.</p>
            </div>

            <div className="container-comments">
                {comments.map((comment) => (
                    <div key={comment.commentId} className="case-comment">
                        <div className="container-author">
                            <div className="image-author"></div>
                            <div className="author-data">
                                <p className="name-author">{comment.author}</p>
                                <p className="category-author">{comment.authorCategory}</p>
                            </div>
                        </div>
                        <div className="opinion-comment">{comment.opinion}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Comments