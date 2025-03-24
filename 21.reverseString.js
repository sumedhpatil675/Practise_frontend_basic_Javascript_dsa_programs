
// Approach - 1
const reverseWords1 = (str)=> {
    let reverseSentence = "";
    let word = ""

    for(let i=0;i<str.length;i++)
    {
        if(str[i]!==' ')
        {
            word += str[i]
        }else
        {
            reverseSentence = word + ' '+ reverseSentence;
            word = ""
        }
    }
    reverseSentence = word + ' ' + reverseSentence;
    console.log(reverseSentence)
}

// Approach - 2
const reverseWords2 = (str)=>{

    

}

let str = "ChatGPT is awesome";
reverseWords1(str)

