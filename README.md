markdown


# 💗 Valentines Project
Um projeto web romântico e personalizado feito com muito carinho para celebrar momentos especiais, fotos marcantes e lembranças compartilhadas.
## ✨ Funcionalidades
- **Tela de Bloqueio (Senha):** Proteção de acesso com uma data especial (dia e mês do início do namoro).
- **Hero Banner:** Uma bela recepção com imagem de destaque.
- **Linha do Tempo (Timeline):** Retrospectiva cronológica dos momentos mais importantes com fotos e descrições.
- **Galeria de Fotos:** Um mural com os melhores momentos juntos e legendas especiais.
- **Mural de Memórias:** Cards interativos contendo fotos e mensagens de carinho.
- **Carta de Amor:** Uma seção dedicada para uma carta especial escrita à mão digitalmente.
## 🛠️ Tecnologias Utilizadas
- **React** (v19)
- **Vite** (v8)
- **Vanilla CSS** (Estilização customizada e responsiva)
- **GitHub Pages** (Para hospedagem do deploy rápido)
## 🚀 Como Rodar Localmente
1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/EduSobreiraa/Valentines-project.git
   cd Valentines-project
Instalar as dependências:

bash


npm install
Executar em modo de desenvolvimento:

bash


npm run dev
Acesse o endereço exibido no terminal (geralmente http://localhost:5173).

📦 Deploy (GitHub Pages)
Este projeto está configurado para publicação direta no GitHub Pages usando o pacote gh-pages.

Para fazer o deploy das suas atualizações:

bash


npm run deploy
Esse comando irá automaticamente rodar o build do Vite e enviar os arquivos gerados na pasta dist para a branch gh-pages.

⚙️ Personalização
Senha de acesso: Modifique a data do aniversário de namoro alterando a constante dataNamoro no arquivo src/components/PasswordPage.jsx (formato DDMM).
Conteúdo das fotos e timeline: Edite as informações e caminhos de imagens em src/data/photos.js, src/data/timeline.js e src/data/memories.js.
