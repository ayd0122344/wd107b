//請用二分搜尋法搜尋一個已經排好序的陣列。
//範例： find([ 1, 4, 5, 8, 9], 5) => 2 , 找不到時傳回 -1。
function find(c,target){
    var v=c.length;
    var middle=0,start=0,end=v;
    for(middle=Math.floor((start+end)/2);middle>=0;Math.floor((start+end)/2))
    {
        if(c[middle]==target)
        {
            break;
        }
        else if(c[middle]<target)
        {
            //console.log("<時"+middle);
            start=middle+1;
            if((start+end)/2 >= (start+end)%2)
            {
                middle=(start+end)/2-(start+end)%2;
            }
            else break;
        }
        else//(c[middle]>target)
        {
            //console.log(">時"+middle);
            end=middle-1;
            //console.log((start+end)/2);
            //console.log((start+end)%2);
            if((start+end)/2 >= (start+end)%2)
            {
                middle=(start+end)/2-(start+end)%2;
            }
            else break;
        }
     }
    //console.log(middle);
    if(c[middle]==target)
        {
            return middle;
        }
    else
        {
            return -1;
        }
}
console.log(find([0,1,6,8,15],3));//找不到
console.log(find([3,6,7,8,12,],2));//找不到
console.log(find([2,5,6,7,8,9],8));//找到
console.log(find([3,6,7,12,15],12));//找到