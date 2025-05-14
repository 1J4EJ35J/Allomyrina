//console.log("草莓鮮奶茶喜歡十月海風");
(function(){
    let moreInfoBtn = document.querySelector('.more-info-btn');
    let copyrightMoreinfo = document.querySelector('.copyright-moreinfo');
    let moreInfoClose = document.querySelector('.moreinfo-closebtn')

    moreInfoBtn.addEventListener('click', ()=>{
        copyrightMoreinfo.classList.add('active');
    })
    moreInfoClose.addEventListener('click',()=>{
        copyrightMoreinfo.classList.remove('active');
    })

})();