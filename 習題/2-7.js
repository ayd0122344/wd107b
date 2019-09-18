function binary(a)
{
    var i,j=a;
    var c=[];
    for(i=0;j>1;i++)
    {
        c[i]=j%2;
        j=j/2;
        if(j==1)
        {
            c[i+1]=1;
        }
    }
    return c.reverse();
}
console.log(binary(6))
console.log(binary(18))
console.log(binary(33))
//未考慮答案可能為浮點數而造成的bug