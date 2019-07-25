var myData = [1,3,5,5,6,7,234,4,234,5,5,2,2,34];
// myData.pop();
// myData.push(234,234,23);
// myData.shift();
// myData.unshift('added','by','unshift');
// var sortedData = myData.slice(2,10);
// console.log(sortedData)
var numToFind = +prompt('enter a number to find');
var newArray = ["yes","no","mention"];
var shuffled = []
var counter=0
// for(var i=0;i<myData.length;i++ ){
//     if(myData[i]===numToFind){
//         counter++
//     }
// }
// if(counter>0){
//     alert('number found '+ counter + ' times')
// }
// else{
//     alert('number not found')
// }
for(var i=0;i<myData.length;i++){
    for(var j=0;j<newArray.length;j++){
        shuffled.push(myData[i]+' '+newArray[j])
    }
}
console.log(shuffled)
alert(myData.length);
console.log(myData);



