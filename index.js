let getMenu = document.getElementsByClassName('menubar');

getMenu[0].addEventListener('click',function(){
    let menuItems = document.getElementsByTagName('ul')[0];
    menuItems.classList.toggle('click');
    
    for(var i=0;i<5;i++){
        var mass =  document.getElementsByTagName("li")[i].addEventListener("click",function(){
        
          document.getElementsByTagName("ul")[0].classList.remove("click");
       
      });
  }  
})