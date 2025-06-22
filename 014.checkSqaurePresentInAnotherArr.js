function checkSquarePresent(arr1,arr2)
{

    //count freq. of each element in arr1 and arr2

    let arr1Freq = {}
    let arr2Freq = {}

    for(let val of arr1)
    {
        arr1Freq[val] = (arr1Freq[val] || 0)+1;
    }
    for(let val of arr2)
    {
        arr2Freq[val] = (arr2Freq[val] || 0)+1;
    }
    console.log(arr1Freq)
    console.log(arr2Freq)

    for(let key of arr1)
    {
       if(!key*key in arr2Freq)
       {
            return false;
       }
       if(arr1Freq[key] !== arr2Freq[key*key])
       {
            return false;
       }

    }
    return true;
}


let arr1 = [1,2,3]
let arr2 = [1,9]

console.log(checkSquarePresent(arr1,arr2))