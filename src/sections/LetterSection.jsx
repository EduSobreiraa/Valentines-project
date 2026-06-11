import "../components/Letter.css"

export default function LetterSection() {
    return (
        <section className="letter-container">
            <div className="letter-envelope">✉️</div>
            <h2 className="letter-titulo">Como sempre, deixo aqui minha carta pra você</h2>
            
            <div className="letter-content">
                <p>Mel, desde que te conheci minha vida virou de ponta cabeça. Eu saí de um cara que não tinha a menor pretensão de pensar no futuro...</p>
                
                <p>Pior ainda, pensar em um futuro com alguém kkkkkkkkk. Mas aí você apareceu e tudo fez sentido.</p>
            
                
                <p>Obrigado por cada momento, cada sorriso, cada abraço. Você é a melhor parte de mim.</p>
                
                <div className="letter-signature">Com todo meu amor,</div>
                <div className="letter-date">Feira de Santana, {new Date().toLocaleDateString('pt-BR')}</div>
            </div>
            
            <div className="letter-heart">❤️</div>
        </section>
    );
}