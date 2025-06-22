function canCreateString(str1,str2)
{   
    if(str1.length != str2.length)
    {
        return false;
    }
    let str1CharFreq = {}

    for(let key of str1)
    {
        str1CharFreq[key] = (str1CharFreq[key] || 0)+1;
    }
    for(let val of str2)
    {
        if(str1CharFreq[val])
        {
            str1CharFreq[val] -=1
        }
        else
        {
            return false;
        }
    }
    return true;
}

let str1 = "qwerty";
let str2 = "qeywrt";

console.log(canCreateString(str1,str2))

