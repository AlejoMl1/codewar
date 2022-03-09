// function aa (param){
//     if (arguments.length){
//         console.log('si arg');
//         console.log(arguments);

//     }else{
//         console.log('no arg');
//     }
// }

// aa()

// function first(){
//     console.log('first');
// }


// function first2(){
//     console.log('first2');
// }


// function first3(){
//     console.log('first3');
// }

// first(first2(first3()))

// let t =null
// //caso undefined
// // t = undefined
// console.log(typeof t)
// // console.log(t.length)
// // t.length ? console.log('entre a length') :console.log("no entre a length") 
// // t ===null ? console.log('entre'):console.log("no entre") 
let x = [1,2,5,6]

console.log(x.reduce( (total,number,index,array)=> {
    console.log('index',index)
    console.log('total', total)
    console.log('number', number)
    // console.log(array)
    return total +number
},0 ))

let obj = [
    {name: 'Alice', job: 'Data Analyst', country: 'AU'},
    {name: 'Bob', job: 'Pilot', country: 'US'},
    {name: 'Lewis', job: 'Pilot', country: 'US'},
    {name: 'Karen', job: 'Software Eng', country: 'CA'},
    {name: 'Jona', job: 'Painter', country: 'CA'},
    {name: 'Jeremy', job: 'Artist', country: 'SP'},
  ]
//   let ppl = obj.reduce((group, curP) => {
//     console.log('group', group)
//     console.log('curP', curP)
//     let newkey = curP['country']
//     if(!group[newkey]){
//       group[newkey]=[]
//     }
//     group[newkey].push(curP)
//     return group
//   }, [])

//   console.log(ppl)

// group = [];

// let condition = !group['AU']
// console.log(condition);
// group['AU']=[]
// group['dd']=[]
// console.log(group);
// console.log(group['AU'])
// console.log(group[1])