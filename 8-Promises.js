// const doWorkPromises = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//       resolve('This is success')
//    },2000) 
// })

// doWorkPromises.then((result)=>{
//    console.log(result)
// }).catch((error)=>{
//   console.log(error)
// })


const add = (a,b)=>{
   const sum = new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve(a+b)
      },2000)
   })

   return sum
}

add(1,2).then((sum)=>{
   console.log(sum)
   return add(sum,3)
}).then((sum)=>{
   console.log(sum)
}).catch((e)=>{
   console.log(e)
})