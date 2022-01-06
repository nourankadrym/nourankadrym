
/*Navigation is built dynamically as an unordered list by using appendChild, and innerHTML */

const navbar=document.getElementById("navbar__list");
const sectionList=Array.from(document.querySelectorAll("section"));


function createnewListItem(){

for(section of sectionList) {

    newListItem=document.createElement('li');
    newListItem.innerHTML=`<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">
    ${section.dataset.nav}</a></li>`
    
    navbar.appendChild(newListItem);}}


    createnewListItem();

//highlighting the active section using getBoundingClientRect

    window.onscroll=function(){
    
        document.querySelectorAll("section").forEach((active) => {
    if (
    active.getBoundingClientRect().top >= -300 &&
    active.getBoundingClientRect().top<= 100) 
    {
    active.classList.add("your-active-class");
    } else 
    { active.classList.remove("your-active-class"); }
        })
    ;};

//smooth scrolling to the appropriate section when clicking an item from the navbar

    document.querySelectorAll('a').forEach(anchor => {
    
    anchor.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
        });
    });
});

//go up button

const button = document.querySelector(".up");

button.onclick = function () {
    window.scrollTo({
    top: 0,
    behavior: "smooth",
    });
};
