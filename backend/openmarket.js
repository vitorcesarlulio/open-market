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

        
        /*
            Google Calendar

            Informações de autenticação com Google Calendar
        */
        const { google } = require('googleapis');
        const calendarId = "a9293a63720d1cda05e562cd030eb9ae5aa4983217c3c35c6ff1be21d007b0bd@group.calendar.google.com"
        const serviceAccount = {
            "type": "service_account",
            "project_id": "open-market-365423",
            "private_key_id": "365fc1101a8898f2d4c1ee4d37075636859a46e9",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDDcXjysSJJdmTy\nRpjaX9dS2CNz2rlr4wIrHx/64F6572vFW5FsRj52Hdu9lnum0UHs3qH7tBMgKUed\nvIFWeg6hDzgxHprzF7w0nJOsDoiISj1nTOfa0Nu5DPQsgjVACWcIdoStdo5lQyf7\nTltRQ5wVNrf3H8VDSRHGDbR0Lkjyo4gzJMrRrhVkAFfFyF2YTrCwnopkdqCj6cB3\nNdb7ngFcf65YimiX6shgh2O0mpmlX5OGzoPtRs2DcrzHZ/wTXwMTzCiLel1yJgSe\nj0J0Vv+hFRNOZSgqth9Zb3l0+oT9qhHdjsC739n5/adThfTYsRJyo674YHK/ZYXo\nosRH771JAgMBAAECggEAPnoJpdtGEKHORzyWJEi69nqtap2i5IAe81XxzSroXRvS\nIbbR2ADkerG0yvhN8te18ViCA4pfCsrnX98goVpHTukkl18nPUp7GX5sHnZO4vKI\ninslKufVNWSUsZ22FBBtZWEtrJ3XiztajpVPz7yDKqzhRhhb4NR84AkFhJY/L4DU\nQv8D/2YS3j3FxnruVG4uskojj5KR/ce2wXVf70GmfjBFtlCKdIRMbDqGQbosUaNn\nvNIUspUMAkgkvC/HibkdxbygfiKIfbl8mAL0lR5jRDZ9twhjmsMeLh4Cy3I+wVH0\nOAo0cYDd61L96ShVbJt/tEB1TLbFkhjTVoa1OScTuQKBgQDjtJ95oZvJcvoahFOf\nSrWUS6x1QCVzExa3pSrC5oGwviJPiUDwctIvSoiseYSoqqBQr9h0OaEG4uKyRk1H\nX9+9oeGog5NgE7faH4wBsfEK1YAjAdderVT6rnjEtSHY3DECBC2QDNapohg6hq65\nUOcmysyuUeeYIDVGbWpUfdH1NwKBgQDbupOaFa0jyL2notyfz5VoJl8IuvVXTbGS\nGvGSR0oLKh9xWhLjJqamt22p3AlhCQXflu7PDVejAM1Yrlv8decLyFo1aKs0NQfc\nID5EJ88Qc/huaSu6vSgjv5zIhvz8inRskkGupYmZYWRShrjMd6wNVfd81e6ZKccq\npIWkmq0hfwKBgQCAiLrkq8cGpfJr+XpClqd8+GJ3JSh+lq3iKEfFENzwacNwZifU\nEtx2eXpA8a9ijj5EjZ5/rPAqtPQGcgy5V3My1ihNOUh9mWPUqq4bXtiTpwTXvfhW\npz0q7EWbtCtRAKphWv5lK/oYczl9//ys+vAgQ6XaWL2Eb9ni0WyOGR/lbQKBgQCJ\n6kbg7QAauNIJmVifWlzt3T/DLA34OUTebtj3tpVMAqlvrViziLwLYpCLkBe290Hf\ngE3uWfKK1mMNaYtFH//gTmYIpeTnxO1lBjvu7YmzSwdAzfRrpnS+U3OmDcxW+tRu\nnTJq225NfmrIvdTaSbcNO8s2aNT0/9sJ8fAMTCWlIwKBgFFNv+Vop8h/Qcuo4ERa\n9XhViw6RQghg12ni8zyJhnjkUsUxUzH3rnBoTjYNNTylZazi9S9OV8sHHDgIxWwA\njpZ1zPqVvs87hutwn1vGSvxKBBpEqOZNTV0FgnnwJTrQtnUx9kTAtjKULfAP2Vz6\n09LQyG43VGtFoxEzrgBgucB6\n-----END PRIVATE KEY-----\n",
            "client_email": "openmarketcalendar@open-market-365423.iam.gserviceaccount.com",
            "client_id": "101986994730378437420",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/openmarketcalendar%40open-market-365423.iam.gserviceaccount.com"
        }

        // Manipulação da data que vem do DialogFlow com a data do Calendario
        const timeZoneOffset = '-03:00';

        const calendar = google.calendar('v3');

        const serviceAccountAuth = new google.auth.JWT({
            email: serviceAccount.client_email,
            key: serviceAccount.private_key,
            scopes: 'https://www.googleapis.com/auth/calendar'
        });

        /*
            Formata Data

            Função para formatar data no formato string
        */
        function formatData(date) {
            var nomeMes = [
                "Janeiro", "Fevereiro", "Março",
                "Abril", "Maio", "Junho", "Julho",
                "Agosto", "Setembro", "Outubro",
                "Novembro", "Dezembro"
            ];

            var dia = date.getDate();
            var mesIndex = date.getMonth();
            var ano = date.getFullYear();

            return dia + ' ' + nomeMes[mesIndex] + ' ' + ano;
        }

        const intentName = request.body.queryResult.intent.displayName;

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
            Captura informações para agendamento da entrega
        */
        else if (intentName == "EntregaAgendar") {
            var date = request.body.queryResult.parameters['entrega-data'];
            var timeStart = request.body.queryResult.parameters['entrega-hora'];

            // Formatando as datas
            const dateTimeStart = new Date(Date.parse(date.split('T')[0] + 'T' + timeStart.split('T')[1].split('-')[0] + timeZoneOffset));
            //Considerando 1h de entrega
            const dateTimeEnd = new Date(new Date(dateTimeStart).setHours(dateTimeStart.getHours() + 1));
            // Deixando a data legivel
            const agendamentoString = formatData(new Date(date.split('T')[0])) + " as " + timeStart.split('T')[1].split('-')[0];

            // Criando um evento
            function criarEventoCalendario(dateTimeStart, dateTimeEnd) {
                return new Promise((resolve, reject) => {
                    calendar.events.list({
                        auth: serviceAccountAuth, // Listar eventos por período de tempo
                        calendarId: calendarId,
                        timeMin: dateTimeStart.toISOString(),
                        timeMax: dateTimeEnd.toISOString()
                    }, (err, calendarResponse) => {
                        // Verifique se já existe um evento no Calendário
                        if (err || calendarResponse.data.items.length > 0) {
                            reject(err || new Error('Requisição conflita com outros agendamentos'));
                        } else {
                            // Criar evento para o período de tempo solicitado
                            var eventSchudele = {
                                'summary': 'Entrega',
                                'location': 'Av. de Cillo, 3500 - Parque Universitario, Americana - SP, 13467-600',
                                'description': 'Entrega para o cliente tal Origem: DialogFlow',
                                'start': { dateTime: dateTimeStart },
                                'end': { dateTime: dateTimeEnd },
                              }; // tem como colocar lembrete! Para incluir um participaente "attendees" tem que ser googel WorkSpace
                            calendar.events.insert({
                                auth: serviceAccountAuth,
                                calendarId: calendarId,
                                resource: eventSchudele,
                            }, (err, event) => {
                                err ? reject(err) : resolve(event);
                            }
                            );
                        }
                    });
                });
            }

            return criarEventoCalendario(dateTimeStart, dateTimeEnd).then(() => {
                let mensagem = `Excelente, sua entrega esta agendado para ${agendamentoString} `;
                response.json({
                    fulfillmentMessages: [
                        {
                            payload: {
                                "richContent": [
                                    [
                                        {
                                            "type": "description",
                                            "title": "Entrega",
                                            "text": [mensagem]
                                        },
                                    ]
                                ]
                            }
                        },
                    ],
                });
            }).catch(() => {
                let mensagem = `Desculpe, não temos horario disponivel para entrega para ${agendamentoString}.`;
                response.json({
                    fulfillmentMessages: [
                        {
                            payload: {
                                "richContent": [
                                    [
                                        {
                                            "type": "description",
                                            "title": "Entrega",
                                            "text": [mensagem]
                                        },
                                    ]
                                ]
                            }
                        },
                    ],
                });
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