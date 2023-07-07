//selecciono todos los items del menú
const menuItems = document.querySelectorAll('.menu-item');
//Recorro la lista de nodos y detecto el click en cualquiera de ellos
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
const navBar = document.querySelector('#navBar'); 
menuIcon.addEventListener('click', (e) =>{
    navBar.classList.toggle('menu-mobile-active');
});


const bodyAllElement = document.querySelector('#bodyAll');
const headerElement = document.querySelector('#header');
const onSwitch = document.querySelector('#on');
const offSwitch = document.querySelector('#off');
const onLabel = document.querySelector("label[for='on']");
const offLabel = document.querySelector("label[for='off']");
const darkModeContainer = document.querySelector('#darkModeContainer');

onSwitch.addEventListener('click',(e)  => {
        onSwitch.disabled = true;
        offSwitch.disabled = false;
        darkModeContainer.style.boxShadow = "inset -0.45em 0 0.45em #494949";
        offLabel.style.color = "#8e8e8e";
        onLabel.style.color = "#98f195";
        bodyAllElement.classList.toggle('dark-mode-body');
        headerElement.classList.toggle('dark-mode-body');
});

offSwitch.addEventListener('click',()  => {
        onSwitch.disabled = false;
        offSwitch.disabled = true;
        darkModeContainer.style.boxShadow = "inset 0.45em 0 0.45em #171717";
        onLabel.style.color = "#8e8e8e";
        offLabel.style.color = "#f1959f";
        bodyAllElement.classList.toggle('dark-mode-body');
        headerElement.classList.toggle('dark-mode-body');
});

window.addEventListener('load',()=> {
    offSwitch.disabled = true;
    darkModeContainer.style.boxShadow = "inset 0.45em 0 0.45em #171717";
    onLabel.style.color = "#8e8e8e";
    offLabel.style.color = "#f1959f";
})
