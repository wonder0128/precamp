let email = 'codecamp@gmail.com';
let result = email.includes('@')
  ? email.split('@')
  : email;

console.log(result);

let screateEmail = result[0].split('');
console.log(screateEmail)
for(let i = 0; i <screateEmail.length; i++){
  if(i >= 4){
    screateEmail[i] = '*'
  }
}
let res = screateEmail.join('')+"@"+result[1];
console.log(res)