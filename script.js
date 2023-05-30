const URL = "ws://localhost:8080/";
const ws = new WebSocket(URL);

const textarea = document.getElementById("txt");
const button = document.getElementById("btn");
const messages = document.getElementById("messages");

const user = JSON.parse(localStorage.getItem("user"));

button.onclick = function(){
    user.msg = textarea.value;
    ws.send(JSON.stringify(user));
}

ws.onopen = function() {
    console.log("websocket ok");
}

ws.onmessage = async function(msg, i){
    const obj  = JSON.parse(await msg.data.text());

    messages.innerHTML += `<li> <img class="nickimg" src="${obj.img}"> [${obj.nick}] -  ${obj.msg}</li>`
}