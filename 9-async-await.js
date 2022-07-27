const add = (a,b)=>{
   const sum = new Promise((resolve,reject)=>{
       setTimeout(() => {
           if( a<0 || b<0)
           {
               return reject('Invalid number')
           }

           resolve(a+ b)
       },2000);
   })

   return sum
}

const sum = async ()=>{
   const sum1 = await add(-11,2)
   const sum2 = await add(sum1,3)
   const sum3 = await add(sum2,4)
   return sum3
}

sum().then((sum)=>{
   console.log(sum)
}).catch((e)=>{
   console.log(e)
})
