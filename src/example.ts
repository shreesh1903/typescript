// let firstName="vijay"
// let count=0
// let isLoading=true
// let numbers:undefined=undefined
// let age:null=null

// const user:{name:string,age:number,id?:number}={
//     name:"shreesh",
//     age:24,
//     id:1
// }

// //jab uske sath hi {name:string,age:number,id?:number} ese define karoge matlb explicit define karna hota hai.
// const fruits:string[]=["a","b","c"]
// const num:number[]=[1,2,3,4]
// // const users=[{id:1,name:""},{id:1,name:""}]
// const users:{id:number,name:string}[]=[{id:1,name:""},{id:1,name:""}]

// //functions

// const sum=(a:number,b:number)=>{
//     return a+b
// }
// sum(2,3)

// const handleApiResponse=(payload:{userId:number},callback:(a:number,b:number)=>void)=>{

// }

// handleApiResponse({userId:1},sum)

// //Interface
// // object ke structure ko define karne ke liye use karte hai.
// interface Person{
//     department:string
// }


// interface User extends Person{
//     name:string
//     id:number
//     getUser:()=>void
// }

// let data:User[]=[{
//     name:"fruits",
//     id:1,
//     getUser:()=>{

//     },
//     department: ''
// }]



// //Type
// //type , interface dono hi structure ko define karne ke liye hote hai.

// type employee={
//     id:number,
//     name:string
// }

// type manage={
//     department:string
// } &employee

// let employeewithmanage:manage={
//     department:"A",
//     id:1,
//     name:"sd"
// }