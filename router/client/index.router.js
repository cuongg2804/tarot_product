const ChatController = require("../../controller/index.controller");

module.exports = (app) => {

    app.get("/", ChatController.index );

    app.get("/read", ChatController.read );

   app.post("/read", ChatController.readPost );

    app.get("/getCard", ChatController.getCard );
}