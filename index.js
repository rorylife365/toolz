// const pyrmidFun = (num) => {
//     const dot = ".";
//     const spacer = " ";
//     let space =  num - 1;
//     console.log('Space ' + space)
//     for (let i =0; i < num; i++){
//         if(i === 0){
//             // console.log(Math.floor(num / 2))
//             console.log(spacer.repeat(space + 1) + dot.repeat(1))
//         }else{
//             space--
//             console.log(spacer.repeat(space) , dot.repeat(1 + 2 * i))
//         }
//     }
// }
// pyrmidFun(25)


const helperFun = (n) => {
    let divisions = 0
    for(let divider = 0; divider <= n; divider++){
        n % divider === 0 ? divisions++ : null
    }
    return divisions <= 2 ?  true : false
}
console.log(helperFun(10))


let newArr = []
const primeFun = (num) =>{
    for(let i=0; num > newArr.length; i++){
        helperFun(i) === true ? newArr.push(i) : null
    }
    return(console.log(newArr))
}
primeFun(100)



// const phibFun = (num) => {
//     const phibArr = []
//     if(num < 2){
//         phibArr.push(0)
//     }else if(num >= 2){
//         phibArr.push(0)
//         phibArr.push(1)
//         for(let i=0; i < num; i++){
//             let h = i
//             h++
//             phibArr.push(phibArr[i] + phibArr[h])
//         }
//         phibArr.pop()
//         phibArr.pop()
//     }
//     return(phibArr)
// }

// console.log(phibFun(50)[10-1])
