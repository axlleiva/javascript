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



