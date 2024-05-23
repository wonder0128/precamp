const checkValidation = function() {
  let email = document.getElementById('email').value;
  let pw1 = document.getElementById('pw1').value;
  let pw2 = document.getElementById('pw2').value;
  let submit = document.getElementById('submit');

  if(email && pw1 && pw2){
    // input값이 비어있지 않을 때
    submit.disabled = false;
  } else{
    // input값이 비어있을 때
    submit.disabled = true;
  }
}