function encodeStrings(str)
{

    let res = "";
    let count = 1;

    for(let i=1;i<str.length;i++)
    {
        if(str[i]===str[i-1])
        {
            count +=1
        }
        else 
        {
            res += count + str[i-1]
            count = 1
        }
    }
    res += count + str[input.length-1]

    console.log(res)

}


//i/p : abbcccddddeea
//o/p : 1a2b3c4d2ea

const input = "abbcccddddeea"
 encodeStrings(input)
