function quickSort(arr)
{
    if(arr.length<=1)
    {
        return arr
    }

    let pivot = arr[0]
    const leftSorted = []
    const rightSorted = []

    for(let i=1;i<arr.length;i++)
    {   
        let elem = arr[i];
        if(arr[i]<pivot)
        {
            leftSorted.push(elem)
        }
        else 
        {
            rightSorted.push(elem)
        }
    }
    const sortedLeft = quickSort(leftSorted)
    const sortedRight = quickSort(rightSorted)

    //concanate all subarrays
    return sortedLeft.concat(pivot,sortedRight)
}


const unsortedArray = [5,2,9,1,3,6]
const sortedArray = quickSort(unsortedArray)

console.log(sortedArray)