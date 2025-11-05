# 🚀 Tela de Login Moderna (React, TypeScript & Zod)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)

Este é um projeto de front-end focado na criação de uma tela de login moderna, bonita e funcional. O objetivo principal é demonstrar as melhores práticas de **estilização**, **responsividade** e **validação de formulários** no ecossistema React.

---

## ✨ Foco do Projeto

O desenvolvimento deste componente teve como pilares:

* **Estilização Avançada:** Foco em criar uma UI agradável e moderna, com grande atenção aos detalhes de design (cores, espaçamento, tipografia).
* **Responsividade (Mobile-First):** A interface foi construída para se adaptar perfeitamente a todos os tamanhos de tela, de dispositivos móveis a desktops.
* **Validação Robusta:** Implementação de um sistema de validação de formulários que fornece feedback instantâneo e claro ao usuário, garantindo a integridade dos dados.

## 📸 Screenshots

| Versão Desktop | Versão Mobile |
| :---: | :---: |
| ![Preview da tela de login em um desktop](/src/assets/TelaDelogin.png) | ![Preview da tela de login em um celular](/src/assets/TelaMobile.png) |
| *Uma interface limpa e espaçosa para desktops.* | *Design totalmente adaptado para telas menores.* |

*(**Nota:** Substitua os `link-para-sua-imagem` pelos prints da sua aplicação!)*

---

## 🛠️ Tecnologias e Conceitos Utilizados

Esta aplicação combina algumas das ferramentas mais poderosas e modernas do ecossistema React:

* **React:** A biblioteca base para a construção da interface de usuário.
* **TypeScript:** Garante a segurança de tipos (type-safety) em todo o projeto, reduzindo bugs e melhorando a experiência de desenvolvimento.
* **`styled-components`:** Utilizado para a estilização (CSS-in-JS). Permite criar componentes de UI componentizados, temáticos e que se adaptam dinamicamente com base em props, facilitando a criação de um design responsivo.
* **`react-hook-form` (`useForm`):** A biblioteca escolhida para o gerenciamento de formulários. Seu uso (através do hook `useForm`) garante alta performance (minimizando re-renders) e facilita o gerenciamento de estado, erros e submissão.
* **`zod`:** Usado para definir o *schema* de validação dos dados. Ele se integra perfeitamente com o `react-hook-form` (via `@hookform/resolvers/zod`) para criar regras de validação complexas (ex: força da senha, formato de e-mail) de forma declarativa e segura.

---

## 🚀 Como Executar o Projeto Localmente

Para rodar este projeto na sua máquina, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/andrel629/TelaDeLogin.git](https://github.com/andrel629/TelaDeLogin.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd nome-do-repositorio
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    # Se você usou Create React App
    npm start
    
    # Se você usou Vite
    npm run dev
    ```

Após isso, o projeto estará disponível no seu navegador (geralmente em `http://localhost:3000` ou `http://localhost:5173`).
