import { useState } from 'react'; // <-- ADICIONE ESTA LINHA

// Importando a variável criada no arquivo timeline.js
import { timeline } from "./data/timeline";
import { photos } from "./data/photos";
import { memories } from "./data/memories";

// Import da página de senha
import PasswordPage from "./components/PasswordPage"; // <-- ADICIONE ESTA LINHA

// Aqui estamos importando o local para onde nós vamos enviar os dados
import TimelineSection from "./sections/TimeLineSection";
import GallerySection from "./sections/GallerySection";
import MemoriesSection from "./sections/MemoriesSection";
import HeroSection from "./sections/HeroSection";
import LetterSection from "./sections/LetterSection";

export default function App() { // <-- ALTERE de "app" para "App"
    const [isAuthenticated, setIsAuthenticated] = useState(false); // <-- ADICIONE ESTA LINHA

    const handleSuccess = () => { // <-- ADICIONE ESTA LINHA
        setIsAuthenticated(true); // <-- ADICIONE ESTA LINHA
    }; // <-- ADICIONE ESTA LINHA

    if (!isAuthenticated) { // <-- ADICIONE ESTA LINHA
        return <PasswordPage onSuccess={handleSuccess} />; // <-- ADICIONE ESTA LINHA
    } // <-- ADICIONE ESTA LINHA

    return (
        <>
            <HeroSection />
            <TimelineSection timeline={timeline} />
            <GallerySection photos={photos} />
            <MemoriesSection memories={memories} />
            <LetterSection />
        </>
    );
}