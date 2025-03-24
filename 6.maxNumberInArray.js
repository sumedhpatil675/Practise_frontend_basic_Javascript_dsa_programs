function findMaxNumber(arr)
{
    if(arr.length===0)
    {
        throw new Error("Empty array")
    }
    let maxEle = arr[0];

    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]>maxEle)
        {
            maxEle = arr[i];
        }
    }
    return maxEle;
}



const numbers = [1,6,-33,9,4,8,2];
console.log("Max number: ",findMaxNumber(numbers))