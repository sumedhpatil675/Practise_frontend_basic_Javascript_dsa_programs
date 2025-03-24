const findReverse = (str) =>{
    let reverse = ""
    let strArr = str.split(" ")

    for(let i=strArr.length-1;i>=0;i--)
    {
        reverse +=strArr[i]+ " ";
    }
    console.log(reverse)
}



findReverse("Hello I am Sumedh Patil Frontend developer")