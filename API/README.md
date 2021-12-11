<div align="center">
 <img src="" width="100" alt="Logo"/>
 
 <h1>API</h1>
</div>

Essa pasta contém todos o código necessário para executar a API de dados. A API foi feita em node.js com TypeScript usando o framework Express.

## Instalação e Configuração
Estamos usando TypeScript para fazer o código e yarn como gerenciador de pacotes, mas caso prefira pode usar o npm. Para executar o código pela primeira vez siga os seguintes passos:

1. Para instalar as dependências:
    
    ``` sh
    $ yarn
    // Ou
    $ npm i
    ```
2. Para executar o server:
    
    ``` sh
    yarn start
    // Ou
    npm start 
    ```
**OBS:** Quando você executar o servidor ele estará usando a porta 8000, certifique-se de não haver nenhum outro programa usando essa porta.

## Testes
Por enquanto nenhum teste automatizado foi feito. Caso queira testar métodos da API além do GET, ou testar funcionalidades de autenticação use um software para isso. Nós utilzamos o Insomnia, mas pode usar outros como Postman.

## Versão de build
O TypeScript é somente usado no desenvolvimento, para gerar uma versão de deploy use o comando 
```
$ yarn build
// Ou 
$ npm run build
```