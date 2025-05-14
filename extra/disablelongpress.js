
//IIFE Immediately Invoked Function Expression
//(function(){})()

(()=>{let body = document.body;
    //console.log(body);
    
    body.addEventListener('contextmenu', (e)=>{
      e.preventDefault();
    });
    
    window.oncontextmenu = function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    };;
})()