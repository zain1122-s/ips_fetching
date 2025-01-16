// console.log("hello eorld");
// console.log("hello");
// console.log("khan");

function hello() {
    console.log("hello");
    
}

//timeout function
setTimeout(hello , 3000); 

//2

setTimeout(()=>{
    console.log("wellcome");
    
}, 3000);

//3

setTimeout(( )=> {
    console.log("settimeout");
},4000);

//================================================

console.log("one");
console.log("two");
console.log("three");


// callback function 


function sum (a, b ){
    console.log(a+b);   
}
function calculation(a, b, sumcallback ) {
    sumcallback(a,b)
}
calculation(5,5, (a,b)=>{
    console.log(a+b);
    
} );


//=================

const greet = ()=>{
    console.log("zain");
    
}
setTimeout(greet, 3000);




