// object property shortening

const name = 'pugazh'
const personAge = 25

const person = {
    name,
    age : personAge
}

console.log(person)


// object destructing
// 1. Destruct objects and assign to the const.
// 2. Rename of propery and assign default value if property is not exist in object.
// 3. destrcting of method parameter if it is object.

const product = {
    label:'Red Notebook',
    price:20,
}

// const {label:productlabel,price,stock:stocks=34} = product

// console.log(productlabel)
// console.log(price)
// console.log(stocks)

const transcation = (type,{label=12}={})=> {
    console.log(type,label);
}


transcation('order')