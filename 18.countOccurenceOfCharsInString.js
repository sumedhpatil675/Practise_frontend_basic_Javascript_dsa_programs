function countCharacters(str)
{
    let charFreq = {}
    for(let i=0;i<str.length;i++)
    {
        let currentChar = str[i];
        charFreq[currentChar] = (charFreq[currentChar] || 0)+1;
    }
    console.log(charFreq)
}


let str = "helaalo"

countCharacters(str)
