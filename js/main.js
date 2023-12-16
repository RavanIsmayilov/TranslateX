document.addEventListener("DOMContentLoaded", function () {
    var clickBtn = document.querySelector(".btn-right");
    var clickBtn2 = document.querySelector(".btn-left");
    var top = document.querySelector(".top");
  
function onClick(){
    top.style.transform = 'translateX(calc(350px - 50px))';
}

function onClick2(){
    top.style.transform = 'translateX(calc(-100% + 50px))'; 
}
clickBtn.addEventListener("click", onClick) 
clickBtn2.addEventListener("click", onClick2)
  });
  
