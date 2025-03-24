function findEvenNumbers(arr)
{

    const res = []
    for(let i =0;i<arr.length-1;i++)
    {
        if(arr[i]%2===0)
        {
            res.push(arr[i]);
        }
    }
    console.log("res",res)
}

const numbers = [1,2,3,4,5,6,7,8,-8,19,9,10]

findEvenNumbers(numbers)