// Using two pointers

function removeDuplicatesSorted(nums)
{
    if(!nums || nums.length===0)
    {
        return 0;
    }
    let uniqueCount = 1
    for(let i=1;i<nums.length;i++)
    {
        if(nums[i]!==nums[i-1])
        {
            nums[uniqueCount++] = nums[i]
        }
    }
    nums.length = uniqueCount;
    console.log("nums",nums)
}


let arr = [1,2,3,4,4,5,6,7,8,9,9]
removeDuplicatesSorted(arr)