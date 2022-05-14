
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

let planeDesc = [
    {nome:"'A' de Átila" ,ruleText:"No início da manutenção de cada jogador, aquele jogador revela cards do topo do próprio grimório até revelar um card cujo nome comece com a letra 'A' em seguida aquele jogador embaralha o restante das cartas no fundo do próprio grimório.",caos:"Até o próximo turno do jogador que rolou caos, só poderão ser conjurados cards começados pela letra 'A', só poderão atacar e bloquear, criaturas com nome começados pela letra 'A'" },
    {nome:"'T' de áTila" ,ruleText:"No início da manutenção de cada jogador, aquele jogador tem 30 segundos para falar o nome de um filme, série ou desenho que comece com a letra 'T', o jogador que não conseguir deve sacrificar um terreno." ,caos: "O jogador que rolou caos pode pedir um terreno para outro jogador ou doar um terreno que possua em campo para outro jogador(até o final do jogo ou não se o outro esquecer né kk)."},
    {nome:"'I' de átIla" ,ruleText:"Enquanto esse plano estiver em jogo, com excessão da leitura desse texto, é proibido pronunciar a letra 'I', o jogador que fizer isso perderá 1 ponto de vida para cada vez que o fizer.",caos: "Caos: O jogador que rolar caos tem 10 segundos para pronunciar o maior número de palavras começadas com 'I' que puder (ele não perderá vida durante esse tempo), após isso, aquele jogador ganha 1 ponto de vida para cada palavra pronunciada"},
    {nome:"'L' de átiLa" ,ruleText:" No início da manutenção de cada jogador, coloque um marcador nesse plano, quando sair desse plano, destrua todas as permanentes que não sejam terrenos com custo de mana menor que o número de marcadores nesse plano." ,caos:"Caos: Coloque um marcador nesse plano." },
    {nome:"'A' de Airto" ,ruleText:"Cada jogador sacrifica todas as permanentes que terminem com a letra 'A', em seguida, transplane." ,caos:""},
    {nome:"Átilaverso: Piogue Li" ,ruleText:"No início da manutenção de cada jogador, aquele jogador sacrifica uma criatura que não seja seu comandante, em seguida ele pode passar a mão, digo, roubar uma criatura, que não seja comandante, do próximo jogador depois dele.",caos:"Caos: O jogador que rolar caos perderá vida igual ao poder somado de todas as criaturas que ele controle que foram roubadas." },
    {nome:"Átilaverso: Jackschon" ,ruleText:"Criaturas dos tipo guerreiro, lutador, monge ou astro das telinhas recebem +4/+4, buffs, debuffs ou spells que causem dano tem efeito dobrados.",caos: "Caos: O jogadô que rolar caos tem que falar seu filme favorito desse grande ator, senão automágicamente perde o jogo."},
    {nome:"Átilaverso: Kim-jong-Três" ,ruleText:"Eita, parece que você apertou sem querer o botão de ativar um míssil nuclear não é mesmo?! Todos os jogadores sacrificam todas as permanentes em campo. Transplane." ,caos:""},
    {nome:"Átilaverso: Fantochito",ruleText:"No final da manutenção do turno de cada jogador, ele passa sua mão(hihi) para o jogador anterior.",caos:"Caos: Após o seu turno, você controla o turno do próximo jogador."},
    {nome:"Átilaverso: Jimin do BTS",ruleText:"No início da manutenção de cada jogador, aquele jogador cria três fichas de Fã de K-pop",caos:"Caos: Crie uma ficha de Jimin do BTS"},
    {nome:"AA: Aposentados Anônimos",ruleText:"O poder e a resistência de criaturas que bloqueiam ou são bloqueadas é igual à data de impressão da carta.",caos:"Caos: Destrua todas as permanentes, que não sejam terrenos, com data de impressão maior que 2019"},
    {nome:"Ace Ventura-land",ruleText:"Cada jogador pode imitar entre um dos seguintes animais, durante qualquer turno, se a maioria dos outros aprovarem, as criaturas que o jogador imitou recebem, até o final do turno: Galinha: Voar, Macaco: Ímpeto, Bêbado: Atropelar, Boto-cor-de-rosa: Ameaçar(de extinção hihi), Batman: vinculo com a Vida.",caos:"Caos: O jogador alvo é obrigado a imitar um dos animais descritos."},
    {nome:"Fisco",ruleText:"Exile todas as permanentes, incluindo terrenos, com custo não de mana, de dinheiro mesmo, maior que 10 reais, cartas que custam mais que 10 reais não podem ser conjuradas, cada jogador pode pagar 10 reais e rolar um dado de Atilachase",caos:"Caos: Role um dado Atilachase novamente"},
    {nome:"Vorts",ruleText:"Inverte a ordem dos turnos do mesão, transplane",caos:""},
    {nome:"Japão",ruleText:"Como sempre, um terremoto, role todoso os dados de marcadores em todas as permanentes em campo, o valor de cada marcador será o de cada rolagem, transplane.",caos:""},
    {nome:"Estilo e proteção",ruleText:"Cada jogador tem proteção à mágicas da cor de sua roupa, jogadores sem camisa tem proteção à todas as cores",caos:"Caos: Destrua uma permanente da cor da sua roupa."},
    {nome:"Terra da baguncinha",ruleText:"Sempre que um jogador conjura uma mágica que dê alvo em um único jogador, todos rolam um d6, mude o alvo da mágica para o jogador com o menor resultado.",caos:"Caos: Role um d20, se critar, você ganha o jogo."},
    {nome:"Bagualis Totalis",ruleText:"Durante a manutenção de cada jogador, aquele jogador cria fichas de cavalo 5/5 igaul à colocação que ficou na partida anterior.",caos:"Caos: Os baguais que vocÇê controla ganham atropelar até o final do turno."},
    {nome:"Irlanda",ruleText:"Sempre que você rolar um atilachase, se o resultado for: 2-Descarte 2 cartas, 3-Compre 3 cartas, 4-Sacrifique 4 permanentes, 5-Exile 5 permanentes alvo, 6-Compre 3 cartas, Exile 5 permanentes alvo, você ganha 6 de vida, transplane.",caos:"Caos: Você perde 10 de vida."},
    {nome:"Amigo da onça",ruleText:"Cada jogador escrevem em um papel, e não mostra pa ninguém, o nome de um jogador, quando transplanar, todos revelam o nome que escreveram, o jogador com nome mais escrito perde 10 pontos de vida, sacrifica 10 permanentes e descarta sua mão.",caos:"Caos: Todos os jogadores revelam o nome que escreveram, todos os jogadores podem escrever novamente um nome."},
    {nome:"Otakuzisse",ruleText:"Semrpe que um jogador conjurar uma mágica, todos os jogadores devem falar alguma expressão otaku(como: 'Kawaii','Oni-san','Yamete kudasai',etc), o jogador que não o fizer descarta uma carta",caos:"Caos: O jogador que tirar caos deve dizer a seguinte frase imitando uma garota fofinha:'Ai senpai, pare, isso machuca', sempre que levar dano até seu próximo turno, se não fizer isso, ele leva o dobro do dano."},
    {nome:"Mah Oe",ruleText:"Todos os jogadores são obrigados a responderem qualquer pergunta com sim ou não, sem mentir.",caos:"Caos: O jogador que tirar caos revela sua mão, se ele for cotoco, ignore esse efeito."},
    {nome:"Troca Troca",ruleText:"Todos os efeitos de 'quando essa permanente entrar em campo' são trocados para 'quando essa permanente sair de campo' e vice-versa.",caos:"Caos: Exile uma permanente que você controla, retorne-a no final do turno."},
    {nome:"Vivogellion",ruleText:"Jogadores com menos de 1 ponto de vida não perdem o jogo.",caos:"Caos: Um jogador que já está morto controla seu próximo turno."},
    {nome:"RonalTatooine",ruleText:"Os jogadores não podem conjurar mágicas de criatura em horários com o minuto par. Os jogadores não podem conjurar mágicas de não criaturas em horários com minutos ímpar.",caos:"Caos: Retorne todas as permanentes para o controle de seus donos."},
    {nome:"Jogo de cumadre",ruleText:"Todas as criaturas possuem resistência à magia. Todas as mágicas que não sejam de criaturas não podem ser anuladas.",caos:"Caos: Todos os jogadores compram uma carta."},
    {nome:"Agiotagem",ruleText:"Qualquer jogador pode pedir um terreno emprestado até o final de seu turno(só pode fazer isso uma vez por turno). No turno do jogador que emprestou, aquele jogador ganha 2 pontos de vida e compra 1 carta.",caos:"OCaos: s jogadores que pediram emprestado terrenos no tempo que esse plano esteve ativo perdem 4 pontos de vida e tem seus joelhos quebrados."},
    

]



function randomizeId(){
        
        min = Math.ceil(1);
        max = Math.floor(planeDesc.length);
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
    const title = document.createElement('h3');
    title.innerText=planeDesc[idSet-1].nome;
    title.setAttribute('id','nome');
    document.getElementById('plane-desc').appendChild(title);
    const description = document.createElement('h2');
    description.innerText = planeDesc[idSet-1].ruleText;
    document.getElementById('plane-desc').appendChild(description);
    const chaos = document.createElement('h4');
    if(planeDesc[idSet-1].caos!==''){
        chaos.innerText = planeDesc[idSet-1].caos;
        

    }
    
    chaos.setAttribute('id','caos');
    document.getElementById('plane-desc').appendChild(chaos);
   
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

