console.log("hola mundo")

function getfuerte(poke1,poke2){
let Ataque1= poke1.base.Attack
let Ataque2= poke2.base.Attack
let mensaje
if (Ataque1>Ataque2) {
    mensaje=poke1.name.english+" es mas fuerte que "+poke2.name.english
    return poke1
       
} else {
    mensaje=poke2.name.english+" es mas fuerte que "+poke1.name.english
    return poke2
    
}


}

function buscarpoke(){
let elemento= document.getElementById("campo")
let indice=parseInt(elemento.value)
let pokemon=pokelist[indice]
rellenaImagen(indice)
alert("el pokemon es: "+pokemon.name.english)

}

function rellenaImagen(idx){
    let el =  document.getElementById("imagen")
    let src = "./pokemon.json/images/"+(idx+1)+".png"
    el.src =src

}