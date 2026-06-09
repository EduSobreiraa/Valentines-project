
// Importa o próximo path correto
import TimeLine from "../components/TimeLine";

//Exporta o contéudo em forma de unç~
export default function TimelineSection(props){
    return(
        //Aqui nós estamos nos aproveitando da característica do react de exportação de dados utiizando uma função e passando o valor como props(propreidades) 
        <TimeLine itens={props.timeline}/>
    )
}