function productOfNextTwo(arr)
{
    const result = []
    for(let i=0;i<arr.length;i++)
    {
       let nextIndex = (i+1)%arr.length;
       let nextNextIndex = (i+2)%arr.length;
       result.push(arr[nextIndex]*arr[nextNextIndex])
    }
    return result
}


const inputArr = [3,4,5]
const outputArr = productOfNextTwo(inputArr)
console.log(outputArr)   // Output: [20,15,12]