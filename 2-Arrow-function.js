// const square = function(x) {
// return x *x;
// }

// const square1 = (x)=> {
//     return x*x;
// }

// const square2 = (x) => x*x;

// console.log(square(3));

const event = {
    name : 'pugazh',
    guest : ['gowtham','shreyas'],
    HostParty() {
          console.log('This party hosted for '+this.name)
          this.guest.forEach((g) =>
          {
             console.log('Guests '+g + ' for the party ' + this.name)
          })
    }
}

event.HostParty();