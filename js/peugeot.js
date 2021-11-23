const agregabotones = document.querySelectorAll(".reserv");
agregabotones.forEach(agregaboton => {
    
    console.log(agregaboton)
    agregaboton.addEventListener("click",datos())
});

function datos(){
    

}
/*-----------------------------------------------------------*/

let contador = 0;
const PrecioReserva = (50000)
const FleteyFormularios = (20000)
const divide = (A , B)=> A / B ;
class cliente{
    constructor(nombre,tel,direccion){
        this.nombre=nombre;
        this.tel=tel;
        this.direccion=direccion;
    }
}

function borrar(){
    if(contador=== 0){ 
    let formulario = document.createElement("div");
    const gracias=`Hola gracias por reserva la unida , ahora neceitamos que completes con los siguiente datos 
    <br>Nombre y apellido:<input type =text name=nombre id=name>
    <br>Celular:<input type =text name=celular id=phone>
    <br>Direccion:<input type =text name=direccion id=direccion>
    <br><button class="btn btn-primary btn-lg" onclick="datoscliente()">Enviar</button> `
    
    formulario.innerHTML=gracias;

    formulario.id="formulario" 

    document.getElementById("alertReserv").appendChild(formulario);

}}

function datoscliente(){
    let nombre=document.getElementById("name").value;
    let tel=document.getElementById("phone").value;
    let direccion=document.getElementById("direccion").value;
    let cliente1 = new cliente (nombre , tel, direccion);
    console.log(cliente1);
    mensajefinal(cliente1)
}
function mensajefinal(cliente){
    let anulo =document.getElementById("formulario");
    anulo.parentNode.removeChild(anulo);

    let mensaje =document.createElement("div")
    mensaje.innerHTML="hola "+
    cliente.nombre + 
    " gracias por hacer la reserva solo falta abonar  $"
    + PrecioReserva + " mas formularios  $"+ FleteyFormularios  ;

    mensaje.id="mensaje"
    document.getElementById("alertReserv").appendChild(mensaje);
}

function cuot(){
    let share = document.getElementById("Ncuotas").value;
    let amount= document.getElementById("montof").value;
    console.log("tus cuotas "+ share +" monto a financiar "+ amount);
    
    let fuera =document.getElementById("cuota");
    fuera.parentNode.removeChild(fuera);

    let cuotasC = document.createElement("div")
    cuotasC.innerHTML=`Hola , Financiando $`+ amount +` Te quedan `+ share + ` Cuotas $`+ divide(amount , share)+" mas seguro" ;

    document.getElementById("cuota2").appendChild(cuotasC);
}