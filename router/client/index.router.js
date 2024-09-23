const ChatController = require("../../controller/index.controller");

module.exports = (app) => {

    app.get("/", ChatController.index );
}