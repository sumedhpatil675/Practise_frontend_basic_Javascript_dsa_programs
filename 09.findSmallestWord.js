function findSmallestWord(sentence)
{
    const words = sentence.split(" ")
    let smallestWord = words[0]
    for(let i=1;i<words.length;i++)
    {
        if(words[i].length<smallestWord.length)
        {
            smallestWord = words[i];
        }
    }
    console.log("smallestWord : ",smallestWord)
}



let sentence = "Find the smallest word"
findSmallestWord(sentence)