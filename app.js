const express = require('express');
const app = express();

const config = require('./config.js');

var useragent = require('express-useragent');
app.use(useragent.express());

app.listen(config.port, () => {
    console.log('Uruchomiono stronę na porcie ' + config.port)
});

app.set('view engine', 'pug')

app.get("/", (req, res) => {
    if(req.useragent.isMobile) {
        return res.send("Wybacz, nasza strona aktualnie nie obsługuje urządzeń mobilnych, proszę wejdź na nią na komputerze.")
    }

    res.render("index")

})

app.get("/ranking", (req, res) => {

    if(req.useragent.isMobile) {
        return res.send("Wybacz, nasza strona aktualnie nie obsługuje urządzeń mobilnych, proszę wejdź na nią na komputerze.")
    }

    res.render("ranking")

})

app.get("/przelicznik", (req, res) => {
    
    if(req.useragent.isMobile) {
        return res.send("Wybacz, nasza strona aktualnie nie obsługuje urządzeń mobilnych, proszę wejdź na nią na komputerze.")
    }

    res.render("przelicznik")

})

const WSS = require("ws").Server;
const wss = new WSS({ port: 3001 });

wss.on('connection', (ws) => {
    ws.send("Hejo")
    ws.on('message', (msg) => {
        const args = msg.toString().split(',');
        console.log(args);

    })
})

//require("child_process").exec('C:\\"Program Files"\\"Mozilla Firefox"\\firefox.exe localhost:3000')



/*
    ^^
EXPRESS

DISCRORD
    vv
*/


const Discord = require('discord.js');

const client = new Discord.Client({
    intents: ["GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_INTEGRATIONS", "GUILD_EMOJIS_AND_STICKERS"],
    partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "USER", "REACTION"],
    presence: {
		status: 'dnd',
        activities: [
            {
                name: `${config.discordbotprefix}`,
                type: 'LISTENING'
            }
        ],
	},
});

client.login(config["discordbottoken"]).catch(err => {
    console.log("Wystąpił error podczas logowania się do Discorda, prawdopodobnie nie podał*ś tokenu bota lub jest on nieprawidłowy!")
    console.log("Informacje dla developera: \n")
    console.error(err);
});

client.on("ready", () => {
    console.log(`Bot Discord zalogowany! \n( Nazwa bota: ${client.user.tag}, ID bota: ${client.user.id} )`)
});

