# Valentines Project ❤️

Uma aplicação web desenvolvida como presente de Dia dos Namorados, criada para transformar momentos, lembranças e sentimentos em uma experiência digital personalizada.

Além do aspecto emocional, o projeto também foi utilizado como ferramenta prática de aprendizado e aprofundamento em desenvolvimento Frontend com React.

---

## Objetivos

O projeto foi construído com dois objetivos principais:

### Experiência

Criar uma experiência romântica e personalizada para celebrar o relacionamento através de fotos, mensagens e memórias compartilhadas.

### Aprendizado

Aplicar conceitos fundamentais de Frontend moderno, incluindo:

* Componentização
* Fluxo de dados em React
* Organização de projeto
* CSS Responsivo
* Estruturação de interfaces
* Arquitetura de componentes
* Boas práticas de desenvolvimento

---

## Tecnologias Utilizadas

### Frontend

* React
* JavaScript (ES6+)
* Vite
* CSS3

### Armazenamento

Todos os dados utilizados pela aplicação são locais e estáticos.

Não foi utilizado backend ou banco de dados.

---

## Arquitetura

O projeto foi estruturado seguindo separação de responsabilidades.

### Data Layer

Responsável exclusivamente pelos dados da aplicação.

Exemplo:

```txt
src/data/
├── timeline.js
├── photos.js
├── memories.js
```

---

### Sections

Representam as grandes áreas da página.

```txt
src/sections/
├── HeroSection
├── CounterSection
├── TimelineSection
├── GallerySection
├── MemoriesSection
├── LetterSection
```

Cada seção possui responsabilidade única dentro da narrativa do site.

---

### Components

Responsáveis pela renderização reutilizável de elementos.

Exemplos:

```txt
Timeline
TimelineItem

Gallery
GalleryItem

Memories
MemoriesItem
```

---

## Fluxo de Dados

A aplicação utiliza fluxo unidirecional de dados.

Exemplo:

```txt
timeline.js
↓
TimelineSection
↓
Timeline
↓
TimelineItem
```

Os dados são importados pelas seções e distribuídos aos componentes através de props.

---

## Estrutura da Experiência

A navegação foi pensada para dispositivos móveis e segue uma narrativa linear.

```txt
Login
↓
Hero
↓
Countdown
↓
Timeline
↓
Gallery
↓
Memories
↓
Letter
```

Cada seção representa um capítulo da experiência.

---

## Seções

### Hero Section

Tela inicial da aplicação.

Responsável por apresentar a proposta da experiência através de:

* Imagem principal
* Título
* Subtítulo
* Chamada para navegação

---

### Countdown Section

Exibe o tempo compartilhado pelo casal.

Objetivo:

* Gerar conexão emocional imediata
* Contextualizar a duração da história

---

### Timeline Section

Linha do tempo dos acontecimentos importantes do relacionamento.

Características:

* Renderização dinâmica via `map()`
* Cards alternados
* Imagens associadas aos eventos
* Layout responsivo

---

### Gallery Section

Galeria de fotografias construída com inspiração em polaroids.

Objetivo:

* Destacar momentos importantes
* Reforçar a sensação de álbum de memórias

---

### Memories Section

Combina mensagens afetivas e registros de conversas.

Objetivo:

* Representar lembranças além das fotografias
* Dar destaque aos sentimentos associados aos momentos vividos

---

### Letter Section

Encerramento da experiência.

Contém uma carta personalizada escrita especialmente para a destinatária do projeto.

Representa o clímax emocional da aplicação.

---

## Design

### Direção Visual

A identidade visual foi construída buscando transmitir:

* Carinho
* Nostalgia
* Delicadeza
* Aconchego

---

### Paleta Principal

```css
#f7f3d5
#ffdabf
#fa9b9b
#e88087
#635063
```

---

### Princípios de Interface

* Mobile First
* Layout simples
* Hierarquia visual clara
* Navegação linear
* Ênfase em conteúdo emocional

---

## Responsividade

A aplicação foi projetada com foco principal em dispositivos móveis.

A experiência foi pensada para ser consumida principalmente através de smartphones.

---

## Decisões de Escopo

Durante o desenvolvimento algumas funcionalidades inicialmente planejadas foram removidas para garantir qualidade e conclusão dentro do prazo.

Funcionalidades descartadas:

* Quiz Section
* Capsule Section

A decisão permitiu concentrar esforços em:

* Experiência visual
* Coesão narrativa
* Responsividade
* Polimento da interface

---

## Aprendizados

Durante o desenvolvimento foram explorados conceitos importantes de Frontend:

* Componentização em React
* Props
* Renderização dinâmica
* Organização de arquivos
* Separação de responsabilidades
* Responsividade
* Estruturação de projetos React
* Design de experiência
* Gestão de escopo

---

## Status

✅ Projeto concluído

✅ Experiência entregue

❤️ Feito com carinho, código e algumas noites sem dormir.
