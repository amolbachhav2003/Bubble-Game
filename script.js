var timer = 60;
var hitRandomNumber = 0;
var score = 0;

function bubble(){
    var clutter = "";

    for(var i = 1; i<=225; i++){
        randomNumber = parseInt(Math.random() * 50)
        clutter += `<div class = "bubble">${randomNumber}</div>`; 
    }

    document.querySelector('#panel-bottom').innerHTML = clutter;
}

function clock(){
    var time = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector('#timer').textContent = timer;
        } else {
            document.querySelector('#panel-bottom').innerHTML = `<h1>Game Over</h1>`;
            clearInterval(time);
        }  
    } ,1000)
}

function hit(){
    hitRandomNumber = parseInt(Math.random() * 50)
    document.querySelector('#hitValue').textContent = hitRandomNumber
}

function scoreNum(){
    score += 10;
    document.querySelector('#score').textContent = score
}

function compareNumbers(){
    document.querySelector('#panel-bottom').addEventListener('click',function(details){
        var clickedNum = Number(details.target.textContent);
        if(clickedNum === hitRandomNumber){
            scoreNum();
            hit();
            bubble()
        }
    })
}

bubble();
clock();
hit();
compareNumbers();