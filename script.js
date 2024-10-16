

function wicket() {
    const wicket = document.querySelector('.wickets')
    wicket.innerHTML = Number(wicket.innerHTML) + 1;
}

function runSingle() {
    const run = document.querySelector('.js-run');
     run.innerHTML = Number(run.innerHTML) +1 ;
    
   
}


function runFour() {
    const run = document.querySelector('.js-run');
    run.innerHTML = Number(run.innerHTML) +4 ;
   
}

function runSix() {
    const run = document.querySelector('.js-run');
    run.innerHTML = Number(run.innerHTML) +6 ;
}

function ball() {
    const balls = document.querySelector('.balls');
       balls.innerHTML = Number(balls.innerHTML) + 1;
    const ballValue = balls.innerHTML;
    const overs = document.querySelector('.overs');
    //console.log(ballValue);
     if(ballValue === '6'){
       overs.innerHTML= Number(overs.innerHTML)+1;
       balls.innerHTML = 0;
     }
}

function End() {
    const run = document.querySelector('.js-run');
    const target = document.querySelector('.js-target');
    target.innerHTML = run.innerHTML;
    run.innerHTML = 0 ;
    const wicket = document.querySelector('.wickets')  
    wicket.innerHTML = 0;
    const balls = document.querySelector('.balls');
    balls.innerHTML=0;
    const overs = document.querySelector('.overs');
    overs.innerHTML=0;
}

function gameOver(){
const wicket = document.querySelector('.wickets');

if(wicket.innerHTML === '10') {
    const run = document.querySelector('.js-run');
    const target = document.querySelector('.js-target');
    target.innerHTML = run.innerHTML;
    // here to write
    run.innerHTML = 0 ;
    const wicket = document.querySelector('.wickets')
    wicket.innerHTML = 0;

    const balls = document.querySelector('.balls');
    balls.innerHTML=0;
    const overs = document.querySelector('.overs');
    overs.innerHTML=0;
    
     
}
}
