const maxWealthCalculator = (accounts)=>{
if(Array.isArray(accounts)){
    let sumOfEachAccount = [];

    accounts.map((value)=>{
      let sum =  value.reduce((accumulator,currentValue)=> accumulator + currentValue );
        sumOfEachAccount.push(sum);
    })

  const highestSum =  Math.max(...sumOfEachAccount);
  return highestSum

}else{
    throw "An array of accounts is required";
}

}

const testFunction = maxWealthCalculator([[1,5],[7,3],[3,5]])
console.log(testFunction)