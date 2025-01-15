let weatherapi = fetch("https://goweather.herokuapp.com/weather/ny")
  .then((weather1) => {
    console.log(weather1.status);
    console.log(weather1.ok);
    return weather1.json();
  })
  .then((weather2) => {
    console.log(weather2);
  });

//=================================================//

 async function getdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3500);
  });
}

let data = getdata();

data.then((v) => {
  console.log(v);
  //console.log("process data");
  //console.log("task 2")
});
console.log(data);
console.log(32);



//=====================================//
console.log("hello world");
console.log("what are you doing");



function greet (){
    console.log( "hello");
    
}
setTimeout(greet , 3000)


console.log("hello zain");
console.log("my name is shahzain");

