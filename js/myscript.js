const kmprz = 0.21;
const over = 65;
const under = 18;
const scontoover = kmprz * 0.4;
const scontounder = kmprz * 0.2;

document.getElementById("conferma").addEventListener("click",
    function(){
        var tizioNome = document.getElementById("nome").value;
        console.log(tizioNome)
        var kilometri = document.getElementById("km").value;
        console.log(kilometri)
        var age = document.getElementById("anni").value;
        console.log(age)
        document.getElementById("car").innerHTML = Math.floor(Math.random()*10);
        document.getElementById("cp").innerHTML = Math.floor(Math.random()*100000);
    }
)
if (age = document.getSelection("minorenne").value) {
    price = ( scontounder * kilometri )
} else if (age = document.getSelection("silver").value) {
    price = ( scontoover * kilometri )
}
var price = (kmprz * kilometri)

document.getElementById("tz_name").innerHTML = tizioNome;
document.getElementById("off").innerHTML = age;
document.getElementById("prz").innerHTML = price



