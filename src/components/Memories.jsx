import MemoriesItem from "./MemoriesItem"

export default function Gallery(props){
    return(

        <div className="memories-container">

            {props.item.map((item)=>{
                
                return(
                    <MemoriesItem
                    key={item.id}
                    tipo={item.tipo}
                    foto={item.foto}
                    mensagem={item.mensagem}
                    />
                )})}
 
        </div>
    )
}