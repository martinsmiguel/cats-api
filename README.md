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

</br>

## Como Executar o Projeto

### Pré-requisitos

Antes de executar o aplicativo, você precisa ter o Node.js, o Yarn e o Expo CLI instalados em seu sistema.

### Instalação das Dependências

1. Clone este repositório para o seu ambiente local.

2. No terminal, navegue para o diretório do projeto.

3. Instale as dependências usando o comando:

<pre><code>yarn install</code></pre>

### Executando em Dispositivo Físico

Você pode executar o aplicativo em um dispositivo físico seguindo estes passos:

1. Instale o aplicativo Expo Go em seu dispositivo Android ou iOS através da loja de aplicativos.

2. No terminal, execute o comando:

<pre><code>yarn start</code></pre>

### Executando no Emulador (iOS)

Para executar o aplicativo no simulador iOS, siga os passos abaixo:

1. Certifique-se de que o Xcode esteja instalado em seu sistema.

2. No terminal, execute o comando:

<pre><code>yarn ios</code></pre>

### Executando no Emulador (Android)

Para executar o aplicativo no emulador Android, siga os passos abaixo:

1. Certifique-se de ter um emulador Android configurado ou um dispositivo Android conectado ao seu computador.

2. No terminal, execute o comando:

<pre><code>yarn android</code></pre>

#### Configurações do SDK do Android

Certifique-se de que as configurações do SDK do Android estejam corretamente configuradas para a versão compatível com o projeto. Recomendamos o uso da versão 33 (Android 11) ou qualquer outra versão compatível.

1. Abra o arquivo `android/build.gradle`.

2. Procure a seção `android {...}`.

3. Verifique se a propriedade `compileSdkVersion` está configurada para a versão desejada. Por exemplo, para a versão 33, a configuração seria:

<pre><code>compileSdkVersion 33</code></pre>

4. Verifique também se a propriedade `targetSdkVersion` está configurada para a mesma versão. Por exemplo:

<pre><code>targetSdkVersion 33</code></pre>

Certifique-se de que todas as outras dependências e plugins do Android estejam atualizados e sejam compatíveis com a versão do SDK configurada.
