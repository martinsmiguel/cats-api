# Cats API

## Descrição

O Cats API é um projeto desenvolvido em React Native que tem como objetivo permitir que os usuários façam login, visualizem diferentes tipos de gatos e obtenham mais informações sobre eles. Futuramente, o projeto também permitirá que os usuários adicionem gatos aos favoritos e acessem informações sobre o próprio usuário logado.

## Funcionalidades

- Login de Usuário: Os usuários podem fazer login usando o e-mail e a senha fornecidos.
- Visualização de Gatos: Os usuários podem visualizar diferentes tipos de gatos e obter informações sobre cada um deles.
- Favoritos (em desenvolvimento): Os usuários poderão adicionar gatos aos favoritos para acessá-los facilmente posteriormente.
- Informações do Usuário (em desenvolvimento): Os usuários logados poderão visualizar e editar suas informações pessoais.

## Bibliotecas Utilizadas

O projeto utiliza várias bibliotecas importantes para o desenvolvimento do aplicativo:

- **React Navigation:** Biblioteca de roteamento e navegação para React Native, permitindo a navegação entre as diferentes telas do aplicativo.
- **Axios:** Biblioteca para realizar requisições HTTP, sendo utilizada para se comunicar com a API de gatos.
- **Expo:** Plataforma para desenvolvimento de aplicativos móveis com React Native, facilitando o processo de desenvolvimento e teste.
- **Google Fonts:** Biblioteca de fontes da web fornecida pelo Google, para melhorar a aparência do aplicativo com fontes atraentes.
- **TanStack React Query:** Biblioteca para gerenciamento de estados e cache de dados, tornando a manipulação dos dados da API mais eficiente.
- **Styled Components:** Biblioteca para estilização de componentes com React Native, permitindo uma estilização mais organizada e reutilizável.

## Login Fixado

Para testes de demonstração, um usuário com login fixado está disponível:

- E-mail: `user@gmail.com`
- Senha: `12345`

## Contextos

O projeto utiliza o seguinte contexto para gerenciar o estado global da aplicação:

- **AuthContext:** Contexto responsável pela autenticação do usuário e gerenciamento do estado de login.

Os Contextos são utilizados para fornecer os dados e funcionalidades necessárias para os componentes em toda a aplicação, evitando a necessidade de passar dados através de propriedades de forma direta.
