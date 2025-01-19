function greeting (){
    console.log("hello");
    
};

setTimeout( greeting, 4000 )


setTimeout ( () => {
console.log("hello");

},3000 )




//callback



function sum(a,b){
    console.log(a+b);
    
}
function calculation (a,b, sumcallback) {
sumcallback(a,b)
}
calculation(2, 4 , (a,b)=>{
    console.log(a+b);
    
})

//============

const hello= () =>{
console.log("world");

}
setTimeout(hello, 6000)


//nesting============================



let age =90 
if(age>=18){
if(age>=60){
    console.log("senior")
}else{
    console.log("junior");
    
}
}else{
    console.log("child");
    
}




//callback hell=================


function getdata(dataid,  getnextdata) {
     setTimeout(()=>{
        console.log("data", dataid);
        if (getnextdata) {
            getnextdata();
        }
        } ,2000); 
        }
        getdata(1, ()=>{
            getdata(2, ()=>{
                getdata(3)
            })
        })
        





        function getid(id, getid) {
            setTimeout(()=>{
                console.log("ids", id);
                if(getid){
                    getid();
                }
            } ,3000)
        }
        getid(1, ()=>{
            getid(2, ()=>{
                getid(3, ()=>{
                    getid(4)
                })
            })
        })