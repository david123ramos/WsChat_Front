const nickname = document.getElementById("nickname");
const file = document.getElementById("img");
const button = document.getElementById("send");

button.onclick = function(){

    const reader = new FileReader();
    reader.readAsDataURL(file.files[0]);

    reader.onloadend = function() {
        const imgBase64 = reader.result;
        const nicknameValue = nickname.value;

        const obj = {
            img : imgBase64,
            nick : nicknameValue
        };
        
        localStorage.setItem("user",JSON.stringify(obj))
        location.href = "/front/index.html"
    }


}

