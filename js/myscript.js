const kmprz = 0.21;
const over = 65;
const under = 18;
const scontoover = kmprz * 0.4;
const scontounder = kmprz * 0.2;

document.getElementById("conferma").addEventListener("click",
    function(){
        var visible = document.getElementById("biglietto");
        visible.className = "visible";

        var tizioNome = document.getElementById("nome").value;
        console.log(tizioNome)
        document.getElementById("tz_name").innerHTML = tizioNome;

        var kilometri = document.getElementById("km").value;
        console.log(kilometri)

        var age = document.getElementById("anni").value;
        console.log(age)   
        document.getElementById("off").innerHTML = age;    
        
        // NON CONOSCO IL COMANDO PER FAR INJECTARE LE OPZIONI DEL SELECT
        if (age = "minorenne") {
            price = (kmprz - scontounder) * kilometri;
        } else if (age = "silver") {
            price = (kmprz - scontoover) *kilometri;
        }
        
        var price = (kmprz * kilometri)
        document.getElementById("prz").innerHTML = price

        document.getElementById("car").innerHTML = Math.floor(Math.random()*10);
        document.getElementById("cp").innerHTML = Math.floor(Math.random()*100000);
    }
)

document.getElementById("annulla").addEventListener("click",
    function refreshPage(){
        window.location.reload();
    }
)    