# Diego Arruda — Página Pessoal

Projeto CRA (Create React App) de página única (App.js) com currículo, projetos e links sociais.

## Rodar localmente

1. Extraia esta pasta para `C:\Users\dgo_i\Documents\diego-portfolio`
2. Abra um terminal nessa pasta e rode:
   ```
   npm install
   npm start
   ```
3. Acesse `http://localhost:3000`

## Trocar a foto de perfil

O layout atual não inclui foto (ainda não recebida). Quando você tiver a imagem:

1. Coloque o arquivo em `public/`, por exemplo `public/foto-diego.jpg`
2. No `src/App.js`, dentro do componente `Hero`, adicione uma tag `<img src="/foto-diego.jpg" alt="Diego Arruda" className="hero-photo" />`
3. Me envie a imagem e eu ajusto o CSS (`.hero-photo`) e o layout da hero para acomodá-la corretamente.

## Adicionar GitHub

Edite a constante `PROFILE.github` no topo de `src/App.js` com a URL do seu perfil. O botão "GitHub" aparece automaticamente no rodapé quando o campo não estiver vazio.

## Deploy no Vercel

Com a conta `diego-arruda-s-projects` já configurada na Vercel CLI:

```
npm install -g vercel   # caso ainda não tenha a CLI
vercel login
vercel --prod
```

A CLI vai detectar o projeto CRA automaticamente (build command `npm run build`, output `build/`).

## Estrutura

```
diego-portfolio/
├── public/
│   └── index.html      # fontes Google (Playfair Display + DM Sans)
├── src/
│   ├── App.js           # todo o conteúdo e seções
│   ├── App.css          # estilos (tokens de cor no index.css)
│   ├── index.js
│   └── index.css        # variáveis de cor (--bg, --accent, etc.)
├── package.json
└── README.md
```

## Editar conteúdo

Todo o conteúdo (experiências, projetos, skills, formação, links) está centralizado em constantes no topo de `src/App.js` (`PROFILE`, `EXPERIENCE_RECENT`, `PROJECTS`, `SKILLS`, etc.) — não é necessário mexer no JSX para atualizar textos.
