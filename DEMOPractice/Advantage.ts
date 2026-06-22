/* Type 'number' is not assignable to type 'string'.*/
let username:string="john"
let userage:number=2
username=42
function greet1(name:string):string{
    return "hello,"+name;
}
const result1:number=greet1(username)
console.log(result1);
