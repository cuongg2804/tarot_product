const ChatController = require("../../controller/index.controller");

module.exports = (app) => {

    app.get("/", ChatController.index );
    
    app.get("/create", ChatController.create);

    // POST /create

    app.post("/create", ChatController.createPost);
}