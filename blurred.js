
/**
 * @author Aman Tairo.
 * @package Blurred Console
 * @version 0.0.1
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
function displayMenuDown() {
  let menu = document.querySelector(".aside-main"),
      btnShowMenu = document.querySelector(".blurred-menu");
  menu.classList.toggle("displayMenuDown");
  if (btnShowMenu.innerHTML == "<i class=\"bi-list\"></i>")
      btnShowMenu.innerHTML = "<i class=\"bi-x-lg\"></i>";
  else
      btnShowMenu.innerHTML = "<i class=\"bi-list\"></i>";
}

function blurredconsole() {
  window.alert("404! This page is still under constructions.");
}

function consoleConfirm() {
  let name = document.getElementById("console-confirm");
  window.confirm("Do you really want to visit " + name.innerHTML + "'s page?");
}



function blurred() {
  let window = document.getElementById("console");
   
}

var str = "We are developers willing to change the world."
var splitstr = str.split(''), timeInterval = 100, i = 0;
let msg = document.getElementById('console-msg');

function type(){
  if(i<splitstr.length){
    msg.append(splitstr[i]);
    i++;
    setTimeout(function () {
      type();
    }, timeInterval);
  }else{
    
  }
}

type();


/*    ################################################################################################    */


  var today = new Date();
  let controller = 0, lim = 20;
  var date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  var yr = today.getFullYear(), mon = today.getMonth() + 1, day = today.getDate(), hr = today.getHours(), min = today.getMinutes(), sec = today.getSeconds();
    //controller = min.toString();
  let consoleTime = day.toString() + '/' + mon.toString() + '/' + yr.toString() + ' Time: ' + hr.toString() + ':' + min.toString() + ':' + sec.toString() + '.';
  let tairo = document.getElementById('console-time');
  if(controller < lim) {
      tairo.innerHTML = '<i>' + consoleTime + '</i>';
     // console.log(day.toString() + '/' + mon.toString() + '/' + yr.toString() + ' &nbsp;Time: ' + hr.toString() + ':' + min.toString() + ':' + sec.toString() + '.')
     if(controller == sec.toString()){
      console.log(tairo.innerHTML);
     
     } 
     
      controller += 1;


      delete tairo.innerHTML;
    } 
    


    
    //console.log(day.toString() + '/' + mon.toString() + '/' + yr.toString() + ' Time: ' + hr.toString() + ':' + min.toString() + '.');
  
  
  //console.log(day.toString() + '/' + mon.toString() + '/' + yr.toString() + ' Time: ' + hr.toString() + ':' + min.toString() + '.');
  