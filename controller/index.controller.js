const responeSocket = require("../socket.io/socket");
const Card = require("../models/card.models");

module.exports.index =async (req, res) => {
    responeSocket(req,res);
    res.render("page/index.pug",{
        pageTitle : "Trang chủ"
    });
}

module.exports.read =async (req, res) => {
    responeSocket(req,res);
    res.render("page/read.pug",{
        pageTitle : "Trả bài"
    });
}

module.exports.create =async (req, res) => {
    res.render("page/cards/create.pug",{
        pageTitle : "Tạo thẻ"
    });
}

module.exports.createPost =async (req, res) => {
    const dataCard = {
        title : req.body.title,
        linkImage : req.body.image
    }

    const newCard = new Card(dataCard);
    await newCard.save();
    res.redirect("back");
}

module.exports.test =async (req, res) => {
    res.render("page/cards/create.pug",{
        pageTitle : "Tạo thẻ"
    });
}