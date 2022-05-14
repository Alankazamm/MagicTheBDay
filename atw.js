let fs = false;

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


  //mostrando poderes
const powerButton = document.getElementById("show-power-btn");
powerButton.addEventListener('click', function(){
    const container = document.getElementById('container');
    container.classList.toggle('visible-now');
    if(container.className !=='visible-now'){
    const liClass = document.getElementsByClassName('power');
    for (var i = 0; i < liClass.length; i++) {
        liClass[i].classList.remove('visible-text');    
    }
}
});

//mostrando texto de cada poder
const toggleText = document.getElementsByClassName('toggle-btn');
for (var i = 0; i < toggleText.length; i++) {
    toggleText[i].addEventListener('click', function(){
        const parent = this.parentElement;
        parent.classList.toggle('visible-text');
    })
}





//contador de lealdade
const countDiv = document.getElementById('count');
let count = 23;
function renderCount(value,lastcount){
   
    count=lastcount+value;
    countDiv.setAttribute('placeholder',count);
}
renderCount(0,22);
const power1 = document.getElementById('power1-button');
const power2 = document.getElementById('power2-button');
const power3 = document.getElementById('power3-button');
const power4 = document.getElementById('power4-button');
power1.addEventListener('click', ()=>{
    renderCount(+2,count);
});
power2.addEventListener('click', ()=>{
    renderCount(0,count);
})
power3.addEventListener('click', ()=>{
    renderCount(-1,count);
})
power4.addEventListener('click', ()=>{
    renderCount(-22,count);
})

//editando valor
countDiv.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        if(isNaN(countDiv.value) === false ){
            count = parseInt(countDiv.value);
            renderCount(0,count);
            countDiv.value ='';
        }
    }
});




  if(screen.orientation.type == 'landscape-primary'){
    document.getElementById('atila-img').style.cssText = "transform: rotate(-90deg);transform-origin: left top;width: 100vh;height: 100vw;overflow-x: hidden;position:absolute;background-repeat: no-repeat;background-size: contain;top: 100%;left: 0;";
       
   }
   
    screen.orientation.addEventListener("change", function() {
               if(screen.orientation.type == 'landscape-primary'){
                   
                  document.getElementById('atila-img').style.cssText = "transform: rotate(-90deg);transform-origin: left top;width: 100vh;height: 100vw;overflow-x: hidden;position:absolute;background-repeat: no-repeat;background-size: contain;top: 100%;left: 0;";
                 
               
               }
                else if(screen.orientation.type  == 'portrait-primary'){
                   document.getElementById('atila-img').style.cssText ="";
                   
                 
                }
                else if(screen.orientation.type  == 'portrait-secondary'){
                   document.getElementById('atila-img').style.cssText ="";
                  
                 
                }
               if(screen.orientation.type == 'landscape-secondary'){
                   
                   document.getElementById('atila-img').style.cssText = "transform: rotate(-90deg);transform-origin: left top;width: 100vh;height: 100vw;overflow-x: hidden;position:absolute;background-repeat: no-repeat;background-size: contain;top: 100%;left: 0;";
                   
                
                }
             }, false);
   
   
       
      
   
   
   
   
   