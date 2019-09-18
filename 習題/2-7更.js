  function binary(a)
{
    var i,j=a;
    var c=[];
    for(i=0; j > 0; i++)
    {
        c[i] = j%2
        j = (j - c[i])/2
    }
    return c.reverse();
}

console.log(binary(6))
console.log(binary(18))
console.log(binary(33))