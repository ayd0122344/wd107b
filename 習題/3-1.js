function palindrome(str)
{
    var j=str.length;
    var s=[];
    s[0]=str.charAt(j-1);
    for(i=1;j>=1;i++)
    {
        s=s+str.charAt(j-2);;
        j--;
    }
    if(s==str)
    {return true;}
    else return false;
}

var str="abcba"; 
console.log(palindrome(str));
