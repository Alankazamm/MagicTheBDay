//if(window.orientation == 0){
   // document.getElementById('bg-div').style.cssText = "transform: rotate(-90deg);transform-origin: left top;width: 100vh;height: 100vw;overflow-x: hidden;position:absolute;background-repeat: no-repeat;background-size: cover;top: 100%;left: 0;";
    
 //}

 screen.orientation.addEventListener("change", function() {
            if(screen.orientation.type == 'landscape-primary'){
                document.getElementById('bg-div').style.backgroundColor="blue";
               // console.log(window.orientation);
               //document.getElementById('bg-div').style.cssText = "transform: rotate(-90deg);transform-origin: left top;width: 100vh;height: 100vw;overflow-x: hidden;position:absolute;background-repeat: no-repeat;background-size: cover;top: 100%;left: 0;";
              // document.getElementById('bg-div').style.backgroundImage = "url('./imgs/img-"+idSet+".jpg')";
            }
             else if(screen.orientation.type  == 'portrait-primary'){
                console.log(screen.orientation)
                   document.getElementById('bg-div').style.backgroundColor="red";
                            
               
                document.getElementById('bg-div').style.backgroundImage = "url('./imgs/img-"+idSet+".jpg')";
             }
             else {
                document.getElementById('bg-div').style.backgroundColor="yellow";
                //document.getElementById('bg-div').style.cssText = "transform: rotate(-90deg);transform-origin: left top;width: 100vh;height: 100vw;overflow-x: hidden;position:absolute;background-repeat: no-repeat;background-size: cover;top: 100%;left: 0;";
                //document.getElementById('bg-div').style.backgroundImage = "url('./imgs/img-"+idSet+".jpg')";
             }
          }, false);


    
   





let textArray = [
    "banana", "maçaResize the background image to cover the entire container *Resize the background image to cover the entire container *Resize the background image to cover the entire container *Resize the background image to cover the entire container *", "cacau", "gato"," cachorro"
];

function randomizeId(){
        
        min = Math.ceil(1);
        max = Math.floor(5);
        idSet = Math.floor(Math.random() * (max - min)) + min;
        
        render(idSet);
      
     
}
const btn = document.getElementById('planeswalk-btn');
btn.onclick = randomizeId;

function render(idSet){
    if(document.body.dataset.setedId == idSet){
        randomizeId();
    }
    else{
        
        document.getElementById('plane-desc').innerHTML='';
        document.getElementById('bg-div').style.backgroundImage = "url('./imgs/img-"+idSet+".jpg')";
 
    document.body.dataset.setedId = idSet;
    const description = document.createElement('h2');
    description.innerText = textArray[idSet-1];
    document.getElementById('plane-desc').appendChild(description);
   
    }
}
let fs = false
var goFS = document.getElementById('goFS');
  goFS.addEventListener(
    'click',
    function () {
        if(fs === false){
            document.getElementById('fs-check').requestFullscreen();
            
        window.addEventListener("orientationchange", function() {
            if(window.orientation == 0){
                console.log(window.orientation);
               document.getElementById('bg-div').style.cssText = "transform: rotate(-90deg);transform-origin: left top;width: 100vh;height: 100vw;overflow-x: hidden;position:absolute;background-repeat: no-repeat;background-size: cover;top: 100%;left: 0;";
               document.getElementById('bg-div').style.backgroundImage = "url('./imgs/img-"+idSet+".jpg')";
            }
            else  if((window.orientation == 90)||(window.orientation == 180)){
                console.log(window.orientation);
                document.getElementById('bg-div').style.cssText ="";
                document.getElementById('bg-div').style.backgroundImage = "url('./imgs/img-"+idSet+".jpg')";
             }
             else {
                 console.log(window.orientation);
                document.getElementById('bg-div').style.cssText = "transform: rotate(-90deg);transform-origin: left top;width: 100vh;height: 100vw;overflow-x: hidden;position:absolute;background-repeat: no-repeat;background-size: cover;top: 100%;left: 0;";
                document.getElementById('bg-div').style.backgroundImage = "url('./imgs/img-"+idSet+".jpg')";
             }
          }, false);
           
            fs = true;
        }
        if(fs === true){
            document.exitFullscreen();
            fs = false;
        }
    }
  );

