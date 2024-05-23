const submit = document.querySelector('.submit');

// email
const emailChk = () => {
  let email = document.getElementById('email').value;
  if(email.includes('@') === true){
    let isEmail = email.split('@')[1].includes('.');
    if(isEmail === false){
      document.querySelector('.errorMsg.email').style.visibility = 'visible';
      document.querySelector('.errorMsg.email').value = '';
    } else {
      document.querySelector('.errorMsg.email').style.visibility = 'hidden';
    }
  } else {
    document.querySelector('.errorMsg.email').style.visibility = 'visible';
    document.getElementById('email').value = '';
  }
}

// name
const nameChk = () => {
  let name = document.getElementById('name').value;
  if(name.length === 0){
    console.log(name)
    document.querySelector('.errorMsg.name').style.visibility = 'visible';
  } else {
    document.querySelector('.errorMsg.name').style.visibility = 'hidden';
  }
}

const checkValidation = () => {
  // if(errMsg.style.visibility === 'visible'){
  //   errMsg.style.visibility = 'hidden';
  // }
  emailChk();
  nameChk();
}

// 검증
submit.addEventListener('click', checkValidation)