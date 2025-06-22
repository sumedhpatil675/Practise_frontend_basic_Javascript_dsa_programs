function flattenArray(nestedArray)
{
    let stack = [...nestedArray]
    const result = []
    while(stack.length)
    {
        const next = stack.pop();

        if(Array.isArray(next))
        {
            stack.push(...next)
        }else 
        {
            result.push(next)
        }
    }
    result.reverse()
    console.log(result)
}

const nestedArray = [1,[2,[3,4],[7,5]],6]
flattenArray(nestedArray)