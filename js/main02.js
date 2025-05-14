//console.log('hi')
/*
window.addEventListener('scroll', function(){
    let value = window.scrollY
    console.log(value)
})
*/
/*------------ navigation menu ------------*/
(() =>{
  
  const header = document.querySelector(".header"),
        hamburgerBtn = document.querySelector(".hamburger-btn"),
        navMenu = document.querySelector(".nav-menu"),
        closeNavBtn = document.querySelector(".close-nav-menu");
  
  window.addEventListener("scroll", () =>{
    if(window.scrollY > 16){
      header.classList.add("background")
      header.classList.add("outer-shadow")
    } else{
      header.classList.remove("background")
      header.classList.remove("outer-shadow")
    }    
  })


  hamburgerBtn.addEventListener("click", showNavMenu);
  closeNavBtn.addEventListener("click", hideNavMenu);
  function showNavMenu(){
    navMenu.classList.toggle("open")
    bodyScrollingToggle()
  }
  function hideNavMenu(){
    navMenu.classList.remove("open")    
    bodyScrollingToggle()
  }
  

  //attach an event handler to document
  document.addEventListener("click", (event) =>{
    if(event.target.classList.contains("link-item")){
      //console.log(event.target.hash) hash可以獲得id ""裡面的值
      if(event.target.hash !==""){
        event.preventDefault();
        const hash = event.target.hash;
        //document.querySelector(".section.active").classList.add("hide")
        //document.querySelector(".section.active").classList.remove("active")
        //document.querySelector(hash).classList.add("active")
        //document.querySelector(hash).classList.remove("hide")
        navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow")
        navMenu.querySelector(".active").classList.remove("active","inner-shadow")

        if(navMenu.classList.contains("open")){
          event.target.classList.add("active","inner-shadow")
          event.target.classList.remove("outer-shadow","hover-in-shadow")
        hideNavMenu()
        } else{
          let navItems = navMenu.querySelectorAll(".link-item")
          navItems.forEach((item) =>{
            if(hash === item.hash){
              item.classList.add("active","inner-shadow")
              item.target.classList.remove("outer-shadow","hover-in-shadow")
            }
          })
          //fadeOutEffect()
        }
        window.location.hash = hash;
      }
    }
  })
  
  /*document.addEventListener("click", (event) =>{
        navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow")
        navMenu.querySelector(".active").classList.remove("active","inner-shadow")
        event.target.classList.add("active","inner-shadow")
        event.target.classList.remove("outer-shadow","hover-in-shadow")
        hideNavMenu()
  })*/

})();


/*------------ about section tabs ------------*/
//IIFE Immediately Invoked Function Expression (function(){})();

/* skill */
(()=>{
  const codeBox = document.querySelector(".code-box")
  const codeBtn = document.querySelectorAll(".code-btn")
  const codeText = document.querySelectorAll(".code-text")
  
  codeBox.addEventListener("click", (event)=>{
    if(!event.target.classList.contains("active") &&
        event.target.classList.contains("code")){
        codeBox.querySelector(".code-box .active").classList.add("outer-shadow")
        codeBox.querySelector(".code-box .active").classList.remove("inner-shadow","active")
        event.target.classList.add("inner-shadow","active")
        event.target.classList.remove("outer-shadow")

        const object = event.target.getAttribute("data-skillTitle")
        //console.log(object)
        codeText.forEach((item)=>{
          if(object === item.getAttribute("data-skillTitle")){
            item.classList.add("active")
          } else{
            item.classList.remove("active")
          }
        })
      }
  })
  
  codeBtn.forEach((codeButton)=>{
    codeButton.addEventListener("click", (event)=>{
      //console.log(event.target.closest("div"))
      if(event.target.closest("div").classList.contains("code") &&
        !event.target.closest("div").classList.contains("active")){
        document.querySelector(".skill.active").classList.add("outer-shadow")
        document.querySelector(".skill.active").classList.remove("inner-shadow","active")
        event.target.closest("div").classList.add("inner-shadow","active")
        event.target.closest("div").classList.remove("outer-shadow")

        const object = event.target.closest("div").getAttribute("data-skillTitle")
        //console.log(object)
        codeText.forEach((item)=>{
          if(object === item.getAttribute("data-skillTitle")){
            item.classList.add("active")
          } else{
            item.classList.remove("active")
          }
        })
      }
    })
  })
  
  const softBox = document.querySelector(".soft-box")
  const softBtn = document.querySelectorAll(".soft-btn")
  const softText = document.querySelectorAll(".soft-text")

  softBox.addEventListener("click", (event)=>{
    if(event.target.classList.contains("soft") &&
      !event.target.classList.contains("active")){
       softBox.querySelector(".soft-box .active").classList.add("outer-shadow")
       softBox.querySelector(".soft-box .active").classList.remove("inner-shadow","active")
       event.target.classList.add("inner-shadow","active")
       event.target.classList.remove("outer-shadow")

       const object = event.target.getAttribute("data-skillTitle")
       softText.forEach((item)=>{
        if(object === item.getAttribute("data-skillTitle")){
          item.classList.add("active")
        } else{
          item.classList.remove("active")
        }
    })
      }
  })
  
  softBtn.forEach((softButton)=>{
    softButton.addEventListener("click", (event)=>{
      if(event.target.closest("div").classList.contains("soft") &&
        !event.target.closest("div").classList.contains("active")){
        softBox.querySelector(".soft-box .active").classList.add("outer-shadow")
        softBox.querySelector(".soft-box .active").classList.remove("inner-shadow","active")
        event.target.closest("div").classList.remove("outer-shadow")
        event.target.closest("div").classList.add("inner-shadow","active")

        const object = event.target.closest("div").getAttribute("data-skillTitle")
        //console.log(object)
        softText.forEach((item)=>{
          //console.log(item)
          if(object === item.getAttribute("data-skillTitle")){
            console.log(item)
            item.classList.add("active")
          } else{
            item.classList.remove("active")
        } 
      })
      }
      
    })
  })
})();
(() => {
    const aboutSection = document.querySelector(".about-section");
    const tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener('click', (event)=>{
        if(event.target.classList.contains("tab-item") && 
          !event.target.classList.contains("active")){
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
            event.target.classList.add("outer-shadow","active");
            
            const object = event.target.getAttribute("data-target");
            //console.log(object)
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            aboutSection.querySelector(object).classList.add("active");

          }
    })
})();

function bodyScrollingToggle() {
  document.body.classList.toggle("hidden-scrolling");
}

/*------------ portfolio filter and popup  ------------*/
(function(){
  const filterContainer = document.querySelector(".portfolio-filter"),
        portfolioItemsContainer = document.querySelector(".portfolio-items"),
        portfolioItems = document.querySelectorAll(".portfolio-item"),
  //console.log(filterContainer)
  //console.log(portfolioItemsContainer)
  //console.log(portfolioItems)
        popup = document.querySelector(".portfolio-popup"),
        prevBtn = popup.querySelector(".pp-prev"),
        nextBtn = popup.querySelector(".pp-next"),
        closeBtn = popup.querySelector(".pp-close"),

        projectDetailsContainer = popup.querySelector(".pp-details"),
        projectDetailsBtn = popup.querySelector(".pp-project-details-btn");

  let itemIndex, slideIndex, screenshots;

  /* filter portfolio items */
  filterContainer.addEventListener("click", (event) => {
    if(event.target.classList.contains("filter-item") &&
      !event.target.classList.contains("active")){
        //console.log("true")
        filterContainer.querySelector(".active").classList.remove("outer-shadow","active");
        event.target.classList.add("active","outer-shadow")
        
        const object = event.target.getAttribute("data-target")
        //console.log(object)
        portfolioItems.forEach((item) => {
        //console.log(item)
          if(object === item.getAttribute("data-category") || object === "all"){
            item.classList.remove("hide");
            item.classList.add("show");
          }
          else{
            item.classList.remove("show");
            item.classList.add("hide");
          }
        })
      } else {
        //console.log("false")
        
      }
      //console.log(event.target)
  })

  portfolioItemsContainer.addEventListener("click", (event) => {
    //console.log(event.target.closest(".portfolio-item-inner"))
    if(event.target.closest(".portfolio-item-inner")){
     
      const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;

  //get the portfolioItem index
      itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
      //console.log(itemIndex)
      screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots")
      //console.log(screenshots)

  //convert screenshots into array
      screenshots = screenshots.split(",");
      //console.log(screenshots) data-screenshots的png最後一張不要有逗號否則在這裡分割會多一個空白頁
      if(screenshots.length === 1){
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
      } else{
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
      }
      slideIndex = 0;
      popupToggle();
      popupSlideshow();
      popupDetails()
    }  
  })
  closeBtn.addEventListener("click", () =>{
    popupToggle()
    if(projectDetailsContainer.classList.contains("active")){
      popupDetailsToggle
    }
  }) 
  function popupToggle(){
    popup.classList.toggle("open");
    bodyScrollingToggle()
  }
  function popupSlideshow(){
    const imgSrc = screenshots[slideIndex];
    const popupImg = popup.querySelector(".pp-img");
  //activate loader until the popupImg loaded
    popup.querySelector(".pp-loader").classList.add("active");

    popupImg.src = imgSrc
    popupImg.onload = () => {
      popup.querySelector(".pp-loader").classList.remove("active");
    
    }
//圖片下的 1 of 4
    popup.querySelector(".pp-counter").innerHTML = (slideIndex+1) + " of " + screenshots.length;
  }

  nextBtn.addEventListener("click", () => {
    if(slideIndex === screenshots.length-1){
      slideIndex = 0; //只有在最後一頁會相同 於是回到 陣列0第1頁
    } else{
      slideIndex++;
    }
    popupSlideshow();
    console.log("slideIndex" + slideIndex)
  })

  prevBtn.addEventListener("click", () => {
    if(slideIndex === 0){
      slideIndex = screenshots.length-1; //第1頁完全等於陣列0 click觸發後 到頁長度數字-1陣列最後1個
    } else{
      slideIndex--;
    }
    popupSlideshow();
    //console.log("slideIndex" + slideIndex)
  })

  //利用function 抓取相應文字內容
  function popupDetails(){
    //沒有解說細節的情況
    /*if(!portfolioItems[itemIndex].querySelector(".portfolio-item-details")){
      projectDetailsBtn.style.display = "none";  
      return;
    }
    projectDetailsBtn.style.display = "block"; */
    
    const details = portfolioItems[itemIndex].querySelector(".portfolio-item-details").innerHTML;
    //console.log(details)
    popup.querySelector(".pp-project-details").innerHTML = details;

    const title = portfolioItems[itemIndex].querySelector(".portfolio-item-title").innerHTML;
    //console.log(title)
    popup.querySelector(".pp-title h2").innerHTML = title;

    const category = portfolioItems[itemIndex].getAttribute("data-category");
    popup.querySelector(".pp-project-category").innerHTML = category.split("-").join(" ");
  }

  projectDetailsBtn.addEventListener("click", () => {
    popupDetailsToggle();
  })

  function popupDetailsToggle(){
    //console.log("布榖豬喜歡草莓鮮奶茶")
    if(projectDetailsContainer.classList.contains("active")){
      //console.log("true")
      projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
      projectDetailsBtn.querySelector("i").classList.add("fa-plus");
      projectDetailsContainer.classList.remove("active");
      projectDetailsContainer.style.maxHeight = "0" + "px";
    } else{
      //console.log("false")
      projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
      projectDetailsBtn.querySelector("i").classList.add("fa-minus");
      projectDetailsContainer.classList.add("active");
      projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + "px";
     // popup.scrollTo(0,projectDetailsContainer.offsetTop);
    }
  }
})();

