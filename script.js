
if(screen.orientation.type == 'portrait-primary'){
 document.getElementById('bg-div').style.cssText = "transform: rotate(-90deg);transform-origin: left top;width: 100vh;height: 100vw;overflow-x: hidden;position:absolute;background-repeat: no-repeat;background-size: cover;top: 100%;left: 0;";
    
}

 screen.orientation.addEventListener("change", function() {
            if(screen.orientation.type == 'portrait-primary'){
                
               document.getElementById('bg-div').style.cssText = "transform: rotate(-90deg);transform-origin: left top;width: 100vh;height: 100vw;overflow-x: hidden;position:absolute;background-repeat: no-repeat;background-size: cover;top: 100%;left: 0;";
               document.getElementById('bg-div').style.backgroundImage = "url('./imgs/img-"+idSet+".jpg')";
            
            }
             else if(screen.orientation.type  == 'landscape-primary'){
                document.getElementById('bg-div').style.cssText ="";
                document.getElementById('bg-div').style.backgroundImage = "url('./imgs/img-"+idSet+".jpg')";
              
             }
             else if(screen.orientation.type  == 'landscape-secondary'){
                document.getElementById('bg-div').style.cssText ="";
                document.getElementById('bg-div').style.backgroundImage = "url('./imgs/img-"+idSet+".jpg')";
              
             }
            if(screen.orientation.type == 'portrait-secondary'){
                
                document.getElementById('bg-div').style.cssText = "transform: rotate(-90deg);transform-origin: left top;width: 100vh;height: 100vw;overflow-x: hidden;position:absolute;background-repeat: no-repeat;background-size: cover;top: 100%;left: 0;";
                document.getElementById('bg-div').style.backgroundImage = "url('./imgs/img-"+idSet+".jpg')";
             
             }
          }, false);



let textArray = [
     "'A' de Átila: No início da manutenção de cada jogador, aquele jogador revela cards do top do próprio grimório até revelar um card cujo nome comece com a letra 'A' em seguida aquele jogador embaralha o restante das cartas no fundo do próprio grimório.",
     "'T' de áTila: No início da manutenção de cada jogador, aquele jogador tem 30 segundos para falar o nome de um filme, série ou desenho que comece com a letra 'T', o jogador que não conseguir deve sacrificar um terreno.",
     "'I' de átIla: Enquanto esse plano estiver em jogo, com excessão da leitura desse texto, é proibido pronunciar a letra 'I', o jogador que fizer isso perderá 1 ponto de vida para cada vez que o fizer.",
     "'L' de átiLa: No início da manutenção de cada jogador, coloque um marcador nesse plano, quando sair desse plano, destrua todas as permanentes que não sejam terrenos com custo de mana menor que o número de marcadores nesse plano.",
     "'A' de Airto: Cada jogador sacrifica todas as permanentes que terminem com a letra 'A', em seguida, transplane.",
     "Átilaverso: Piogue Li. No início da manutenção de cada jogador, aquele jogador sacrifica uma criatura que não seja seu comandante, em seguida ele pode passar a mão, digo, roubar uma criatura, que não seja comandante, do próximo jogador depois dele.",
     "Átilaverso: Jackschon. Criaturas dos tipo guerreiro, lutador, monge ou astro das telinhas recebem +4/+4, buffs, debuffs ou spells que causem dano tem efeito dobrados.",
     "Átilaverso: Kim-jong-Três. Eita, parece que você apertou sem querer o botão de ativar um míssil nuclear não é mesmo?! Todos os jogadores sacrificam todas as permanentes em campo. Transplane."

    ]

let caosArray = [
    " Caos: Até o próximo turno do jogador que rolou caos, só poderão ser conjurados cards começados pela letra 'A', só poderão atacar e bloquear, criaturas com nome começados pela letra 'A'",
    "Caos: O jogador que rolou caos pode pedir um terreno para outro jogador ou doar um terreno que possua em campo para outro jogador(até o final do jogo ou não se o outro esquecer né kk).",
    "Caos: O jogador que rolar caos tem 10 segundos para pronunciar o maior número de palavras começadas com 'I' que puder (ele não perderá vida durante esse tempo), após isso, aquele jogador ganha 1 ponto de vida para cada palavra pronunciada",
    "Caos: Coloque um marcador nesse plano.",
    "",
    "Caos: O jogador que rolar caos perderá vida igual ao poder somado de todas as criaturas que ele controle que foram roubadas.",
    "Caos: O jogadô que rolar caos tem que falar seu filme favorito desse grande ator, senão automágicamente perde o jogo.",
    ""
]

function randomizeId(){
        
        min = Math.ceil(1);
        max = Math.floor(textArray.length);
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
            
       
           
            fs = true;
        }
        if(fs === true){
            document.exitFullscreen();
            fs = false;
        }
    }
  );

