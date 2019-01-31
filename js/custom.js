var score = 0,
 courrentQuestion = 0 ,
 questions = [
    {
       title : "ماهي الأعداد الطبيعية ؟",
       answers : ["0,1,2,4,12,100","-1,-2,-3,-100","1,34 5,4 3,5","42 ,9%"],
       correct : 0 
    },
    
    {
       title : " ماهو حاصل ضرب 6*7 ؟ ",
       answers : ["15","52","42","36 "],
       correct : 4
    },
    
    {
       title : " ماهو حاصل جمع 47+14 ؟ ",
       answers : ["64","51","61","73"],
       correct : 3 
    },
    
    {
       title : " ماهي الأعداد الطبيعية ",
       answers : ["0,1,2,4,12,100","-1,-2,-3,-100","1,34 5,4 3,5","1\4 ,9% "],
       correct : 1 
    },
];

$(document).ready(function(){
    $('.start a').click(function(e){
            e.preventDefault();
            $('.start').hide();
            $('.quiz').show();
            showQuestion();
        });
    
    $('.quiz ul').on('click','li',function(){
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    });
    
    $('.quiz a').click(function(e){
       e.preventDefault;
        if($('li.selected').length){
           var guess = parseInt($('li.selected').attr('id'));
           checkAnswers(guess);
         }else {
            alert("please submit answer");
           } 
        
    });
    
    $('.summary a').click(function(e){
        e.preventDefault();
        restartQuiz();      
    });
    
});



function showQuestion(){
 var question = questions[courrentQuestion];
    $('.quiz h2').text(question.title);
    $('.quiz ul').html('');
    for(var i=0; i<question.answers.length; i++){
        $('.quiz ul').append("<li id="+i+">"+question.answers[i]+"</li>")
    }
}

function checkAnswers(guess){
    var question = questions[courrentQuestion];
    if(question.correct === guess){
        score++;
    }
    courrentQuestion++;
   if(courrentQuestion >= questions.length ){
      showSummary();
      }else{
      showQuestion();
      }
    
}

function showSummary(){
    $('.quiz').hide();
    $('.summary').show();
    $('.summary p').text("نتيجتك" +score+ "من" +questions.length+ "اسئلة");
    
}

function restartQuiz(){
        $('.summary').hide();
        $('.quiz').show();
        score = 0;
        courrentQuestion = 0 ;
        showQuestion();
    
}