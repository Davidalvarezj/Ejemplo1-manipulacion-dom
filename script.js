const h1 = document.querySelector("h1");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const button= document.querySelector("button");
const span= document.querySelector(".span");
const h2 = document.querySelector(".h2class");



button.addEventListener("click",functionbutton)
button.addEventListener("mouseenter",mouseenter)
button.addEventListener("mouseleave",mouseleave)
button.addEventListener("mousemove",mousemove)

function mouseenter(){  
    span.innerHTML="SORPRESAAAAAAAAAAAAAAAAAAAAA"   
}
function mouseleave(){  
    span.innerHTML="CHAOOOOOOOOOOOOOOOOOOOOOOOO"   
}    
function mousemove(){  
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    var coor = "X coords: " + x + ", Y coords: " + y;
    h2.innerHTML=coor ;   
} 

function functionbutton(){
suma=Number(input1.value)+Number(input2.value);
console.log(suma);
span.innerHTML=suma;


}