let obj = {
    a : 23,
    b : 34,
    add : function(){
        return this.a + this.b;
    }
}

console.log(obj.add());