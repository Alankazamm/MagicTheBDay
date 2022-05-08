let fs = false;
const mediaQuery = window.matchMedia("(orientation: portrait)");





if (mediaQuery.matches) {
    document.getElementById('container').style.cssText = 
    "transform: rotate(-90deg);transform-origin: left top;width: 100vh;height: 100vw;overflow-x: hidden;position:absolute;background-repeat: no-repeat;background-size: cover; top: 100%;left: 0;";
 
}
  else{
    document.getElementById('container').style.cssText = 
    "";
  
}


  


var goFS = document.getElementById('goFS');
  goFS.addEventListener(
    'click',
    function () {
        if(fs === false){
            document.getElementById('container').requestFullscreen();
           
            fs = true;
        }
        if(fs === true){
            document.exitFullscreen();
            fs = false;
        }
    }
  );