import Gallery from "../components/Gallery.jsx";

export default function GallerySection(props){

    return(
        <section className="gallery-section">
            <h2>
                Apesar de não termos muitas fotos juntos, todas elas valem muito!
                <br />
                já que elas são a prova eterna dos momentos lindos que nós vivemos juntos.
            </h2>

            <Gallery list={props.photos} />

        </section>
    )
}