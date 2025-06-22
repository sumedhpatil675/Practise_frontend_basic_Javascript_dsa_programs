function stringIntoObject(str,finalValue)
{
    const keys = str.split(".");
    let result = {}
    let current = result;

    for(let i=0;i<keys.length;i++)
    {
        const key = keys[i]
        current[key]=  i===keys.length-1 ? finalValue: {};
        current =  current[key];
    }
    console.log(result)
}


stringIntoObject("a.b.c","someValue")

//output required:  {a:{b:{c:"someValue"}}}
