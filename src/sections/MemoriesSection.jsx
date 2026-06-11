import Memories from "../components/Memories"

export default function MemoriesSection(props){
    return(
    <section className="memories-section">
    <h2 className="memories-title">Aqui estão algumas das minhas memórias preferidas da gente!</h2>
    <p className="memories-subtitle">Momentos de prova de amor</p>
 
    <Memories item={props.memories} />
    </section>
    )}