//Al reservar del auto 





let carrito=[]
const costo=50000
const divreserv=document.getElementById("alertReserv");
// array constructor y agragamos al carrito========================================
$(".button").click(function(e){

    const button = e.target
    const item = button.closest('.col')
    const titulo =item.querySelector('.car-title').textContent;
    const img=item.querySelector('.imagen').src;
    console.log(titulo,costo,img)

    const newitem ={
        title:titulo ,
        imagen:img ,
        cantidad: 1
    }
    addcarrito(newitem)
})
    
// funcion agregar carrito =================================================

function addcarrito(newitem){

    const alert =document.querySelector('.alert')

    setTimeout( function(){
        alert.classList.add('agregarCarrito')
    },2000)
    alert.classList.remove('agregarCarrito')

    const inputelement=divreserv.getElementsByClassName("inputNumber")
    for(let i=0 ; i < carrito.length;i++){
        if(carrito[i].title.trim()=== newitem.title.trim()){
            carrito[i].cantidad ++;
            const inputvalue=inputelement[i]
            inputvalue.value++;
            console.log("suma")
            totalCarrito()
            return null;
            
        }
    }
    
    carrito.push(newitem)
    rendercarrito()
}
 // creamos el div en html con los borrar y contador===============================
function rendercarrito(){

    

    divreserv.innerHTML=''
    carrito.map(item=>{
        const tr =document.createElement('tr')
        tr.classList.add('itemcarrito')
        const conten=`
        <div class="father">
            <h3 class="title"> ${item.title}</h3>
            <img src=${item.imagen} class=" img-auto ">
            <h5>${costo}</h5>
            <input type="number" min="1" value="${item.cantidad}" class="inputNumber">
            <button class="delete">X</button>
        </div>
        
        
        `
        tr.innerHTML=conten;
        $("#alertReserv").append(tr);
        
        //divreserv.appendChild(tr)

        //tr.querySelector(".delete").addEventListener("click",borraritem);
        $(".delete").click(borraritem);

        //tr.querySelector(".inputNumber").addEventListener('change',sumartotal);
        $(".inputNumber").change(sumarcantidad);
        
    })
    totalCarrito()
}
// SUMAR TOTAL =============================================

function totalCarrito(){
    let total =0;
    const itemtotal=document.querySelector('.itemTotal')
    carrito.forEach ((item)=>{
        total = total + costo*item.cantidad;
    })
    itemtotal.innerHTML= `Total $${total}`
    addLocalStorage()
   
}
// BORRAR ITEM ===================================== 
function borraritem(e){
   

    const buttondelete  =e.target
    const tr = buttondelete.closest(".itemcarrito")
    const title = tr.querySelector('.title').textContent;
    for(let i =0; i < carrito.length ;i++){

        if(carrito[i].title.trim()=== title.trim()){
            carrito.splice(i, 1)
            console.log("borrar item")

        }
    }
    const alert =document.querySelector('.remove')

    setTimeout( function(){
        alert.classList.add('remove')
    },1000)
    alert.classList.remove('remove')

    tr.remove()
    totalCarrito()
}

// SUMAR CANTIDAD ===============================

function sumarcantidad(e){
    const sumaInput  = e.target
    const tr = sumaInput.closest(".itemcarrito")
    const title = tr.querySelector('.title').textContent;
    for(let i=0 ; i < carrito.length;i++){
        if(carrito[i].title.trim()=== title.trim()){ 
        sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
        carrito[i].cantidad = sumaInput.value;
        totalCarrito()
        return null;
        }
    }
    
  }
//RESTAR UNIDAD=======================================


//JSON GUARDA CARRITO==========================================

function addLocalStorage(){
    localStorage.setItem('carrito',JSON.stringify(carrito));

}

window.onload =function(){
    const storage=JSON.parse(localStorage.getItem('carrito'));
    if(storage){
        carrito=storage;
        rendercarrito()
    }
}
//boton carrito aparece y desaparece  ============================

$(".imgCarrito").click(function(){
    display=$("#main-menu").css("display");
    if(display=="block"){
        $("#main-menu").hide()
        $("#alertReserv").css("display","block");
        $(".total").css("display","block");
        $("#main-menu").css("display","none");
        $(".mensajeFinal").css("display","none")

    }else{
        $("#alertReserv").css("display","none");
        $(".total").css("display","none");
        $(".mensajeFinal").css("display","none");
        $("#main-menu").show()
    }
})

//api dolar ============================================
$( () => {

    const URL = 'https://api.bluelytics.com.ar/v2/latest'
  
    $.get(URL, (response, status) => {
      if (status == 'success') {
          //const { data: {amount: precio, base: origen}} = response
          const precio = response.blue.value_sell
          console.log(precio);
          $('.dolarCosto').text(precio)
      }
    })
  
})

//mensaje final =================================
  
  
    
const nombreFinal =document.getElementById('nombreFinal');
const celu=document.getElementById('celuFinal');
const mail=document.getElementById('mailFinal');
const domicilio=document.getElementById('domicilioFinal');
let infoFinal =[]

$("#btnf").click(function(){
    let nombre =nombreFinal.value;
    let celular=celu.value;
    let email = mail.value;
    let casa = domicilio.value;
    infoFinal.push(nombre,celular,email , casa)
    
    console.log(nombre ,celular , email , casa);
   $(".ingrasarDatos").hide()

    const end=`Gracias ${nombre} por realizar la compra, Te llegara un mail a ${email}
    con los datos de la compra . 
    en 5 dias habiles recibiras tu compra en el domicilio ${casa}`
    
    $("#fin").append(end)
})
// BOTONES mensaje de final ===============================

$("#listo").click(function(){
    $(".mensajeFinal").css("display","block")
    $("#alertReserv").css("display","none")
    $(".total").css("display","none");
})

$("#volver").click(function(){
    $("#main-menu").css("display","block");
    $("#alertReserv").css("display","none")
    $(".total").css("display","none");
})
//EFECTO==========================================
const img =document.querySelector(".imagen")
var css500 = {'max-width' : '500px'}
var css100 = {'max-width' : '100%'}
let contador=0

$(".imagen").click(function(){
    if(contador==0){ 
    $(this).animate(css500,1500)
    contador = 1;
    }
    else{
        $(this).animate(css100,'slow')
        contador = 0;
    }
})

//filtro==================================

$("#modeloAuto").change(function(){
    var categoria = document.querySelector('#modeloAuto').value;
    console.log(categoria )

    $(".col").hide();

    $(".col[category="+categoria+"]").show()

    if(categoria== "all"){
        $(".col").show();
    }
})
