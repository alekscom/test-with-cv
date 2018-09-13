const questions = ['Czy chcesz zostać programistą?','Czy jesteś leniem?','Czy wierzysz w cuda?'];
const trueAnswers = ['option1','option2','option1'];

result = 0,
i = 0;
quest=document.getElementById('question');
p = document.getElementById('paragraf');
answ = document.getElementById('answ');
mainDiv = document.getElementById('main-content')
quest.innerHTML = (i + 1) + ". " + questions[i];
p.innerHTML = 'Pytanie ' + (i+1) + '/3'

function elementID(el){
    el = el.id;
    if ( el === trueAnswers[i]) {
       result++;
   }
}

answ.onclick = function() {
   
    if( i < questions.length - 1) {
        i++;
        quest.innerHTML = (i + 1) + ". " + questions[i];
        p.innerHTML = 'Pytanie ' + (i+1) + '/3'
   }
   else if(result===3){
       console.log('Hurra')
       window.location.href = '../index/cv.html';
   } else {
       mainDiv.innerHTML='<h1 id="error">Niepoprawnie odpowiedziałeś na pytania. <br/> Zapraszam do ponownego rozwiązania testu</h1><a class="error" href="../index/test.html"> Kolejna próba </a>'
   }
      
}