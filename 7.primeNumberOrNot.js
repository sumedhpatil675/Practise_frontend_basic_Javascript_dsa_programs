function isPrime(number)
{
    if(number<=1)
    {
        return false;
    }
    for(let i=2;i<=Math.sqrt(number);i++)
    {
        if(number%i===0)
        {
            return false;
        }
    }
    return true;
}

console.log("is Prime",isPrime(17))
console.log("is Prime",isPrime(19))
console.log("is Prime",isPrime(18))