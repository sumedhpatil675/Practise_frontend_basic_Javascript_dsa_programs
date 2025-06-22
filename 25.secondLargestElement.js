function findSecondLargest(arr)
{   
    if(arr.length<2)
    {
        throw new Error("Should have 2 elements")
    }
    let largest = -Infinity
    let secondLargest = -Infinity
    // console.log(largest)
    // console.log(secondLargest)
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>largest)
        {
            secondLargest = largest
            largest = arr[i]
        }else if(arr[i]>secondLargest && arr[i]<largest)
        {
            secondLargest = arr[i];
        }

    }
    if(secondLargest=== -Infinity)
    {
        throw new Error("There is no second largest element")
    }
    return secondLargest;

}

const arr = [10,5,20,8,12]
console.log(findSecondLargest(arr))