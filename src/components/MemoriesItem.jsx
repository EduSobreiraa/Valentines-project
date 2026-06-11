import "./Memories.css"

export default function MemoriesItem({
    tipo,
    foto,
    mensagem,
}){
    if (tipo ==="photo") {
        return(
            <article className="memories-item-photo">
                <img 
                src={foto} 
                alt={mensagem}
                className="memories-image" 
                />
            </article>
        )
    } else {
        return(
            <article className="memories-item-heart">
                <div className="memories-content">
                <span className="memories-heart">❤️</span>
                <h3 className="memories-texto">{mensagem}</h3>
                </div>
            </article>
        )
    }


    
}