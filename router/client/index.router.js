const ChatController = require("../../controller/index.controller");

module.exports = (app) => {

    app.get("/", ChatController.index );

    app.get("/getCard", ChatController.getCard );

    app.post("/read", ChatController.read );
    
    app.get("/create", ChatController.create);

    // POST /create

    app.post("/create", ChatController.createPost);

    app.get("/test", ChatController.test);
}