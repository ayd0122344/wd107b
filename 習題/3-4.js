function complement(a)
{
    var s;
    if(a.charAt(0)==0)
    {
        s="1";
    }
    else s="0";
    var j=a.length;
    for(i=1;i<=j-1;i++)
    {
        if(a.charAt(i)==0)
        {
            s+=1;
        }
        else s+=0;
    }
    return s;
}
var a="10101010";
console.log(complement(a));