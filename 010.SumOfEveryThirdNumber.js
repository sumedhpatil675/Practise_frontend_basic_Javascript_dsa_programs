const sumOfThirds = (arr)=>{


        let sum = 0;

        for(let i = 0;i<arr.length;i+=3)
        {
            console.log("ele",arr[i])
            sum += arr[i];
        }
        console.log("sum: ",sum)

}

let nums = [1,2,3,4,5,6,7,8,9,10]
sumOfThirds(nums)