const responeSocket = require("../socket.io/socket");

module.exports.index =async (req, res) => {
    responeSocket(req,res);
    res.render("page/index.pug",{
        pageTitle : "Trang chủ"
    });
}