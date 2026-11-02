# Cafetaria da Vila

Site estático (HTML, CSS e JavaScript simples) da Cafetaria da Vila, Condeixa-a-Nova.

## Estrutura
- `index.html`: conteúdo e texto
- `css/style.css`: cores e tipos (variáveis no topo do ficheiro)
- `js/main.js`: horário, estado "aberto agora" e aviso de remodelação
- `img/`: coloque aqui as fotografias do espaço e dos pratos

## Editar no VS Code
1. Abrir a pasta no VS Code.
2. Instalar a extensão **Live Server** e clicar em "Go Live" para ver as alterações ao vivo.
3. Horário: alterar `HORARIO` em `js/main.js` e a tabela em `index.html`.
4. Aviso de remodelação: bloco `#aviso` no topo de `index.html` (mudar `data-ate` ou apagar o bloco).

## Publicar (GitHub Pages)
Settings > Pages > Source: `main` / root. O site fica em `https://<utilizador>.github.io/cafetaria-da-vila/`.
