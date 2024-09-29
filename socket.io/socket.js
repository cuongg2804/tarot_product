const Groq = require("groq-sdk")
const groq = new Groq({ apiKey: process.env.API_KEY });

 async function getGroqChatCompletion(request) {
    return groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: request + ". Nói bằng tiếng việt",
        },
      ],
      model: "llama3-8b-8192",
    });
  }

module.exports =  async (req,res) => {
    _io.once('connection', (socket) => {
      
        socket.on("CLIENT_SEND_MESSAGE", async (resquest) => {

            const objectRespone = await getGroqChatCompletion(resquest);
            const respone = (objectRespone.choices[0].message.content || "").replace(/\n/g, '<br>');
            socket.emit("SERVER_RETURN_REQ", resquest);
            socket.emit("SERVER_RETURN_RES", respone);
        })
    })
}