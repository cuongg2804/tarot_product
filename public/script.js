
//CLIENT SEND MESSAGE
const formSendData = document.querySelector(".chat .inner-form");;
if(formSendData){
    formSendData.addEventListener("submit", (event)=>{
        event.preventDefault();
        const request = formSendData.content.value;
        formSendData.content.value = "";
        socket.emit("CLIENT_SEND_MESSAGE",request );
    })
}
//END CLIENT SEND MESSAGE
const body = document.querySelector(".chat .inner-body");
socket.on("SERVER_RETURN_REQ", (req) => {
    
    const divReq = document.createElement("div");
    divReq.classList.add("inner-outgoing");
    divReq.innerHTML = `<div class="inner-content">${req}<div>`;

    body.appendChild(divReq);
    
   
})

socket.on("SERVER_RETURN_RES", (res) => {
    const divRes = document.createElement("div");
    divRes.classList.add("inner-incoming");
    divRes.innerHTML = `<div class="inner-content">${res}<div>`;
    body.appendChild(divRes);
    new Viewer(divRes);
})