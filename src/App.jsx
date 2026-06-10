
//Importando a variável criada no arquivo timeline.js
import { timeline } from "./data/timeline";
import {photos} from "./data/photos";
import {quiz } from "./data/quiz"
import {memories} from "./data/memories"

//Aqui estamos importando o local para onde nós vamos enviar os dados
import TimelineSection from "./sections/TimeLineSection";
import GallerySection from "./sections/GallerySection";
import QuiZSection from "./sections/QuizSection";
import MemoriesSection from "./sections/MemoriesSection"
import HeroSection from "./sections/HeroSection"
import CounterSection from "./sections/CounterSection";
import LetterSection from "./sections/LetterSection"
import CapsuleSection from "./sections/CapsuleSection"

export default function app(){
  return (
    <>
      <HeroSection />
      <CounterSection/>
      <TimelineSection timeline={timeline} />
      <GallerySection photos={photos} />
      <MemoriesSection memories={memories} />
      <QuiZSection quiz={quiz} />
      <LetterSection/>
      <CapsuleSection/>
    </>
  );
}