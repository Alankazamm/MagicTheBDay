
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
var goFS = document.getElementById('goFS');
  goFS.addEventListener(
    'click',
    function () {
        document.getElementById('bg-div').requestFullscreen();
    },
    false,
  );

