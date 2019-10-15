function insert(c,num){
    for(i=0;i<c.length;i++){
        if(num<c[i])//小於全部
        {
            c.splice(i,0,num);
            break;
        }
        else if(num>c[c.length-1])//大於全部
        {
            c.splice(c.length,0,num);
            break;
        }
        else if((num>c[i] && num<c[i+1]) || (num==c[i]))//兩數之間 || 等於某數
        {
            c.splice(i+1,0,num);
            break;
        }

    }
    return c;
}
console.log(insert([2,5,6,8,9],8));//等於
console.log(insert([0,1,6,8,15],3));//兩數間
console.log(insert([3,6,7,8,12,],2));//小於
console.log(insert([3,6,7,12,15],17));//大於
