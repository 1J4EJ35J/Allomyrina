//console.log('hi')
/*
window.addEventListener('scroll', function(){
    let value = window.scrollY
    console.log(value)
})
*/
/*------------ navigation menu ------------*/
(() => {
  const header = document.querySelector(".header"),
    hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = document.querySelector(".close-nav-menu");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 16) {
      header.classList.add("background");
      header.classList.add("outer-shadow");
    } else {
      header.classList.remove("background");
      header.classList.remove("outer-shadow");
    }
  });

  hamburgerBtn.addEventListener("click", showNavMenu);
  closeNavBtn.addEventListener("click", hideNavMenu);
  function showNavMenu() {
    navMenu.classList.toggle("open");
    bodyScrollingToggle();
  }
  function hideNavMenu() {
    navMenu.classList.remove("open");
    bodyScrollingToggle();
  }

  //attach an event handler to document
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("link-item")) {
      //console.log(event.target.hash) hash可以獲得id ""裡面的值
      if (event.target.hash !== "") {
        event.preventDefault();
        const hash = event.target.hash;
        //document.querySelector(".section.active").classList.add("hide")
        //document.querySelector(".section.active").classList.remove("active")
        //document.querySelector(hash).classList.add("active")
        //document.querySelector(hash).classList.remove("hide")
        navMenu
          .querySelector(".active")
          .classList.add("outer-shadow", "hover-in-shadow");
        navMenu
          .querySelector(".active")
          .classList.remove("active", "inner-shadow");

        if (navMenu.classList.contains("open")) {
          event.target.classList.add("active", "inner-shadow");
          event.target.classList.remove("outer-shadow", "hover-in-shadow");
          hideNavMenu();
        } else {
          let navItems = navMenu.querySelectorAll(".link-item");
          navItems.forEach((item) => {
            if (hash === item.hash) {
              item.classList.add("active", "inner-shadow");
              item.target.classList.remove("outer-shadow", "hover-in-shadow");
            }
          });
          //fadeOutEffect()
        }
        window.location.hash = hash;
      }
    }
  });

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
(() => {
  const codeBox = document.querySelector(".code-box");
  const codeBtn = document.querySelectorAll(".code-btn");
  const codeText = document.querySelectorAll(".code-text");

  codeBox.addEventListener("click", (event) => {
    if (
      !event.target.classList.contains("active") &&
      event.target.classList.contains("code")
    ) {
      codeBox.querySelector(".code-box .active").classList.add("outer-shadow");
      codeBox
        .querySelector(".code-box .active")
        .classList.remove("inner-shadow", "active");
      event.target.classList.add("inner-shadow", "active");
      event.target.classList.remove("outer-shadow");

      const object = event.target.getAttribute("data-skillTitle");
      //console.log(object)
      codeText.forEach((item) => {
        if (object === item.getAttribute("data-skillTitle")) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }
  });

  codeBtn.forEach((codeButton) => {
    codeButton.addEventListener("click", (event) => {
      //console.log(event.target.closest("div"))
      if (
        event.target.closest("div").classList.contains("code") &&
        !event.target.closest("div").classList.contains("active")
      ) {
        document.querySelector(".skill.active").classList.add("outer-shadow");
        document
          .querySelector(".skill.active")
          .classList.remove("inner-shadow", "active");
        event.target.closest("div").classList.add("inner-shadow", "active");
        event.target.closest("div").classList.remove("outer-shadow");

        const object = event.target
          .closest("div")
          .getAttribute("data-skillTitle");
        //console.log(object)
        codeText.forEach((item) => {
          if (object === item.getAttribute("data-skillTitle")) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    });
  });

  const softBox = document.querySelector(".soft-box");
  const softBtn = document.querySelectorAll(".soft-btn");
  const softText = document.querySelectorAll(".soft-text");

  softBox.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("soft") &&
      !event.target.classList.contains("active")
    ) {
      softBox.querySelector(".soft-box .active").classList.add("outer-shadow");
      softBox
        .querySelector(".soft-box .active")
        .classList.remove("inner-shadow", "active");
      event.target.classList.add("inner-shadow", "active");
      event.target.classList.remove("outer-shadow");

      const object = event.target.getAttribute("data-skillTitle");
      softText.forEach((item) => {
        if (object === item.getAttribute("data-skillTitle")) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }
  });

  softBtn.forEach((softButton) => {
    softButton.addEventListener("click", (event) => {
      if (
        event.target.closest("div").classList.contains("soft") &&
        !event.target.closest("div").classList.contains("active")
      ) {
        softBox
          .querySelector(".soft-box .active")
          .classList.add("outer-shadow");
        softBox
          .querySelector(".soft-box .active")
          .classList.remove("inner-shadow", "active");
        event.target.closest("div").classList.remove("outer-shadow");
        event.target.closest("div").classList.add("inner-shadow", "active");

        const object = event.target
          .closest("div")
          .getAttribute("data-skillTitle");
        //console.log(object)
        softText.forEach((item) => {
          //console.log(item)
          if (object === item.getAttribute("data-skillTitle")) {
            //console.log(item);
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    });
  });
})();
(() => {
  const aboutSection = document.querySelector(".about-section");
  const tabsContainer = document.querySelector(".about-tabs");

  tabsContainer.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("tab-item") &&
      !event.target.classList.contains("active")
    ) {
      tabsContainer
        .querySelector(".active")
        .classList.remove("outer-shadow", "active");
      event.target.classList.add("outer-shadow", "active");

      const object = event.target.getAttribute("data-target");
      //console.log(object)
      aboutSection
        .querySelector(".tab-content.active")
        .classList.remove("active");
      aboutSection.querySelector(object).classList.add("active");
    }
  });
})();

function bodyScrollingToggle() {
  document.body.classList.toggle("hidden-scrolling");
}

/*------------ portfolio filter and popup  ------------*/
(function () {
  const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item");
    //console.log(filterContainer)
    //console.log(portfolioItemsContainer)
    //console.log(portfolioItems)
    
    
  //let itemIndex, slideIndex, screenshots;

  /* filter portfolio items */
  filterContainer.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("filter-item") &&
      !event.target.classList.contains("active")
    ) {
      //console.log("true")
      filterContainer
        .querySelector(".active")
        .classList.remove("outer-shadow", "active");
      event.target.classList.add("active", "outer-shadow");

      const object = event.target.getAttribute("data-target");
      //console.log(object)
      portfolioItems.forEach((item) => {
        //console.log(item)
        if (object === item.getAttribute("data-category") || object === "all") {
          item.classList.remove("hide");
          item.classList.add("show");
        } else {
          item.classList.remove("show");
          item.classList.add("hide");
        }
      });
    } else {
      //console.log("false")
    }
    //console.log(event.target)
  });

  const portfolioLink = document.querySelectorAll(".portfolio-item-inner img"),
        popup = document.querySelector(".portfolio-popup"),
        detailsContent = document.querySelector(".pp-details"),
        closeBtn = document.querySelector(".pp-close"),
        ppBtnNav = document.querySelector(".pp-nav"),
        ppFrontPage = document.querySelector(".pp-frontpage"),
        detailsBtn = document.querySelector(".pp-project-details-btn");
  
  //closeBtn detailsBtn 若是包在forEach裡面，因為每一次生成不同，會導致按鈕呼叫有問題
  closeBtn.addEventListener("click", ()=>{
    popup.classList.toggle("open")
    bodyScrollingToggle()
    if(detailsContent.classList.contains("active")){
      detailsToggle()
    }
    if(ppBtnNav.querySelector("i").classList.contains("fa-minus")){
      ppBtnNav.querySelector("i").classList.remove("fa-minus");
      ppBtnNav.querySelector("i").classList.add("fa-plus");
      document.querySelector(".pp-moon").classList.remove("active");
      document.querySelector(".pp-srolltop").classList.remove("active");
      ppFrontPage.classList.remove("active");
    }   
  })
  detailsBtn.addEventListener("click",() => {
    detailsToggle()
  })

  function detailsToggle(){
    if(detailsContent.classList.contains("active")){
      //console.log("true")
      detailsBtn.querySelector("i").classList.remove("fa-minus");
      detailsBtn.querySelector("i").classList.add("fa-plus");
      detailsContent.classList.remove("active");
      detailsContent.style.maxHeight = "0" + "px";
    } else{
      //console.log("false")
      detailsBtn.querySelector("i").classList.remove("fa-plus");
      detailsBtn.querySelector("i").classList.add("fa-minus");
      detailsContent.classList.add("active");
      detailsContent.style.maxHeight = "fit-content";
     // popup.scrollTo(0,projectDetailsContainer.offsetTop);
    }
  }

  ppBtnNav.addEventListener("click", ()=>{
    document.querySelector(".pp-moon").classList.toggle("active");
    document.querySelector(".pp-srolltop").classList.toggle("active");
    ppFrontPage.classList.toggle("active");
    if(ppBtnNav.querySelector("i").classList.contains("fa-plus")){
      ppBtnNav.querySelector("i").classList.remove("fa-plus");
      ppBtnNav.querySelector("i").classList.add("fa-minus");
    }
    else{
      ppBtnNav.querySelector("i").classList.add("fa-plus");
      ppBtnNav.querySelector("i").classList.remove("fa-minus");
    }
  })
  
  ppFrontPage.addEventListener("click",()=>{
    popup.classList.toggle("open")
    bodyScrollingToggle()
    if(detailsContent.classList.contains("active")){
      detailsToggle()
    }
    
    ppBtnNav.querySelector("i").classList.remove("fa-minus");
    ppBtnNav.querySelector("i").classList.add("fa-plus");
    document.querySelector(".pp-moon").classList.toggle("active");
    document.querySelector(".pp-srolltop").classList.toggle("active");
    ppFrontPage.classList.toggle("active");
  })

  portfolioLink.forEach((pageShow) =>{
    pageShow.addEventListener("click", (item)=>{
      popup.classList.toggle("open");
      bodyScrollingToggle()
      window.addEventListener("load", ()=>{
        popup.querySelector(".pp-loader").classList.remove("active");
      });     

      let imgData = item.target.getAttribute("data-screenshot"),
          ppBox = popup.querySelectorAll(".pp-box"),
          dataBox = popup.querySelectorAll(".data-box");

      ppBox.forEach((taskPpBox)=>{
        let object01 = taskPpBox.getAttribute("data-page");
        if(imgData === object01){
          //console.log(object01)
          //console.log(imgData)
          taskPpBox.classList.add("show")
        }else{
          taskPpBox.classList.remove("show")
        }
        dataBox.forEach((taskDataBox)=>{
          let object02 = taskDataBox.getAttribute("data-details");
          if(imgData === object02){
            //console.log(object02)
            taskDataBox.classList.add("show")
          }else{
            taskDataBox.classList.remove("show")
          }
        })
      })
    })
  })

})();
