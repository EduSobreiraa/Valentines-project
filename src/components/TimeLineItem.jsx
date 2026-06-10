// src/components/TimeLineItem.jsx

export default function TimeLineItem({
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
      <h3>{titulo}</h3>
      <time>{data}</time>
      <p>{descricao}</p>
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