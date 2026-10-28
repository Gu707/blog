# Meu Blog

Site estático feito apenas com HTML, CSS e JavaScript.

## Estrutura

- `index.html` — página inicial
- `blog/` — artigos
- `projetos/` — projetos
- `sobre/` — apresentação
- `style.css` — estilos globais
- `script.js` — menu mobile, tema claro/escuro e ano do rodapé
- `assets/images/` — imagens

## Testar localmente

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Publicar no GitHub Pages

Envie esta pasta para um repositório GitHub e ative **Settings → Pages → Deploy from a branch**, usando a branch principal e a pasta `/ (root)`.
