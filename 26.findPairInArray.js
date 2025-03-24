function findPairs(arr,desiredPairValue)
{


    let seen = new Set();
    let pairs = []

    for(const num of arr)
    {
        const newNum = desiredPairValue - num;
 
        if(seen.has(newNum))
        {
            pairs.push([newNum,num])
        }

        seen.add(num);

    }

    console.log(pairs)
}





let input1 = [1,2,3,4,5,6,7,8,9]
let input2 = 10

findPairs(input1,input2)

//output: [[4,6],[3,7],[2,8],[1,9]]