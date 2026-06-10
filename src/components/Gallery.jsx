import GalleryItem from "./GalleryItem"

export default function Gallery(props){
      //Retorna o valor desejado
            return(
                //Cria um container para vizualização de HTML
                <div className="gallery-container">
        
                    {props.list.map((item) =>{ 
        

                        return(
                        <GalleryItem
                        key={item.id}
                        foto={item.foto}
                        legenda={item.legenda}
                        />
                    )})}
                </div>
            )
        }
