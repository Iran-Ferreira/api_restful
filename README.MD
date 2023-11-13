
# CRUD com Node.JS, Express, TypeORM e PostgreSQL

Esse é um projeto que estou seguindo assistindo um tutorial do youtube.

E também estou fazendo isso como atividade que meu professor passou. Por isso que não compartilharei o arquivo do banco de dados - O servidor do banco de dados foi o professor que comprou e no arquivo tem informações de como entrar nele. 
Mas para criar um conexão usando typeorm é bem fácil, veja a parte de documentação. 
## Referência

 - [CRUD com Node.JS, Express, TypeORM e PostgreSQL](https://youtu.be/9AO2hZJsHrs?si=tIkT9fCkbOgzOOp7)



## Funcionalidades e Melhorias

- CRUD de Filmes e categorias e usuários
- 1 - Criar uma API capaz de realizar autenticação de usuários com JWT e um CRUD de dados (gravando no banco de dados) - Feito.
- 2 - Criar um Front-end capaz de interagir com essa API, permitindo fazer login, logout, inserção de dados, listagem de dados, atualização de dados e remoção. - Em andamento.
- Terminei o tutorial e estou estudando para colocar os itens 1 e 2 em funcionamento.  


## Documentação

[Typeorm](https://typeorm.io/)

Para criar uma nova DataSourceinstância você deve inicializar seu construtor chamando new DataSource e atribuindo a uma variável global que você usará em seu aplicativo:

```
import { DataSource } from "typeorm"

const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    entities: [
        // ....
    ],
})
```