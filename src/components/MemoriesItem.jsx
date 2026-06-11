import "./Memories.css"

export default function MemoriesItem({ tipo, foto, mensagem }) {
    if (tipo === "photo") {
        return (
            <article className="memories-card memories-type-photo">
                <div className="memories-photo-wrapper">
                    <img 
                        src={foto} 
                        alt={mensagem || "Memória especial"}
                        className="memories-image" 
                    />
                </div>
            </article>
        );
    } 
    
    // Tipo "heart" ou texto explicativo
    return (
        <article className="memories-card memories-type-heart">
            <span className="memories-heart" aria-hidden="true">❤️</span>
            <p className="memories-text">{mensagem}</p>
        </article>
    );
}