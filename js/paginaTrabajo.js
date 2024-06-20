let mapa=new Map([["España", "Madrid"],
["Francia", "Paris"], ["Italia", "Roma"], //<- Estos son select.value (creo)
["Portugal", "Lisboa"]])

let select=document.querySelector("#paises");

for (let [pais, capital] of mapa){
    let paisOpcion=document.createElement("option");

    paisOpcion.textContent=pais;

    //Para darle atributos (para ponerle un ID a país)
    paisOpcion.setAttribute("id", pais);

    //Para crear hijos al select (paises)
    select.appendChild(paisOpcion);
}


select.addEventListener("change", function(){
    console.log(select.value); // Esto es solo para ver por consola que el país está bien


    quitarBorde(); 


    let capitalS=mapa.get(select.value);
    console.log(capitalS);

    //get es recuperar el valor que tiene el mapa en la clave que lee en el select
    document.querySelector("#capital").innerHTML="La capital es " + capitalS;

    //(FOTOS)
    document.querySelector("#" + capitalS).style.border="2px solid black";
})



//Darle clases a las imágenes
let imagenes = document.querySelectorAll("img"); //Crea un Array con todas las imágenes 

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("mouseover", function(){
        imagenes[i].style.width="275px";
    })

    imagenes[i].addEventListener("mouseout", function(){
        imagenes[i].style.width="255px";
    })
}

function quitarBorde() {
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.border="none";
    }
}
