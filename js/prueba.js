let carrito=[]
const divreserv=document.getElementById('alertReserv');


$(".button").click(function(e){

    const button = e.target
    const item = button.closest('.col')
    const titulo =item.querySelector('.car-title').textContent;
    const costo =item.querySelector('.car-cost').textContent;
    const img=item.querySelector('.img-thumbnail').src;
    console.log(titulo,costo,img)

    const newitem ={
        title:titulo ,
        cost:costo ,
        imagen:img ,
        cantidad: 1
    }

})
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

const buttondelete  =e.target
const tr = buttondelete.closest(".itemcarrito")
const title = tr.querySelector('.title').textContent;
for(let i =0; i < carrito.length ;i++){

    if(carrito[i].title.trim()=== title.trim()){
        carrito.splice(i, 1)
        console.log("borrar item")

    }
}
    
   
    totalCarrito()

    for(let i=0 ; i < carrito.length;i++){
        const sum = carrito[i].cantidad++;
        const val=valor[i]
        console.log(sum)
        console.log(val)
        rendercarrito()
        totalCarrito()
        return null;
        
    }
    function sumaCantidad(e){
        const sumaInput  = e.target
        const tr = sumaInput.closest(".ItemCarrito")
        const title = tr.querySelector('.title').textContent;
        carrito.forEach(item => {
          if(item.title.trim() === title){
            sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            CarritoTotal()
          }
        })
      }

      //ANDA FALLA

      for(let i=0 ; i < carrito.length;i++){
        if(carrito[i].title.trim()=== titl.trim()){ 
        const meno= carrito[i].cantidad--;
        const lementi=lement[i]
        lementi.value--     
        console.log(meno)
        totalCarrito()
        return null;
        }
    }