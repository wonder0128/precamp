// function randomNumber(){
//   let random = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
//   document.getElementById('result__number').innerText = random;
// }
const randomNumber = () => {
  const number = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
  const target = document.getElementById('result__number');
  target.innerText = number;
  target.style.color = `#${number}`;
}