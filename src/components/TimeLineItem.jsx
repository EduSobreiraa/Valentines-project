import "./TimeLine.css"

// src/components/TimeLineItem.jsx

export default function TimelineItem({
  data,
  titulo,
  descricao,
  foto,

}) {
  return (
    //Separação de cada momento da timeline em um article.
    <article className="timeline-item">

      {/*Separação do conteúdo das imagens para melhorar organização*/} 
      <div className="timeline-content">
      <h3 className="timeline-text">{titulo}</h3>
      <time className="timeline-text">{data}</time>
      <p className="timeline-text">{descricao}</p>
      </div>

      {foto && (
        <img 
          src={foto} 
          alt={titulo} 
          className="timeline-image"
        />
      )}
    </article>
  );
}