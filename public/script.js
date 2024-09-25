
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
    divRes.innerHTML = `<div class="inner-content style="white-space: pre-wrap;"">${res}<div>`;
    body.appendChild(divRes);
    new Viewer(divRes);
})

const inputField = document.querySelector('.inner-form input');

inputField.addEventListener('focus', () => {
  inputField.style.boxShadow = '0 0 10px #FE5DA3';
});

inputField.addEventListener('blur', () => {
  inputField.style.boxShadow = 'none';
});


const chatBody = document.querySelector('.inner-body');

chatBody.scrollTop = chatBody.scrollHeight; // Tự động cuộn xuống cuối khi có tin nhắn mới

//Upload Imange 
const uploadImage = document.querySelector("[upload-image]");
if(uploadImage) {
    const uploadImage_input = uploadImage.querySelector("[upload-image-input]");
    console.log(uploadImage_input);
    const img =  uploadImage.querySelector("[upload-image-preview]");
   console.log(img);
    uploadImage_input.addEventListener("change", () => {
        const file = uploadImage_input.files[0] ;
        if(file){
            img.src = URL.createObjectURL(file);
        }
    })
}