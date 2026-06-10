import "./Gallery.css"

export default function GalleryItem({
    foto,
    legenda,

}){
    return(
    //Separação de cada momento da timeline em um article.
    <article className="gallery-item">
      {foto && (
        <img 
          src={foto} 
          alt={legenda} 
          className="gallery-image"
        />
      )}
            <div className="gallery-content">
      <h3 className="gallery-text">{legenda}</h3>
      </div>
    </article>
    )
}