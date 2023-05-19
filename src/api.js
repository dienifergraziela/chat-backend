const express = require("express");
const app = express();
const salaController = require("./controllers/salaController");
const usuarioController = require("./controllers/usuarioController");
app.use(express.urlencoded({extended : true}));
app.use(express.json());

const router = express.Router();
app.use('/', router.get('/', (req, res) => {
    res.status(200).send("<h1>API - CHAT </h1>")
}))

app.use("/sobre", router.get("/sobre", (req, res, next) => {
    res.status(200).send({
        "nome": "API - CHAT",
        "versão": "0.1.0",
        "autor": "Dienifer Ripl"
    })
}));

app.use("/salas", router.get("/salas", (req, res, next) => {
    let resp = salaController.get();
    res.status(200).send(resp);
}));

app.use("/entrar",router.post("/entrar", async(req,res,next) => {
    if(Token.checkToken(req.headers.token.req.headers.idUser.req.headers.nick)) return false;
    let resp = await usuarioController.entrar(req.body.nick);
    res.status(200).send(resp);
}));

module.exports = app;