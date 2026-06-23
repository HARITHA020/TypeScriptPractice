let arr=[1,2,3]        // it is related to the for each method 
for(var val of arr){
    console.log(val);
    
}

let str:any=['hi']

for(let index1 in str){
    console.log(`index of ${str[index1]}:${index1}`)
}