var questions = ['what is your city name','what is your age']
var answers = ['paris','20'];
var userAnswers=[]
for(var i=0;i<questions.length;i++){
    userAnswers[i] = prompt(questions[i])
}
for(var i=0;i<questions.length;i++){
    userAnswers[i] === answers[i]
    counter++
}