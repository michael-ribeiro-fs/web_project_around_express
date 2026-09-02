# Around Express API

API REST desenvolvida para o projeto **Around**, utilizando **Node.js** e **Express**.

A aplicação fornece endpoints para consultar usuários e cards, utilizando arquivos JSON como fonte de dados. Este projeto representa o desenvolvimento do back-end da aplicação **EUA Afora (Around)** e foi construído durante o **Sprint 15 do curso de Desenvolvimento Web da TripleTen**.

---

## Funcionalidades

A API disponibiliza os seguintes recursos:

- `GET /users` — retorna a lista completa de usuários.
- `GET /users/:id` — retorna um usuário específico a partir do seu `_id`.
- `GET /cards` — retorna a lista completa de cards.

Também possui tratamento para os seguintes erros:

- `404` — recurso não encontrado ou usuário inexistente.
- `500` — erro interno do servidor.

A estrutura da aplicação utiliza uma **arquitetura modular**, com as rotas organizadas em arquivos separados.

---

## Tecnologias utilizadas

- **[Node.js](https://nodejs.org/)** — ambiente de execução JavaScript.
- **[Express](https://expressjs.com/)** — framework para desenvolvimento de aplicações web e APIs com Node.js.
- **[ESLint](https://eslint.org/)** — ferramenta de análise estática de código, configurada com `airbnb-base`.
- **[Nodemon](https://nodemon.io/)** — ferramenta para reinicialização automática do servidor durante o desenvolvimento.

---

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/michael-ribeiro-fs/web_project_around_express.git
```

### 2. Acesse o diretório do projeto

```bash
cd web_project_around_express
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor

#### Modo de produção

```bash
npm run start
```

#### Modo de desenvolvimento

Para executar o servidor com reinicialização automática:

```bash
npm run dev
```

---

## Acessando a API

Após iniciar o servidor, a API estará disponível em:

http://localhost:3000

---

## Endpoints

### Listar todos os usuários

```http
GET /users
```

Exemplo:

```http
GET http://localhost:3000/users
```

---

### Buscar um usuário pelo ID

```http
GET /users/:id
```

Exemplo:

```http
GET http://localhost:3000/users/8340d0ec33270a25f2413b69
```

#### Exemplo de resposta

```json
{
  "name": "Katherine Johnson",
  "about": "Mathematician",
  "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/800px-Katherine_Johnson_1983.jpg",
  "_id": "8340d0ec33270a25f2413b69"
}
```

---

### Listar todos os cards

```http
GET /cards
```

Exemplo:

```http
GET http://localhost:3000/cards
```

---

## Tratamento de erros

A API implementa respostas para diferentes situações de erro.

### Erro 404 — Recurso não encontrado

Retornado quando:

- Uma rota inexistente é acessada.
- Um usuário com o ID informado não é encontrado.

### Erro 500 — Erro interno do servidor

Retornado quando ocorre um problema inesperado durante o processamento da requisição.

---

## Estrutura do projeto

```text
web_project_around_express/
├── data/
│   ├── users.json
│   └── cards.json
├── routes/
│   ├── users.js
│   └── cards.js
├── app.js
├── package.json
├── .eslintrc.js
├── .editorconfig
├── .gitignore
└── README.md
```

---

## Autor

**Michael Ribeiro**

GitHub: [michael-ribeiro-fs](https://github.com/michael-ribeiro-fs)

---

## Licença

Este projeto foi desenvolvido como parte do curso de Desenvolvimento Web da **TripleTen**, para fins educacionais.
