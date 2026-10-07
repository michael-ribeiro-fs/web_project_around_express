# Around Express API

API RESTful do back-end da aplicação **EUA Afora (Around)**, construída com Node.js, Express e MongoDB. Projeto do **Sprint 16** do curso de Desenvolvimento Web da TripleTen.

## Problema

O front-end do Around precisava de um back-end real para gerenciar usuários e cards, já que os dados não podiam mais ficar fixos no código nem se perder ao recarregar a página. Era necessário persistir as informações, validá-las e responder aos erros de forma clara.

## Solução

Uma API REST que armazena usuários e cards em um banco MongoDB local (`aroundb`) e permite:

- criar e listar usuários, buscar por `_id`, atualizar perfil e avatar;
- criar, listar e excluir cards;
- curtir e descurtir cards.

Os dados são validados com Mongoose e os erros retornam os status `400`, `404` e `500`.

## Arquitetura

O código é modular, com responsabilidades separadas:

```text
├── routes/        # Define as rotas e as associa aos controladores
├── controllers/   # Lógica de cada operação e tratamento de erros
├── models/        # Schemas e validações do Mongoose
└── app.js         # Configuração do servidor e conexão com o MongoDB
```

Fluxo de uma requisição: **rota → controlador → modelo → MongoDB**.

## Decisões Técnicas

| Tecnologia                 | Por quê                                                |
| -------------------------- | ------------------------------------------------------ |
| **Node.js + Express**      | Criação simples e rápida da API e das rotas            |
| **MongoDB + Mongoose**     | Banco NoSQL flexível, com schemas e validação de dados |
| **Arquitetura modular**    | Facilita manutenção e crescimento do projeto           |
| **ESLint (`airbnb-base`)** | Padroniza e mantém a qualidade do código               |
| **Nodemon**                | Reinicia o servidor automaticamente no desenvolvimento |

## Como Executar

**Pré-requisitos:** Node.js 20.19+ e MongoDB rodando localmente.

```bash
# 1. Clonar e acessar o projeto
git clone https://github.com/michael-ribeiro-fs/web_project_around_express.git
cd web_project_around_express

# 2. Instalar dependências
npm install

# 3. Iniciar o servidor
npm run dev     # desenvolvimento (Nodemon)
npm start       # produção
```

O servidor ficará disponível em `http://localhost:3000`.

## Endpoints

### Usuários

| Método  | Rota               | Descrição                     |
| ------- | ------------------ | ----------------------------- |
| `GET`   | `/users`           | Lista todos os usuários       |
| `GET`   | `/users/:userId`   | Retorna um usuário pelo `_id` |
| `POST`  | `/users`           | Cria um usuário               |
| `PATCH` | `/users/me`        | Atualiza o perfil             |
| `PATCH` | `/users/me/avatar` | Atualiza o avatar             |

### Cards

| Método   | Rota                   | Descrição            |
| -------- | ---------------------- | -------------------- |
| `GET`    | `/cards`               | Lista todos os cards |
| `POST`   | `/cards`               | Cria um card         |
| `DELETE` | `/cards/:cardId`       | Exclui um card       |
| `PUT`    | `/cards/:cardId/likes` | Curte um card        |
| `DELETE` | `/cards/:cardId/likes` | Remove a curtida     |

### Exemplo

`POST /users`

```json
{
  "name": "Jacques Cousteau",
  "about": "Explorador",
  "avatar": "https://example.com/avatar.jpg"
}
```

### Códigos de erro

| Status | Significado                            |
| ------ | -------------------------------------- |
| `400`  | Dados inválidos ou `_id` mal formatado |
| `404`  | Usuário, card ou rota não encontrado   |
| `500`  | Erro interno do servidor               |

## Demonstração

[![Assista ao vídeo de demonstração](https://img.youtube.com/vi/SxYC8WOrX_o/maxresdefault.jpg)](https://youtu.be/SxYC8WOrX_o)

## Próximos Passos

- Autenticação e autorização de usuários;
- Tratamento centralizado de erros;
- Testes automatizados;
- Deploy da API.

## Licença

Projeto educacional desenvolvido para o curso da [TripleTen](https://tripleten.com/). Autor: [Michael Ribeiro](https://github.com/michael-ribeiro-fs).
