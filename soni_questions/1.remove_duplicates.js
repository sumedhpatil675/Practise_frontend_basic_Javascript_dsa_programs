//1. removed duplicates -- using set

function removeDuplicates(arr)
{
    if(!arr || arr.length==0)
    {
        return [];
    }
    const set = new Set(arr);
    return [...set]
}

let arr = [1,2,3,4,4,5,6,7,8,9,9]
console.log(removeDuplicates(arr))


//2. removed duplicates --- sorted array


