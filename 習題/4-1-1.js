function insert(c,num){
    for(i=0;i<c.length;i++){
        if(num>c[i] && num<c[i+1])//兩數之間
        {
            for(j=c.length;j>i;j--)
            {
                c[j]=c[j-1];
            }
            c[i+1]=num;
            break;
        }
        if(num==c[i])//等於某數
        {
            for(j=c.length;j>i;j--)
            {
                c[j]=c[j-1];
            }
            c[i+1]=num;
            break;
        }
        if (num>c[c.length-1])//大於全部的數
        {
            c[c.length]=num;
            break;
        }
        if (num<c[0])//小於全部的數
        {
            for(j=c.length;j>i;j--)
            {
                c[j]=c[j-1];
            }
            c[i]=num;
            break;
        }
    }
    return c;
}
console.log(insert([2,5,6,8,9,10,12,16,17,18,19,20],8));//等於
console.log(insert([0,1,6,8,15],3));//兩數間
console.log(insert([3,6,7,12,15],2));//小於
console.log(insert([3,6,7,12,15],17));//大於
