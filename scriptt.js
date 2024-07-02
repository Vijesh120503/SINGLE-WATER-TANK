var tapButton=document.getElementById('tap-button')
var pipeWater=document.querySelector('.water')
var tankwater=document.querySelector('.Water-1')
var Animating=false
var interval;


tapButton.addEventListener("click",function(){
    tapButton.classList.toggle('changer')

    if(pipeWater.style.display==="block") {
        pipeWater.style.display="none"
    }
    else{
        pipeWater.style.display="block"
    }

    if(!Animating){
        var currentHeight=parseFloat(getComputedStyle(tankwater).height)
        interval=setInterval(function(){
            currentHeight -= 1;
            tankwater.style.height=currentHeight+'px'
            if(currentHeight<=0){
                clearInterval(interval)
                pipeWater.style.display="none"
                tapButton.style.backgroundColor='red'
                Animating=false;
                tankwater.style.display="none"
                reduceWater()
            }
        },20);     
    }

    function reduceWater(){
        var pipe=document.querySelector('.pipe')
        pipe.style.width = "0"; 
        pipe.style.transition="10s"

    }
    
});
