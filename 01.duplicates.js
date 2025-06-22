
const removeDuplicates = (arr) =>{

        let uniqueArr = [];

        for(let i=0;i<=arr.length-1;i++)
        {
                if(uniqueArr.indexOf(arr[i])===-1)
                {
                        uniqueArr.push(arr[i])
                }
       }
       console.log("uniqueArr",uniqueArr)

}

function removeDuplicates2(arr)
{
        // convert in set, then again covert in array
        //console.log( Array.from(new Set(arr)))
        console.log([...new Set(arr)]);
}


let arr = [1,2,1,3,4,2,2,1,5,6]

//removeDuplicates(arr)
removeDuplicates2(arr)