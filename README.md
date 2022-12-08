<div align="center">
    <img src="assets/open-market-logo.png" alt="logo" width="200" height="auto" id="assistente-openMarket"/>
    <h1 >Assistente OpenMarket</h1>
    <h4>
        <a href="https://drive.google.com/file/d/1CM4sOnOPP4M8buPaJW5P35UY6wjb1P3-/view?usp=share_link" target="_blank">Documentação</a>
        <span> · </span>
        <a href="https://github.com/vitorcesarlulio/open-market/issues/" target="_blank">Reportar Bug</a>
        <span> · </span>
        <a href="https://github.com/vitorcesarlulio/open-market/issues/" target="_blank">Solicitar recurso</a>
        <span> · </span>
        <a href="https://copper-arlina-33.tiiny.site/" target="_blank">Veja você mesmo (enquanto hospedado 😪)</a>
    </h4>
</div>

<details>
  <summary>Índice</summary>
  <ol>
    <li><a href="#sobre-o-projeto">Sobre o projeto</a></li>
    <li><a href="#tecnologias">Tecnologias</a></li>
    <li><a href="#começando">Começando</a></li>
    <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
        <li><a href="#utilizando">Utilizando</a></li>
    </ul>
    <li><a href="#colaboradores">Colaboradores</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contribuir">Contribuir</a></li>
    <li><a href="#licença">Licença</a></li>
    <li><a href="#referências">Referências</a></li>
  </ol>
</details>

## Sobre o projeto

Assistente virtual (chatbot) que auxilia seus usuários em questões corriqueiras sobre informações presentes em mercados. Tais mercados, parceiros, vinculados a plataforma idealizada na criação do projeto, onde vários mercados podem cadastrar-se na plataforma para os usuários usufruir de suas informações e produtos.
![](/assets/open-market.gif)
> Demonstração do agente em funcionamento.

## Tecnologias

<details>
  <summary>Front-End</summary>
  <ul>
    <li><a href="">HTML5</a></li>
    <li><a href="">CSS3</a></li>
    <li><a href="https://cloud.google.com/dialogflow/es/docs/integrations/dialogflow-messenger?hl=pt-br">Dialogflow Messenger</a></li>
  </ul>
</details>

<details>
  <summary>Back-End</summary>
  <ul>
    <li><a href="https://nodejs.org/">Node.js</a></li>
    <li><a href="https://glitch.com/">Glitch</a></li>
  </ul>
</details>

## Começando

### Pré-requisitos

Para execução do projeto é necessario uma conta no [Dialogflow](https://dialogflow.cloud.google.com/) e um [Servidor Node.js](https://glitch.com/).

### Instalação
#### Agente Dialogflow

1. Acesse a pasta [dialogflow](https://github.com/vitorcesarlulio/open-market/tree/main/dialogflow/) e realize o dowload do arquivo `.zip`
2. Esse arquivo `.zip` te da acesso a toda estrutura do agente do Dialogflow
3. Em seu Dialogflow, realize a importação do arquivo `.zip`

#### Back-end

1. Acesse a pasta [backend](https://github.com/vitorcesarlulio/open-market/tree/main/backend/) e realize o dowload do arquivo `openmarket.js`
2. Esse arquivo contem toda regra de negocio e também configurações do servidor utilizado (que no caso foi o [Glitch](https://glitch.com/))
3. No Dialogflow é necessario [configurar seu Webhook](https://cloud.google.com/dialogflow/es/docs/fulfillment-webhook?hl=pt-br)

Isso já te integra seu agente do Dialogflow com um Backend, voce pode estar testando atraves do proprio Dialogflow ou seguir próximo passo.

#### Front-end

1. Acesse a pasta [frontend](https://github.com/vitorcesarlulio/open-market/tree/main/frontend/) e realize o dowload do arquivo `index.html`
2. Hospede a página HTML. No desenvolvimento do projeto foi utilizado [tiiny.host](https://tiiny.host/)

### Utilizando

Se tudo sair conforme planejado, basta acessar sua página HTML hospedada e o Dialogflow Messenger já será aberto e iniciaria a comunicação com Dialogflow e a plataforma conversará com o Back-end em deploy.

## Colaboradores

 <table>
    <tr>
      <td align="center">
        <a href="https://www.linkedin.com/in/vitor-cesar-lulio/">
          <img src="https://media-exp1.licdn.com/dms/image/C4E03AQE-Cj9mvSwupA/profile-displayphoto-shrink_800_800/0/1596294499712?e=2147483647&v=beta&t=5ugEiJy4bS6EmOFWH36X3708V7osIvOMe-XXWxZmYo4" width="100px;" alt="Foto - Vítor César Lulio"/><br>
          <sub>
            <b>Vítor César Lulio</b>
          </sub>
        </a>
      </td>
    </tr>
  </table>

## Roadmap

- [ ] LGPD
- [ ] Novos parceiros
- [ ] Canais de atendimento
- [ ] Expansão
- [ ] Multilinguagem

## Contribuir

Quer dar uma mão nesse projeto? Clique [aqui](CONTRIBUTING.md) e da uma olhadinha como contribuir. Valeeeeu ;)<br>

## Licença

Esse projeto está sob licença. Da uma oiada no arquivo [licença](LICENSE.md) para mais detalhes, pode ficar tranquilo.<br>

## Referências

 - [Dialogflow Completo-Domine a Criação de Assistentes Virtuais](https://www.udemy.com/course/dialogflow-completo/)
 - [Documentação do Dialogflow ES](https://cloud.google.com/dialogflow/es/docs?hl=pt-br)
 - [Chatbot em JavaScript: Assistente de Amamentação](https://www.youtube.com/watch?v=_JbJ5h-IaGI)
 - [DialogBot - Integração Dialogflow + NodeJs + MySQL](https://www.youtube.com/watch?v=S89ZO1gCg74)
 - [Como Criar um Chatbot Profissional Usando o Dialogflow](https://www.youtube.com/watch?v=jQXrFLgnRQ8)
 - [Chatbots para WhatsApp - A Nova Melhor Maneira de Criar o Seu](https://www.youtube.com/watch?v=Ifh5FVoQg_8)
 - [Integrate Dialogflow [Api.ai] Bot into Website](https://www.kommunicate.io/blog/integrate-bot-using-dialogflow-in-kommunicate/)
 - [How to enhance your food ordering bot with AI from Google](https://medium.com/botsheets/how-chatbot-makers-can-help-restaurants-survive-a-pandemic-part-4-c6a4289ec8ba)
 - [Are there any general conversational Dialogflow chatbots that I can download and import into my own agent?](https://stackoverflow.com/questions/71330256/are-there-any-general-conversational-dialogflow-chatbots-that-i-can-download-and)
 - [store agent SessionsClient of dialogflow api](https://stackoverflow.com/questions/65829253/store-agent-sessionsclient-of-dialogflow-api)
 - [DialogFlow: handling given-names with multiple segments](https://stackoverflow.com/questions/48394297/dialogflow-handling-given-names-with-multiple-segments)
 - [(Passo-a-Passo) Google DialogFlow | Como criar um Chatbot LowCode?](https://www.youtube.com/watch?v=iJw9ol42vqc)
 - [Dialogflow - Como Trabalhar Com Contextos Nas Intents](https://www.youtube.com/watch?v=t9JqMACbJhA)
 - [Chatbot Whatsapp - Dialogflow Para Iniciantes, Como criar sem Programação](https://www.youtube.com/watch?v=6Oqr6Ap5ReE)
 - [CHAT BOT DIALOGFLOW | COMO CADASTRAR CLIENTES AUTOMÁTICO | COMO SALVAR DADOS DO CLIENTE](https://www.youtube.com/watch?v=Cvup3n-S__k)
 - [CHATBOT DELIVERY | ATENDIMENTO AUTOMÁTICO | DIALOGFLOW | AUTORESPONDER](https://www.youtube.com/watch?v=CZGL5vfOnQc)
 - [Dialogflow Techniques](https://www.youtube.com/playlist?list=PLJLSPq0cTRma_kxRrNSAxcQKUxARMf2Vf)
 - [How to Build a Chatbot with BotUI](https://www.youtube.com/playlist?list=PLJLSPq0cTRmZnUHpzriUQx9M1F8KBe9fJ)
 - [How to Build an Advanced Order Bot in Dialogflow](https://www.youtube.com/playlist?list=PLJLSPq0cTRmYmsO3kXuN-a2sg3ruoZV6x)
 - [Intro to Dialogflow CX](https://www.youtube.com/playlist?list=PLJLSPq0cTRmat9ec-c0hOJJhhNfObZXy3)
 - [Context Deep-Dive Dialogflow ES](https://www.youtube.com/playlist?list=PLJLSPq0cTRmYrgXTWM4qfXimjwKXaX6GX)
 - [Build Dialogflow Chatbot Lilis for Coffee Shop](https://www.youtube.com/playlist?list=PLbd_cZnEWl9BNQEq29DHZAJ-84oMOCGaW)
 - [Artifact Registry pricing](https://cloud.google.com/artifact-registry/pricing)
 - [Cloud Functions pricing](https://cloud.google.com/functions/pricing)

[Voltar ao topo](#assistente-openMarket)
