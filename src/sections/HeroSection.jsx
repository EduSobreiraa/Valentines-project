import "../components/Hero.css"
import heroImg from "/photos/img08.jpeg"

export default function HeroSection(){
    return(
<section className="hero-container">
    <img src={heroImg} alt="Um dia especial" />
    <h1 className="hero-titulo">Para Gabriela Mel</h1>
    <p className="hero-subtitulo"> Alguns momentos e lembranças que me fazem escolher você todos os dias</p>
    <span className="hero-scroll">↓</span>
</section>
)}