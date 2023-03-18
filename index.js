// Code your solutions in this file

function writeCards(arr,str){
const  newArr = []    
 for(let i = 0  ;i < arr.length  ; i++){
    newArr[i] =`Thank you, ${arr[i]}, for the wonderful ${str} gift!`
   
   
 }
 return newArr
}
function countDown(num){
    let i = 0;
    let downNumber = num ;
    while(i < num){
        console.log(downNumber)
        downNumber -= 1
        i += 1
        
    }
    console.log(0)
}