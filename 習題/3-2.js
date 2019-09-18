function reverse(str)
{
    var j=str.length;
    var s=str.charAt(j-1);
    for(i=0;j>=0;i++)
    {
        s=s+str.charAt(j-2);
        j--;
    }
    return s;
}
var str='abcde';
console.log(reverse(str));