//Challange 1: Your age in days
function ageindays(){
        var birthyear = prompt('What year you born... Good Friend?');
        var ageindayss = (2020 - birthyear)*365;
        var h1 = document.createElement('h1');
        var textAnswer = document.createTextNode('You are '+ ageindayss + ' days old.');
        h1.setAttribute('id', 'ageindays');
        h1.appendChild(textAnswer);
        document.getElementById('flex-box-result').appendChild(h1);
        console.log(ageindayss);
}
function reset(){
    document.getElementById('ageindays').remove();
}
//Challange 2: Generate Cat
function Generatecat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
}
//Challange 3: Rock,Paper,Scissor
function rpsgame(yourchoice){
    console.log(yourchoice);
    var humanchoice, botchoice;
    humanchoice= yourchoice.id;
    botchoice= numbertochoice(randtorpsint());
    console.log('computer choice:', botchoice);
    results= decidewinner(humanchoice, botchoice);
    console.log(results);   
    message= finalmessage(results);
    rpsfrontend(yourchoice.id, botchoice, message);
}
function randtorpsint(){
return Math.floor(Math.random()*3);
}
function numbertochoice(number){
return['Rock','Paper','Scissor'][number]
}
function decidewinner(yourchoice, computerchoice) {
    var rpsdatabase = {
        'Rock':{'Scissor': 1, 'Rock': 0.5, 'Paper':0},
        'Paper':{'Rock': 1, 'Paper': 0.5, 'Scissor':0},
        'Scissor':{'Paper': 1, 'Scissor': 0.5, 'Rock':0},
    }

    var yourscore = rpsdatabase[yourchoice][computerchoice];
    var computerscore = rpsdatabase[computerchoice][yourchoice];

    return[yourscore,computerscore];
}
function finalmessage([yourscore,computerscore]){
    if (yourscore===0){
        return{'message': 'You Lost!', 'color': 'red'};
    }else if (yourscore===0.5){
        return{'message':'You Tied!', 'color': 'yellow'};
    }else {
        return{'message':'You Won!','color':'Green'};
    }
}
function rpsfrontend(humanimagechoice, botimagechoice, finalmessage){
    var imagesdatabase = {
        'Rock': document.getElementById('Rock').src,
        'Paper': document.getElementById('Paper').src,
        'Scissor': document.getElementById('Scissor').src
    }

    document.getElementById('Rock').remove();
    document.getElementById('Paper').remove();
    document.getElementById('Scissor').remove();

    var humandiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var messagediv = document.createElement('div');

    humandiv.innerHTML = "<img src='" + imagesdatabase[humanimagechoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px blue;'>"
    messagediv.innerHTML = "<h1 style='color:" + finalmessage['color'] + "; font-size:60px; padding:30px; '>" + finalmessage['message'] + "</h1>"
    botdiv.innerHTML = "<img src='" + imagesdatabase[botimagechoice] + "' height=150 width=150 style= 'box-shadow: 0px 10px 50px red;'>"
    document.getElementById('flex-box-rps-div').appendChild(humandiv);
    document.getElementById('flex-box-rps-div').appendChild(messagediv);
    document.getElementById('flex-box-rps-div').appendChild(botdiv);
    
    
}