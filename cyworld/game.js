// const words = document.getElementById('word');
// const btn = document.querySelector('.search');
// const result = document.getElementById('result');

// btn.addEventListener('click', e => {
//   let mywords = document.getElementById('myword').value.split('');
//   const wordsArr = words.innerText.split('');
//   if(wordsArr[wordsArr.length-1] === mywords[0]){
//     document.getElementById('word').textContent = document.getElementById('myword').value;
//     document.getElementById('myword').value = '';
//     result.innerText = '정답입니다.';
//   } else {
//     document.getElementById('myword').value = '';
//     result.innerText = '오답입니다.';
//   }
// })

//////////////////////////////////////////////////////////

const startWord = () => {
  let myword = document.getElementById("myword").value;
  let word = document.getElementById("word").innerText;

  let lastWord = word[word.length - 1];
  let firstWord = myword[0];

  if(lastWord === firstWord){
    document.getElementById('result').innerText = '정답';
    document.getElementById('word').innerText = myword;
    document.getElementById('myword').value = '';
  } else {
    document.getElementById('result').innerText = '땡';
    document.getElementById('myword').value = '';
  }
}