let hamburgerBtn = document.getElementById("hamburger-btn");
let menu = document.getElementById("menu");



hamburgerBtn.addEventListener("click", function() {
  menu.classList.toggle("open");
  
});


    
        let mybutton = document.getElementById("btn");
        
        
       window.onscroll = function() {scrollFunction()};
        
        
        
        function scrollFunction() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            mybutton.style.display = "block";
            } else {
            mybutton.style.display = "none";
        }
    }
        
        
      function topFunction(){
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
      }
