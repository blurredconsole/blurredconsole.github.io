
/*var str = "We are developers wwilling to change the world."
var splitstr = str.split('');

timeInterval = 150;

i = 0;

function type(){
  if(i<splitstr.length){
    $('.blurred-msg').append(splitstr[i]);
    i++;
    setTimeout(function () {
      type();
    }, timeInterval);
  }else{
    
  }
}

type();
*/

function displayMenu() {
    let menu = document.querySelector(".blurred-aside"),
        btnShowMenu = document.querySelector(".blurred-display");
    menu.classList.toggle("displayMenu");
    if (btnShowMenu.innerHTML == "<i class=\"bi-list\"></i>")
        btnShowMenu.innerHTML = "<i class=\"bi-x-lg\"></i>";
    else
        btnShowMenu.innerHTML = "<i class=\"bi-list\"></i>";
}

function blurredconsole() {
  window.alert("404! This page is still under constructions.");
}