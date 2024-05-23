let isStarted = false;
const randomNumber = () => {

  if(isStarted === false){
    // 타이머가 작동중이 아닐 때
    isStarted = true;
    document.querySelector('.chk').disabled = false;

    const number = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    const target = document.getElementById('result__number');
    target.innerText = number;
    target.style.color = `#${number}`;
    
    let time = 10;
    let timer = setInterval(function() {
      if(time >= 0){
        let minute = Math.trunc(time / 60);
        let second = String(time % 60).padStart(2, '0');
        document.getElementById('timer').innerText = `${minute}:${second}`
        time--;
      } else {
        document.querySelector('.chk').disabled = true;
        isStarted = false;
        clearInterval(timer);
      }
    }, 100)
    
  } else {
    // 타이머가 작동중일 때
  }
}


