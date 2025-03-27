let twoSum = function(arr,taget)
{
    const prevMap = {}

    for(let i=0;i<arr.length;i++)
    {
        let diff = target-arr[i];
        if(diff in prevMap)
        {
            return [prevMap[diff],i];
        }
        prevMap[arr[i]] = i; 
    }

}

let arr = [1,2,3,4,5,6,7,9]
let target = 9
console.log(twoSum(arr,target))