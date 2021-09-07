let date = new Date();
let h = date.getHours()
if (h > 18 || h < 6){
    document.body.style.backgroundColor = "#2a2a2a";
    document.body.style.color = "#fff";
    document.getElementById("greetings").innerHTML = "👋 Good Evening";
}
else{
    document.body.style.backgroundColor = "#fcfcfc";
    document.body.style.color = "#111";
    if(h >= 6 && h < 10){
        document.getElementById("greetings").innerHTML = "👋 Good Morning";
    }
    else if(h >= 10 && h < 16){
        document.getElementById("greetings").innerHTML = "👋 Good Afternoon";
    }
    else if(h >= 16){
        document.getElementById("greetings").innerHTML = "👋 Good Evening";
    }
}
// console.log("outside");

let greets = ["Hello", "Bonjour" , "Namaste", "Hi", "Salut"];
function greetLooper(g){
    let final = "👋 ";
    let num = Math.floor(Math.random()*g.length);
    final += g[num];
    // console.log(final);
    document.getElementById("greetings").innerHTML = final;
    // return final;
}

setInterval(function(){greetLooper(greets);}, 2000);


