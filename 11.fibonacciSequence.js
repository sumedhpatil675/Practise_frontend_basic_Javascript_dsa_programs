function fibSequence(nTerm)
{
    if(nTerm===0)
    {
        return [];
    }
    if(nTerm===1)
    {
        return [0];
    }
    let result = [0,1]
    for(let i=2;i<=nTerm;i++)
    {
        let nextNum = result[i-2] + result[i-1]; 
        result.push(nextNum)
    }
    console.log("res",result)
}



let nTerm = 10;
fibSequence(nTerm)
