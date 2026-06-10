# 📔 Diário de Bordo: Dia 01

> Olá, essa documentação está sendo criada para anotar meu progresso e para falar sobre a produção do website.

---

## 📅 Aprendizados e Evolução

1. **Arquitetura de Software:** Tive uma apresentação de como a lógica para a produção de sistemas é feita. Por exemplo, esse projeto é um SPA ou Single page application e utiliza como fluxo de dados internos o conceito de "Single Source of truth", o que significa que todas as funcionalidades desse aplicativo passam pelo `App.jsx` que é o gerenciador de funcionalidade e chamadas.
2. **Modularização:** Também aprendi sobre a utilização de diferentes arquivos de códigos para realizar diferentes coisas, tanto o motivo de fazer isso quanto o como fazer isso.
3. **Fluxo de Dados (Props):** A utilização de `import` para dar acesso ao próximo passo de um fluxo de dados e, funções de exportação que importam esses dados como "props" em funções locais que repassam-os e podem alterar a estrutura deles.

---

## 🛠️ Produção Técnica Realizada

* **Estrutura de Dados:** Em relação à produção feita, o esqueleto de onde os dados serão armazenados já foi feito, ou seja, o diretório `data`. 
* **Renderização Dinâmica:** Além disso, estruturei a primeira linha de interação entre esses dados e o que está visível para a Dona, por meio das funções citadas acimas e o uso da função `.map()` que é basicamente um for melhorado de JS.
* **Componentização:** Estruturei o esqueleto de requisições das diferentes seções, adicionei as funções de exportação de cada um e fiz a chamada no `App.jsx` de cada uma delas.
* **Mídia:** Adicionei a primeira imagem ao TimeLine e já está aparecendo no site. 

---

> 💡 *Por hoje é só!*