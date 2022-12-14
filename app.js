const express = require("express");

const app = express();

app.use(express.static("public"));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log("Servidor corriendo en el puerto ${port}"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/views/register.html");
});

app.post("register", (req, res) => {
    res.redirect("/")
})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
});

app.post("login", (req, res) => {
    res.redirect("/")
})

