/*------------ toggle style switcher  ------------*/

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
const switcherBox = document.querySelector(".switcher-box");

styleSwitcherToggler.addEventListener("click", ()=>{
    switcherBox.classList.toggle("open");
})
// hide switcher on scroll
window.addEventListener("scroll", ()=>{
    if(switcherBox.classList.contains("open")){
        switcherBox.classList.remove("open")
    }
})

/*------------ toggle style switcher  ------------*/
const alternateStyle = document.querySelectorAll(".alternate-style");
//console.log(alternateStyle);

function setActiveStyle(color) {
    //console.log(color); 
    //Html onclick="setActiveStyle(color-1)" 寫一個功能，按下按鈕後獲取Html中，該物( )裡的東西
    alternateStyle.forEach((style) =>{
        //console.log(style)
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true");
        }
    })
}

/*------------ light/dark mode  ------------*/
const dayNight = document.querySelector(".day-night");
const dayNight02 = document.querySelector(".pp-moon");

dayNight.addEventListener("click", ()=>{
    //console.log("布榖豬是一隻豬")
    dayNight.querySelector("i").classList.toggle("fa-sun"); //toogle會交換 sun/moon
    dayNight.querySelector("i").classList.toggle("fa-moon");//若沒有這行 會交換 sun/無
    dayNight02.querySelector("i").classList.toggle("fa-sun");
    dayNight02.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark"); //toogle會交換 無 跟 .dark\

    if(dayNight.querySelector("i").classList.contains("fa-sun")){
        dayNight.classList.add("sun-bg")
        dayNight02.classList.add("sun-bg")
    }
    if(dayNight.querySelector("i").classList.contains("fa-moon")){
        dayNight.classList.remove("sun-bg")
        dayNight02.classList.remove("sun-bg")
    }
})

dayNight02.addEventListener("click", ()=>{
    //console.log("布榖豬是一隻豬")
    dayNight.querySelector("i").classList.toggle("fa-sun"); //toogle會交換 sun/moon
    dayNight.querySelector("i").classList.toggle("fa-moon");//若沒有這行 會交換 sun/無
    dayNight02.querySelector("i").classList.toggle("fa-sun");
    dayNight02.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark"); //toogle會交換 無 跟 .dark\

    if(dayNight02.querySelector("i").classList.contains("fa-sun")){
        dayNight.classList.add("sun-bg")
        dayNight02.classList.add("sun-bg")
    }
    if(dayNight02.querySelector("i").classList.contains("fa-moon")){
        dayNight.classList.remove("sun-bg")
        dayNight02.classList.remove("sun-bg")
    }
})

window.addEventListener("load", ()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
        dayNight02.querySelector("i").classList.add("fa-sun")
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
        dayNight02.querySelector("i").classList.add("fa-moon")
    }
})