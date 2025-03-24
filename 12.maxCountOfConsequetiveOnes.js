function findMaxConsecutiveOnes(arr)
{
    let currOnes = 0
    let maxOnes = 0

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===1)
        {
            currOnes +=1
            maxOnes = Math.max(currOnes,maxOnes)
        }
        else
        {
            currOnes = 0;
        }
    }
    console.log(maxOnes)
}

let arr = [1,1,9,1,9,9,19,7,1,1,1,3,2,5]
findMaxConsecutiveOnes(arr)