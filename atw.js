let fs = false;

window.addEventListener("orientationchange", function(event) {
    console.log("the orientation of the device is now " + event.target.screen.orientation.angle);
  });

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