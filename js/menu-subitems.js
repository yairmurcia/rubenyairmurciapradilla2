let flechita = document.getElementById("flechita");
alert("Si acabas de llegar Bienvenido, si te vas vuelve pronto");
flechita.addEventListener("click", function() {
    if(flechita.classList.add("flechita")) {
        flechita.classList.remove("flechita");
    }
    else {
        flechita.classList.add("flechita");
        v.classList.remove("flechita");
    }
});