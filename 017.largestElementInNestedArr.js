function findLargestElement(arr)
{

    let maxNum = Number.NEGATIVE_INFINITY;

    function traverse(arr)
    {
        for(let i=0;i<arr.length;i++)
        {
            if(Array.isArray(arr[i]))
            {
                //recursively call for nested arr
                traverse(arr[i])
            }else
            {
                if(arr[i]>maxNum)
                {
                    maxNum = arr[i]
                }
            }
        }
    }
    traverse(arr)
    console.log(maxNum)
}

const nestedArray = [[3,4,58],[709,8,9,[10,11]],[11,12]]

findLargestElement(nestedArray)