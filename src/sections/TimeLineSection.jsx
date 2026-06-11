
// Importa o próximo path correto
import TimeLine from "../components/TimeLine";

//Exporta o contéudo em forma de unç~
export default function TimelineSection(props){
    return(
        //Aqui nós estamos nos aproveitando da característica do react de exportação de dados utiizando uma função e passando o valor como props(propreidades) 
        <section className="timeline-section">
              <div className="timeline-header">
            <span className="timeline-divisor">♥</span>
            <h2 className="timeline-title">Nossa História</h2>
            </div>
        <TimeLine itens={props.timeline}/>
        </section>
    )
}