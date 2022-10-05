const runningSum = (nums)=>{
    if(Array.isArray(nums)){
        let runningSumArray = new Array(nums.length);
        
        runningSumArray[0] = nums[0]

        for(let i = 1;i<nums.length;i++){
            runningSumArray[i] = runningSumArray[i-1] + nums[i]
        }

        return runningSumArray
    }else{
        throw "Input is meant to be an array of numbers"
    }

}

const testRunningSum = runningSum([1,2,3,4]);

console.log(testRunningSum)