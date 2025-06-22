const sortArrays = (arr1,arr2)=>
{

    let sortedArr = []
    var i = 0;
    var j = 0;
    while(i<arr1.length && j<arr2.length)
     {
        if(arr1[i]<=arr2[j])
        {
            sortedArr.push(arr1[i])
            i+=1;
        }
        else
        {
            sortedArr.push(arr2[j])
            j+=1;
        }
     }
     console.log("i",i)
     while(i<arr1.length)
     {
        sortedArr.push(arr1[i])
        i++;

     }
     while(j<arr2.length)
        {
            sortedArr.push(arr2[j])
            j++;
        }
console.log(sortedArr)

}


let arr1 = [0,3,4,31]
let arr2 = [4,6,30]

sortArrays(arr1,arr2)