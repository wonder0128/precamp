// let time = 10
// // undefined
// setInterval(function(){
//     if(time >= 0 ) {
//         console.log(time--)
//     } 
// }, 1000)

let time = 180;

setInterval(function() {
    if(time >= 0){
      time--;
      let minute = Math.trunc(time / 60);
      let second = String(time % 60).padStart(2, '0');
      console.log(minute+":"+second)
    }
  }, 100)
