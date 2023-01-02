// on page load write a secret message to the browser console
document.addEventListener('DOMContentLoaded', () => {
    console.log('secret message');
});

const clickme = (c) => {
    // alert('you can\'t type that');
    
    for (let i = 1; i <= 5; i++) {
    lognumbers(i, 12);
    }
};

const lognumbers = (multiplier, maxMultiplier) => {
    let x = '';
   for (let m = 1; m <= maxMultiplier; m++) {
       let b = multiplier * m;
       x = x + b + ', ';
   }
   console.log(x); 
};


