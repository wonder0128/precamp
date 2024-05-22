const randomNumber = () => {
  const number = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
  const target = document.getElementById('result__number');
  target.innerText = number;
  target.style.color = `#${number}`;
  
  let time = 180;
  setInterval(function() {
    if(time >= 0){
      let minute = Math.trunc(time / 60);
      let second = String(time % 60).padStart(2, '0');
      document.getElementById('timer').innerText = `${minute}:${second}`
      time--;
    } else {
      document.querySelector('.chk').disabled = true;
    }
  }, 100)

}


