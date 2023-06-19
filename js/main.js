//seleccionamos todos los items del menú
const menuItems = document.querySelectorAll('.menu-item');
//Recorrer esa lista de nodos y detectar el click en cualquiera de ellos
menuItems.forEach((item )=> {
    item.addEventListener('click', (e) =>{
       const currentItem = document.querySelector('.active');
       currentItem.classList.remove('active');
       e.target.classList.add('active');
       console.log(currentItem);
    })
    
});