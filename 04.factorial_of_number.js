const findFactorial = (num)=>{
    if(num==0 || num==1)
    {
        return num;
    }
    return num* findFactorial(num-1)
}

console.log(findFactorial(4))