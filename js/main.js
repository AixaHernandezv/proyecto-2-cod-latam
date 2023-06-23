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

//menú hamburguesa en mobile lograr que al hacer click en el icono aparezca el menú 
//para esto debo seleccionar el icono y el menú

const menuIcon = document.querySelector('#menuIcon');
const navBarMobile = document.querySelector('#navBarMobile');
menuIcon.addEventListener('click', (e) =>{
    /* const navbarMobileDisplayStatus = navBarMobile.style.display;
    navBarMobile.style.display = (!navbarMobileDisplayStatus || navbarMobileDisplayStatus === 'none') 
    ? 'flex' 
    : 'none'; */
    navBarMobile.classList.toggle('menu-mobile-active');
});

const darkModeBtnElement = document.querySelector('#darkModeBtn');
const bodyAllElement = document.querySelector('#bodyAll');
const headerElement = document.querySelector('#header')
darkModeBtnElement.addEventListener('click', (e)=> {

    bodyAllElement.classList.toggle('dark-mode-body');
    headerElement.classList.toggle('dark-mode-body')


})