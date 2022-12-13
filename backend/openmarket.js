/**
 * Códigos do servidor Glitch
 */
const express = require("express");
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
    bodyParser.urlencoded({
        // to support URL-encoded bodies
        extended: true,
    })
);

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});

/**
 *
 *       @filename	openmarket.js
 *
 *    @description	Webhook para DialogFlow Agente: OpenMarket
 *
 *        @version	1.0.0
 *        @created	14/11/2022
 *
 *         @author	Vitor Cesar Lulio (vitorcesarlulio@hotmail.com)
 *   @organization	UNISAL Campus Maria Auxiliadora
 * 
 */
app.post("/dialogflow", (request, response) => {
    const intentName = request.body.queryResult.intent.displayName;

    /*
        Captura nome do usuario

        Quando usuario diz que seu nome está correto, é retornado um botão para para ir direto as habilidades do agente
    */
    if (intentName == "UsuarioCapturarNomeSim") {
        response.json({
            fulfillmentMessages: [
                {
                    payload: {
                        "richContent": [
                            [
                                {
                                    "type": "description",
                                    "title": "",
                                    "text": [
                                        "Show! Se precisar saber minhas habilidades é só clicar no botão abaixo ou perguntar"
                                    ]
                                },
                                {
                                    "type": "button",
                                    "icon": {
                                        "type": "tips_and_updates",
                                        "color": "#000000"
                                    },
                                    "text": "Habilidades",
                                    "event": {
                                        "name": "AssistenteHabilidades",
                                        "languageCode": "pt-br",
                                        "parameters": {}
                                    }
                                }
                            ]
                        ]
                    }
                },
            ],
        });
    }

    /*
        Ajuda que o assistente oferece

        Retorna em forma de accordion para usuario expandir o que o assistente pode ajuda-lo
    */
    else if (intentName == "AssistenteAjuda") {
        response.json({
            fulfillmentMessages: [
                {
                    payload: {
                        "richContent": [
                            [
                                {
                                    "type": "accordion",
                                    "title": "Demorando para eu te responder? 😰",
                                    "subtitle": "Se demorar muita para eu te responder, fica tranquilo(a), clica aqui pra ver o que fazer",
                                    "text": "Refaça sua pergunta pra ver se eu entendo, estou aprendendo ainda; Aguarde alguns minutos para refazer sua pergunta"
                                },
                                {
                                    "type": "accordion",
                                    "title": "Deseja encerrar uma conversa?",
                                    "subtitle": "Espero que não, mas pra finalizar uma conversa comigo, clica aqui pra ver como é que faz",
                                    "text": "É só dizer um tchauzinho, que eu te vejo em breve 🙂"
                                }
                            ]
                        ]
                    }
                },
            ],
        });
    }

    /*
        Habilidades disponiveis do agente

        Retorna em forma de botões como opções para usuario clicar e automaticamente chamar o event da intent definida em event.name
    */
    else if (intentName == "AssistenteHabilidades") {
        response.json({
            fulfillmentMessages: [
                {
                    payload: {
                        "richContent": [
                            [
                                {
                                    "type": "info",
                                    "title": "Habilidades",
                                    "subtitle": "Essas são algumas de minhas habilidades, sempre que precisar de alguma coisa pergunte sobre minhas habilidades 😜",
                                },
                                {
                                    "type": "button",
                                    "icon": {
                                        "type": "shopping_cart",
                                        "color": "#000000"
                                    },
                                    "text": "Encontrar mercados",
                                    "event": {
                                        "name": "MercadosInformacoes",
                                        "languageCode": "pt-br",
                                        "parameters": {}
                                    }
                                },
                                {
                                    "type": "button",
                                    "icon": {
                                        "type": "search",
                                        "color": "#000000"
                                    },
                                    "text": "Localizar um produto",
                                    "event": {
                                        "name": "ItemLocalizacao",
                                        "languageCode": "pt-br",
                                        "parameters": {}
                                    }
                                },
                                {
                                    "type": "button",
                                    "icon": {
                                        "type": "help",
                                        "color": "#000000"
                                    },
                                    "text": "Ajuda",
                                    "event": {
                                        "name": "AssistenteAjuda",
                                        "languageCode": "pt-br",
                                        "parameters": {}
                                    }
                                }
                            ]
                        ]
                    }
                },
            ],
        });
    }

    /*
        Lista de produtos
    */
    const products = [
        {
            "name": "banana",
            "market": "Supermercados Crema",
            "store": 1,
            "hall": "Frutas",
            "imageLink": "https://ceagesp.gov.br/wp-content/uploads/2019/12/Banana_pratapng.png",
        }
    ]

    /*
        Localização de um produto

        Retorna onde um produto se encontra no mercado de acordo com o que o usuario passou para o agente 
    */
    else if (intentName == "ItemLocalizacao") {
        var product = request.body.queryResult.parameters.product.toLowerCase();

        product = products.find(x => x.name == product);

        var productRichContent = [
            [
                {
                    "type": "info",
                    "title": product.name[0].toUpperCase() + product.name.substring(1),
                    "subtitle": "📍 Corredor " + product.hall
                        + "\n🛒 " + product.market + " | Loja" + product.store
                        + "\n\nClique para obter a planta baixa do mercado",
                    "image": {
                        "src": {
                            "rawUrl": product.imageLink
                        }
                    },
                    "actionLink": "https://i.pinimg.com/736x/54/a6/28/54a628177b404e84d3e2670ff2538389.jpg"
                },
            ],
        ];

        response.json({
            fulfillmentMessages: [
                {
                    payload: {
                        richContent: productRichContent,
                    },
                },
            ],
        });
    }

    /*
        Lista de mercados
    */
    const markets = [
        {
            "name": "Supermercados Pavan",
            "store": 1,
            "adressLink": "https://goo.gl/maps/cvDxGheZJKj5nzXD8",
            "telephone": "+55 (19) 3458-4455",
            "imageLink": "https://scontent.fcpq2-1.fna.fbcdn.net/v/t1.18169-9/19989324_1460043714083879_3547670308927789872_n.png?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W6pBccexym8AX_X10AE&_nc_ht=scontent.fcpq2-1.fna&oh=00_AfDWZHqOXPVvdjsC8p16p-gqxp30mg-nu1sCOxp51FwuOg&oe=63B0C65B"
        },
        {
            "name": "Supermercados Pavan",
            "store": 2,
            "adressLink": "https://goo.gl/maps/RakDxw2arYao9X7X8",
            "telephone": "+55 (19) 3458-1399",
            "imageLink": "https://scontent.fcpq2-1.fna.fbcdn.net/v/t1.18169-9/19989324_1460043714083879_3547670308927789872_n.png?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W6pBccexym8AX_X10AE&_nc_ht=scontent.fcpq2-1.fna&oh=00_AfDWZHqOXPVvdjsC8p16p-gqxp30mg-nu1sCOxp51FwuOg&oe=63B0C65B"
        },
        {
            "name": "Supermercados Pavan",
            "store": 3,
            "adressLink": "https://goo.gl/maps/ERPMVoWSegg2LyYd7",
            "telephone": "+55 (19) 3464-2944",
            "imageLink": "https://scontent.fcpq2-1.fna.fbcdn.net/v/t1.18169-9/19989324_1460043714083879_3547670308927789872_n.png?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W6pBccexym8AX_X10AE&_nc_ht=scontent.fcpq2-1.fna&oh=00_AfDWZHqOXPVvdjsC8p16p-gqxp30mg-nu1sCOxp51FwuOg&oe=63B0C65B"
        },
        {
            "name": "Supermercados Pavan",
            "store": 4,
            "adressLink": "https://goo.gl/maps/HWVkqGcYJyAEtg9L6",
            "telephone": "+55 (19) 3026-7042",
            "imageLink": "https://scontent.fcpq2-1.fna.fbcdn.net/v/t1.18169-9/19989324_1460043714083879_3547670308927789872_n.png?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W6pBccexym8AX_X10AE&_nc_ht=scontent.fcpq2-1.fna&oh=00_AfDWZHqOXPVvdjsC8p16p-gqxp30mg-nu1sCOxp51FwuOg&oe=63B0C65B"
        },
        {
            "name": "Supermercados Pague Menos",
            "store": "Cidade Nova",
            "adressLink": "https://goo.gl/maps/gCb8DLEwMurMQTQR8",
            "telephone": "+55 (19) 3457-9470",
            "imageLink": "https://scontent.fcpq2-1.fna.fbcdn.net/v/t1.18169-9/1610874_811609605572433_8404240228602367838_n.png?stp=dst-png_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=7aed08&_nc_ohc=yWFobhNYI6oAX8Q3qBK&_nc_ht=scontent.fcpq2-1.fna&oh=00_AfCPzwpqO3yTnJCbLO5CIx-UdifwxaKt6slZY-wSSB12MQ&oe=63B0CF8D"
        },
        {
            "name": "Supermercados Pague Menos",
            "store": "Firenze",
            "adressLink": "https://goo.gl/maps/MFyX3cGn9HAnHGcK9",
            "telephone": "+55 (19) 3464-9600",
            "imageLink": "https://scontent.fcpq2-1.fna.fbcdn.net/v/t1.18169-9/1610874_811609605572433_8404240228602367838_n.png?stp=dst-png_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=7aed08&_nc_ohc=yWFobhNYI6oAX8Q3qBK&_nc_ht=scontent.fcpq2-1.fna&oh=00_AfCPzwpqO3yTnJCbLO5CIx-UdifwxaKt6slZY-wSSB12MQ&oe=63B0CF8D"
        },
        {
            "name": "Supermercados Pague Menos",
            "store": "Av. Amizade",
            "adressLink": "https://goo.gl/maps/8ePBCVwYui8zNLnD79",
            "telephone": "+55 (19) 3457-9700",
            "imageLink": "https://scontent.fcpq2-1.fna.fbcdn.net/v/t1.18169-9/1610874_811609605572433_8404240228602367838_n.png?stp=dst-png_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=7aed08&_nc_ohc=yWFobhNYI6oAX8Q3qBK&_nc_ht=scontent.fcpq2-1.fna&oh=00_AfCPzwpqO3yTnJCbLO5CIx-UdifwxaKt6slZY-wSSB12MQ&oe=63B0CF8D"
        },
        {
            "name": "Supermercados São Vicente",
            "store": 1,
            "adressLink": "https://goo.gl/maps/DJeYhthahFzBmpgdA",
            "telephone": "+55 (19) 3499-1970",
            "imageLink": "https://www.svicente.com.br/wp-content/themes/svicente//favicon.ico"
        },
        {
            "name": "Supermercados Crema",
            "store": 1,
            "adressLink": "https://goo.gl/maps/NdqEoxV6iedX3KLb7",
            "telephone": "",
            "imageLink": "https://scontent.fcpq2-1.fna.fbcdn.net/v/t1.6435-9/53860961_2041111942676705_7750069087480315904_n.png?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=a3_1BpSJYZoAX_kK-gO&_nc_ht=scontent.fcpq2-1.fna&oh=00_AfAa9kdPg0weFCTHGcX_JToJpZ69vikCAmLhaVRlztpT6Q&oe=63B0E310",
        },
    ]

    /*
        Lista de mercados

        Retorna toda lisa de mercados parceiros, ficou generico para englobar localização e contato
    */
    else if (intentName == "MercadosInformacoes") {

        //Monto minha estrutura padrão para trabalhar com richContent e inicializo ela com informação que não é dinamica
        let marketsRichContent = [
            [
                {
                    "type": "info",
                    "title": "Lista de mercados",
                    "subtitle": "Essa é a lista de nossos mercados parceiros. Clique no mercado desejado para mais informações.",
                },
            ],
        ];

        // Populo minha marketsRichContent com meus mercados
        for (const market of markets) {
            //Na posição 0 do array vai ficar abaixo da minha inicialização estatica ("Lista de mercados")
            marketsRichContent[0].push({
                type: "info",
                title: market.store != "" ? market.name + " | Loja " + market.store : market.name,
                subtitle: market.telephone != "" ? "📞 " + market.telephone : "",
                image: {
                    src: {
                        rawUrl: market.imageLink,
                    },
                },
                actionLink: market.adressLink,
            },
            );
        }

        // Response para o Agente
        response.json({
            fulfillmentMessages: [
                {
                    payload: {
                        richContent: marketsRichContent,
                    },
                },
            ],
        });
    }
});