const changeFocus1 = () => {
  let num1 = document.getElementById('num1').value;
  if(num1.length === 3){
    document.getElementById('num2').focus();
  }
}

const changeFocus2 = () => {
  let num2 = document.getElementById('num2').value;
  if(num2.length === 4){
    document.getElementById('num3').focus();
  }
}