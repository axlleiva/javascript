//Al reservar del auto 





let carrito=[]
const costo=50000
const divreserv=document.getElementById("alertReserv");
// array constructor y agragamos al carrito
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
    
// funcion agregar carrito 

function addcarrito(newitem){

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
 // creamos el div en html con los borrar y contador
function rendercarrito(){

    const alert =document.querySelector('.alert')

    setTimeout( function(){
        alert.classList.add('agregarCarrito')
    },2000)
    alert.classList.remove('agregarCarrito')

    divreserv.innerHTML=''
    carrito.map(item=>{
        const tr =document.createElement('tr')
        tr.classList.add('itemcarrito')
        const conten=`
        
        <h3 class="title"> ${item.title}</h3>
        <img src=${item.imagen} class=" img-auto ">
        <h5>${costo}</h5>
        <input type="number" min="1" value="${item.cantidad}" class="inputNumber">
        <button class="delete">X</button>
        
        
        
        `
        tr.innerHTML=conten;
        $("#alertReserv").append(tr);
        
        //divreserv.appendChild(tr)

        //tr.querySelector(".delete").addEventListener("click",borraritem);
        $(".delete").click(borraritem);

        //tr.querySelector(".inputNumber").addEventListener('change',sumartotal);
        $(".inputNumber").change(sumartotal);
    })
    totalCarrito()
}
// suma total 

function totalCarrito(){
    let total =0;
    
    
    const itemtotal=document.querySelector('.itemTotal')
    carrito.forEach ((item)=>{
        total = total + costo*item.cantidad;
    })
    itemtotal.innerHTML= `Total $${total}`
    addLocalStorage()
   
}
// borrar 
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

// esto no funciona 

function sumartotal (e){
    const sumarImput = e.target
    const tr = sumarImput.closest(".itemcarrito")
    const title = tr.querySelector('.title').textContent;
    carrito.forEach( item => {
        if(item.title.trim() === title){
            sumarImput.value < 1 ? (sumarImput.value = 1) : sumarImput.value;
            item.cantidad = sumarImput.value;
            
            totalCarrito()
            console.log(totalCarrito)
        }
    })
}




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
// mensaje de final 

$("#listo").click(function(){
    $(".mensajeFinal").css("display","block")
    $("#alertReserv").css("display","none")
    $(".total").css("display","none");
})

//boton carrito aparece y desaparece 

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

//api dolar 
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

//mensaje final 
  
  
    
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
$("#mas").click(function(){
  $(".texto").animate({
    fontSize: '+=7px',
    height: '+=150px',
    width: '+=150px'
  });
}); 
$("#menos").click(function(){
    $(".texto").animate({
        fontSize: '-=7px',
        height: '-=150px',
        width: '-=150px'
    });
  });
