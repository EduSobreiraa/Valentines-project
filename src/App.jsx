
//Importando a variável criada no arquivo timeline.js
import { timeline } from "./data/timeline";

//Aqui estamos importando o local para onde nós vamos enviar os dados
import TimelineSection from "./sections/TimeLineSection";

export default function app(){
  
  return(
  <TimelineSection timeline={timeline} />
  )
} 