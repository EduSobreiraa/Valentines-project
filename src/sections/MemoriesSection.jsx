import Memories from "../components/Memories"

export default function MemoriesSection(props){
    return(
    <section className="memories-section">
    <h2>Aqui estão algumas das minhas memórias preferidas da gente!</h2>
 
    <Memories item={props.memories} />
    </section>
    )}