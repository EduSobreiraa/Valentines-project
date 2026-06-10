
//Importa o path seguinte
import TimeLineItem from "./TimeLineItem"

// Função de exportação com as propriedades
export default function TimeLine(props){

    //Retorna o valor desejado
    return(
        //Cria um container para vizualização de HTML
        <div className="timeline-container">

            {props.itens.map((item) =>{ //Mapeia os dados timeline recebidos via props.timeline


                //Retoruna um valor em html que contém os dados importantes para realização do código
                return(
                <TimeLineItem
                key={item.id}
                data={item.data}
                titulo={item.titulo}
                descricao={item.descricao}
                foto={item.foto}
                />
            )})}
        </div>
    )
}