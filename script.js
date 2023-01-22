const ws = new WebSocket("wss://wschat.herokuapp.com/");

const textarea = document.getElementById("txt");
const button = document.getElementById("btn");
const messages = document.getElementById("messages");

button.onclick = function()
{
    ws.send(textarea.value);
}

ws.onmessage = async function(msg, i){
    const cText  = await msg.data.text();
    messages.innerHTML += "<li>"+cText+"</li>"
}