function medidas(){
    const contador1=document.getElementById('contador1');
    let valor1=0;
    //setInterval ele executa determinado intervalo e tempo
    let tempo1=setInterval(()=>{
        valor1 +=1;
        contador1.innerHTML=`+${valor1}`;
        if(valor1==400){
            //limpa o intervalo de tempo
            clearInterval(tempo1);
        }
    })

    const contador2=document.getElementById('contador2');
    let valor2=0;
    let tempo2=setInterval(()=>{
        valor2 +=1;
        contador2.innerHTML=`+${valor2}`;
        if(valor2==100){
            clearInterval(tempo2);
        }
    })
    
    const contador3=document.getElementById('contador3');
    let valor3=0;
    let tempo3=setInterval(()=>{
        valor3 +=1;
        contador3.innerHTML=`+${valor3}`;
        if(valor3==900){
            clearInterval(tempo3);
        }
    })
}

document.addEventListener("DOMContentLoaded", function(){
    // Declarando variaveis
    let email=document.querySelector('.info-email');
    let mensagem=document.querySelector('.mensagem');
    //Oculta a mensagem
    mensagem.classList.add('hidden')
    email.addEventListener('keyup', function(event){
        //Verifica se a tecla enter foi acionada
        if(event.keyCode == 13){
            //Impede o envio dos dados
            event.preventDefault();
            //Exibi a mensagem
            mensagem.classList.remove('hidden');
            //Oculta o imput email
            email.style.display='none';
            //Limpa o intervalo de tempo 
            email.value='';
            
        }
    })
})
