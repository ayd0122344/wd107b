function evenParity(a)
{
    var counter=0;
    var j=k=a.length;
    var s=[];
    for(i=j;j>=0;i--)
    {
        s[i]=a.charAt(j-1);
        if(a.charAt(j-1)==1)
        {
            counter+=1;
        }
        j--;
    }
    if (counter%2==0 && s[k]==0)
    {return 0;}
    else return 1;
}
var a="1010001";
console.log(evenParity(a));