function isPaired(a)
{
    var c=[];
    var counter1=0,counter2=0;
    var j=a.length;
    for(i=0;j>=0;i++)
    {
        c[i]=a.charAt(i);
        if(c[i]=='('){counter1++};
        if(c[i]==')'){counter2++};
        j--;
    }
    if(counter1==counter2)
    {
        return true;
    }
    else return false;
}
var a="(a+3)*5/7)))*8";
console.log(isPaired(a));