const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwd1El = document.getElementById("pwds1-el")
let pwd2El = document.getElementById("pwds2-el")

function getRandomChar() {
    return characters[Math.floor(Math.random()* characters.length)]
}

function getPwds() {
    let pwd = ""
    for (let i = 0; i < 15; i++){
        pwd += getRandomChar()
    }
    return pwd
}


function pwds(){
    pwd1El.textContent = getPwds()
    pwd2El.textContent = getPwds()
}


