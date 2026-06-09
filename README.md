# ⏳ Estudo de Fluxo de Dados e Componentização em React

Este repositório foi desenvolvido para documentar, fixar e praticar conceitos fundamentais do ecossistema React, com foco total no entendimento do fluxo unidirecional de dados (Props) e na renderização dinâmica de listas.

---

## 🧠 Conceitos Chave Praticados

* **Componentização Avançada:** Segmentação da interface em camadas com responsabilidades isoladas (`Section` -> `Container` -> `Item`).
* **Props (Propriedades):** Entendimento prático de como objetos e arrays trafegam do componente pai para componentes filhos.
* **Renderização Dinâmica com `.map()`:** Transformação de dados estruturados em JavaScript (JSON/Arrays) em elementos de interface JSX de forma automatizada.
* **Rastreabilidade de Código:** Debug de erros comuns de referência (`undefined`) no console do navegador.

---

## 🗺️ Mapeamento e Fluxo dos Dados

Para evitar o acoplamento de código, a arquitetura do projeto foi desenhada para que os dados fluam de cima para baixo de forma clara e previsível. Abaixo está a representação de como a informação trafega entre os arquivos:

```text
src/
├── data/
│   └── timeline.js         # Origem: Array contendo os objetos e dados brutos.
├── App.jsx                 # Inicializador: Importa os dados e injeta na prop 'timeline'.
├── sections/
│   └── TimeLineSection.jsx # Camada Estrutural: Recebe 'props.timeline' e repassa adiante como 'itens'.
└── components/
    ├── TimeLine.jsx        # Camada Organizadora: Consome 'props.itens' e faz o mapeamento (.map).
    └── TimeLineItem.jsx    # Camada Visual: Recebe as propriedades individuais e desenha o HTML final.