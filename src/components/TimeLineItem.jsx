// src/components/TimeLineItem.jsx

export default function TimeLineItem(props) {
  return (
    <div className="timeline-item">
      <h3>{props.titulo}</h3>
      <span>{props.data}</span>
      <p>{props.descricao}</p>
      
      {/* Lógica condicional: Se 'props.foto' existir e não for null, renderiza a tag img */}
      {props.foto && (
        <img 
          src={props.foto} 
          alt={props.titulo} 
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginTop: '10px' }} 
        />
      )}
    </div>
  );
}