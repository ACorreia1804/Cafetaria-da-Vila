# Cafetaria da Vila

Site estático (HTML, CSS e JavaScript simples) da Cafetaria da Vila, Condeixa-a-Nova.

## Estrutura
- `index.html`: conteúdo e texto
- `css/style.css`: cores e tipos (variáveis no topo do ficheiro)
- `js/main.js`: horário, estado "aberto agora" e aviso de remodelação
- `img/`: coloque aqui as fotografias do espaço e dos pratos

## Editar no VS Code
1. Abrir a pasta no VS Code.
2. Executar `npm install` para instalar as ferramentas do projeto.
3. Executar `npm run dev` e abrir o endereço indicado no terminal.
4. Gerar uma versão de produção com `npm run build`; os ficheiros ficam em `dist/`. Para testar essa versão, executar `npm run preview`.
5. Horário: alterar `HORARIO` em `js/main.js` e a tabela em `index.html`.
6. Aviso de remodelação: bloco `#aviso` no topo de `index.html` (mudar `data-ate` ou apagar o bloco).

## Publicar (GitHub Pages)
Settings > Pages > Source: `main` / root para publicar os ficheiros estáticos da raiz. Se publicar a versão gerada por `npm run build`, configurar o GitHub Pages para publicar a pasta `dist/`.
