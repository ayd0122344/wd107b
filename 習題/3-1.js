function palindrome(str)
{
    if(str==str.reverse())
    {return true;}
    else return false;
}

var str=['a','b','c','b','a']; 
console.log(palindrome(str));
