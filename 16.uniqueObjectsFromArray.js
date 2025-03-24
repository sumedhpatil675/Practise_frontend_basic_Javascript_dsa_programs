function getUniqueObjArr(arr)
{
    const uniqueArr = []
    const seen = {}
    for(let i=0;i<arr.length;i++)
    {
        let currentItem = arr[i].name;
        if(!seen[currentItem])
        {
            uniqueArr.push(arr[i])
            seen[currentItem] = true;
        }
    }
    console.log(uniqueArr)
}



let arr = [{name:"sai"},{name:"Nang"},{name:"sai"},{name:"sumedh"}]

getUniqueObjArr(arr)