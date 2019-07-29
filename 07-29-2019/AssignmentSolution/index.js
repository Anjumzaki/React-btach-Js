var str = prompt('please enter paragraph');
var choose = prompt('want to search a word yes/no ');

if(str){
    if(choose=='yes'){
        var wordToReplace = prompt("enter your word to replace");
        var wordwithReplace = prompt("enter your word to replace with");

        replacePara(str,wordToReplace)
    }
    else{
        alert('thanks')
    }
}

function replacePara(str,word){
    for(var i = 0; i<str.length;i++){
   str = str.replace(word,wordwithReplace)
    }
    alert(str)
}