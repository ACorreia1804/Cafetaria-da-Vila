# Cafetaria da Vila

Website institucional estático da Cafetaria da Vila, em Condeixa-a-Nova. O site não recebe reservas nem mensagens: os clientes contactam o estabelecimento por telefone ou através dos serviços externos ligados na página.

## Arquitetura

- `index.html`: conteúdo, metadados sociais e dados estruturados Schema.org.
- `css/style.css`: apresentação responsiva e estilos de acessibilidade.
- `js/main.js`: estado de abertura calculado no fuso `Europe/Lisbon`, destaque do dia, aviso temporário e ano do rodapé.
- `img/`: fotografias do estabelecimento (atualmente ainda não fornecidas).
- Vite: servidor local e compilação de ficheiros estáticos para `dist/`.

Não há backend, API, base de dados, autenticação ou variáveis de ambiente. Para as funções atuais, essas camadas acrescentariam operação, custos e dados pessoais sem benefício funcional. Se forem necessárias reservas, gestão online de produtos ou administração do conteúdo, será preciso decidir primeiro os fluxos e escolher um serviço/API e armazenamento adequados.

## Requisitos e execução

Requer Node.js 20.19+ ou 22.12+.

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview
```

O servidor de desenvolvimento e a pré-visualização ficam limitados a `localhost`. A build de produção fica em `dist/`. O teste atual valida os elementos institucionais essenciais e os dados estruturados; não existem formulários ou endpoints para testes de integração.

## Conteúdo a confirmar antes da publicação

- Adicionar fotografias autorizadas e otimizadas em `img/` e ligá-las à galeria.
- Confirmar preços/opções da ementa, horário em feriados, morada, telefone e perfis sociais com o estabelecimento.
- A classificação e os excertos de opiniões foram removidos porque as fontes apresentavam números contraditórios e o próprio código os marcava para confirmação.
- Remover ou atualizar o aviso temporário `#aviso` no `index.html`.

Horários são definidos em `HORARIO` em `js/main.js` e também na tabela de `index.html`; atualizar ambos em conjunto.

## Segurança, privacidade e serviços externos

O site não recolhe nem armazena dados pessoais e não usa cookies próprios, pelo que não precisa de uma API de consentimento de cookies no estado atual. As ligações para Google Maps, Google, Facebook e Instagram são serviços externos e podem aplicar as suas próprias políticas. Se forem adicionados formulários, analytics, embeds ou cookies não essenciais, rever privacidade, consentimento e legislação aplicável antes de os ativar.

Não existem uploads, sessão, login ou endpoints administrativos para proteger. Em produção, servir por HTTPS através do fornecedor de alojamento. Não há segredos nem configuração `.env`.

## Publicação

1. Executar `npm ci`, `npm test` e `npm run build`.
2. Publicar o conteúdo de `dist/` num alojamento estático (por exemplo, GitHub Pages ou outro fornecedor compatível com ficheiros estáticos).
3. Configurar domínio e HTTPS no fornecedor.
4. Definir o domínio canónico para criar sitemap e URL canónico; estes não são incluídos enquanto o domínio final não for conhecido.
5. Confirmar o conteúdo e os links externos com o estabelecimento.

Não há serviço de backend, base de dados, armazenamento de imagens, backups ou pipeline de deployment a configurar. O alojamento estático é suficiente para a funcionalidade atual; formulários/reservas dinâmicos ou edição autónoma implicam escolher e configurar serviços adicionais, que podem ter custos.
