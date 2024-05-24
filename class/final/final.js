const submit = document.querySelector('.submit'); // 가입하기
const numberChk = document.querySelector('.cert__number .chkBtn'); // 인증번호 전송
const timeChk = document.querySelector('.cert__time .chkBtn'); // 인증완료

let time = 180; // 180초, 인증 시간
let isStarted = false;

// email
const emailChk = () => {
  let email = document.getElementById('email').value;
  if(email.includes('@') === true){
    let isEmail = email.split('@')[1].includes('.');
    if(isEmail === false){
      document.querySelector('.errorMsg.email').style.visibility = 'visible';
      document.querySelector('.errorMsg.email').value = '';
      return false;
    } else {
      document.querySelector('.errorMsg.email').style.visibility = 'hidden';
      return true;
    }
  } else {
    document.querySelector('.errorMsg.email').style.visibility = 'visible';
    document.getElementById('email').value = '';
    return false;
  }
}

// name
const nameChk = () => {
  let name = document.getElementById('name').value;
  if(name.length === 0){
    document.querySelector('.errorMsg.name').style.visibility = 'visible';
    return false;
  } else {
    document.querySelector('.errorMsg.name').style.visibility = 'hidden';
    return true;
  }
}

// pw
const pwChk = () => {
  let pw1 = document.getElementById('pw1').value;
  let pw2 = document.getElementById('pw2').value;
  if(pw1 && pw2){
    if(pw1 === pw2){
      document.querySelector('.errorMsg.pw1').style.visibility = 'hidden';
      document.querySelector('.errorMsg.pw2').style.visibility = 'hidden';
      return true;
    } else {
      document.querySelector('.errorMsg.pw1').style.visibility = 'visible';
      document.querySelector('.errorMsg.pw2').style.visibility = 'visible';
      document.querySelector('.errorMsg.pw1').innerHTML = '비밀번호가 일치하지 않습니다.'
      document.querySelector('.errorMsg.pw2').innerHTML = '비밀번호가 일치하지 않습니다.'
      return false;
    }
  } else {
    document.querySelector('.errorMsg.pw1').style.visibility = 'visible';
    document.querySelector('.errorMsg.pw2').style.visibility = 'visible';
    return false;
  }
}

// phone
const phone = () => {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let num3 = document.getElementById('num3').value;
  if(num1.length === 3) {
    document.getElementById('num2').focus();
    if(num2.length === 4) {
      document.getElementById('num3').focus();
    }
  }
  if(num1.length === 3 && num2.length === 4 && num3.length === 4){
    numberChk.classList.add('active');
    certification();
  }
}

const certification = () => {
  // 인증번호
  numberChk.disabled = false;
  numberChk.addEventListener('click', e => {
    let randomNumber = String(Math.trunc(Math.random() * 1000000)).padStart(6, '0')
    document.getElementById('certNum').innerText = randomNumber;

    // 타이머
    if(isStarted === false){
      isStarted = true;
      timeChk.disabled = false;
      let timer = setInterval(() => {
        if(time >= 0){
          let min = Math.trunc(time / 60);
          let sec = String(time % 60).padStart(2,'0');
          document.getElementById('certTimer').innerText = `${min}:${sec}`;
          time--;
        } else {
          clearTime(timer);
        }
      }, 100)
      timeChk.addEventListener('click', e => {
        if(time >= 0){
          alert('인증이 완료 되었습니다.');
          clearTime(timer);
          submit.disabled = false;
        }
      })
    }
  })
}

const clearTime = (timer) => {
  timeChk.classList.remove('active');
  numberChk.classList.remove('active');
  document.getElementById('certNum').innerText = '000000';
  document.getElementById('certTimer').innerText = '0:00';
  timeChk.disabled = true;
  numberChk.disabled = true;
  isStarted = false;
  clearInterval(timer);
}

const checkValidation = () => {
  emailChk();
  nameChk();
  pwChk();
  if(emailChk() && nameChk() && pwChk()) {
    return true;
  } else {
    return false;
  }
}

// 검증
submit.addEventListener('click', e => {
  checkValidation();
  if(checkValidation()){
    alert('코드캠프 가입을 축하합니다.');
  }
});
