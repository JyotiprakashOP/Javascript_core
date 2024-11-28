// let str= ''
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         if(i==1 || i==3 || i==5){
//             str+="*"+' '
//         }
//     }
//     str+="\n"
// }
// console.log(str)


// let str=''
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         str+= j +" "
//     }
//     str+="\n"
// }
// console.log(str)



// let str = ''
// for(let i=1;i<=5;i++){
//     for(let j=i;j>=1;j--){
//         str += j 
//     }
//     str +='\n'
// }
// console.log(str)


// let str=''
// for(let i=5;i>=1;i--){
//     for(let j=i;j>=5;j++){
//         str += j + ' '
//     }
//     str +='\n'
// }
// console.log(str)


// let str = ""
// for (let i=5;i>=1;i--){
//     for(let j=5;j>=i;j--){
//         str += j +' '
//     }
//     str += "\n"
// }
// console.log(str)


// let str = ""
// for (let i=1;i<=5;i++){
//     for(let j=5;j>=i;j--){
//         str += j +' '
//     }
//     str += "\n"
// }
// console.log(str)


let str=""
for(let i=5;i>=1;i--){
    for(let j=1;j<i;j++){
        str += " "
    }
    for(let k=5;k>=i;k--){
        str += k
    }
    str+="\n"
}
console.log(str);