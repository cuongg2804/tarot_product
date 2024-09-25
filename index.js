const express = require("express");
const app = express();
var bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const methodOverride = require("method-override");
const dotenv = require("dotenv");
const flash = require('express-flash');
const http = require("http");
const { Server } = require("socket.io");
const database = require("./config/database");
dotenv.config();
//Socket
const server = http.createServer(app);
const io = new Server(server);
global._io = io ;
//EndSocket



//ROUTER CLIENT
const ClientRouter = require("./router/client/index.router");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/public`));


app.set("view engine", "pug");
app.set("views", `${__dirname}/view`);
app.use(methodOverride('_method'));

ClientRouter(app);
database.connect();


const port =  process.env.PORT ; 
server.listen(port, () => {
    console.log(`Đã kết nối tới cổng: ${port}`);
});