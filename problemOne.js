const stepCounter  = (num)=>{
let counter = 0;


for(;num;counter++){
// check odd number
if(num % 2){
    num--
}else{
    num /= 2
}
}
return counter


}

let testNum = stepCounter(123)

console.log(testNum)