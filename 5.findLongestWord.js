const findLongestWord = (sentence) =>{
    let wordsArray = sentence.split(" ");
    let longestWord = ""
    for(let i=0;i<wordsArray.length-1;i++)
    {
        if(longestWord.length<wordsArray[i].length)
        {
            longestWord = wordsArray[i];
        }
    }
    console.log(longestWord)

}


let sentence = "Hi Iam Saikrishna Iam UI developer";
findLongestWord(sentence)