let hamburger = document.querySelector(".hamburger");
let barOne = document.querySelector(".hamburger div:nth-child(1)");
let barTwo = document.querySelector(".hamburger div:nth-child(2)");
let barThree = document.querySelector(".hamburger div:nth-child(3)");
let navigation = document.querySelector(".navigation");
let body = document.querySelector("body"); 
let i = 0;
hamburger.addEventListener("mouseenter", hamburgermouseenter);
hamburger.addEventListener("mouseleave", hamburgermouseleave);
hamburger.addEventListener("click", sideNav);
//window.addEventListener("click", trial);



function hamburgermouseenter() {
    barTwo.style.width = "1.6em";
}
function hamburgermouseleave() {
    barTwo.style.width = "1em";
}
function sideNav() {
    navigation.classList.toggle("visible");
    barOne.classList.toggle("bar-one");
    barTwo.classList.toggle("bar-two");
    barThree.classList.toggle("bar-three");
    }

/*function trial() {
    
    i = i + 1;
    if(i % 2 === 0) {
        console.log("herenow");
    navigation.classList.toggle("visible");
    barOne.classList.toggle("bar-one");
    barTwo.classList.toggle("bar-two");
    barThree.classList.toggle("bar-three");
    }
}*/

