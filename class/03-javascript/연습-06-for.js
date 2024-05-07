let persons = [
  {name: '철수', age: 17},
  {name: '영희', age: 22},
  {name: '도우', age: 5},
  {name: '그루트', age: 63},
  {name: '도비', age: 11}
]
// undefined
for(let i = 0; i < persons.length; i++){
  if(persons[i].age >= 20){
      console.log(persons[i].name + '은(는) 성인');
  } else if (persons[i].age >= 8) {
      console.log(persons[i].name + '은(는) 학생');
  } else if (persons[i].age > 0){
      console.log(persons[i].name + '은(는) 어린이');
  } else {
      console.log('오류');
  }
}
// 철수은(는) 학생
// 영희은(는) 성인
// 도우은(는) 어린이
// 그루트은(는) 성인
// 도비은(는) 학생
// undefined
for(let i = 0; i < persons.length; i++){
  if(persons[i].age >= 19) {
      console.log(persons[i].name + '님은 성인');
  } else {
      console.log(persons[i].name + '님은 미성년');
  }
}
// 철수님은 미성년
// 영희님은 성인
// 도우님은 미성년
// 그루트님은 성인
// 도비님은 미성년
// undefined

const fruits = [
  {number: 1, title: '레드향'},
  {number: 2, title: '샤인머스캣'},
  {number: 3, title: '산청딸기'},
  {number: 4, title: '한라봉'},
  {number: 5, title: '사과'},
  {number: 6, title: '애플망고'},
  {number: 7, title: '딸기'},
  {number: 8, title: '천혜향'},
  {number: 9, title: '과일선물세트'},
  {number: 10, title: '귤'}
]
// undefined
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].number + " " + fruits[i].title);
}
// 1 레드향
// 2 샤인머스캣
// 3 산청딸기
// 4 한라봉
// 5 사과
// 6 애플망고
// 7 딸기
// 8 천혜향
// 9 과일선물세트
// 10 귤
// undefined
for(let i = 0; i < fruits.length; i++) {
    console.log(`${fruits[i].number} ${fruits[i].title}`);
}
// 1 레드향
// 2 샤인머스캣
// 3 산청딸기
// 4 한라봉
// 5 사과
// 6 애플망고
// 7 딸기
// 8 천혜향
// 9 과일선물세트
// 10 귤
// undefined
for(let i = 0; i < fruits.length; i++) {
    console.log(`과일 순위 ${fruits[i].number}위는 ${fruits[i].title}입니다`);
}
// 과일 순위 1위는 레드향입니다
// 과일 순위 2위는 샤인머스캣입니다
// 과일 순위 3위는 산청딸기입니다
// 과일 순위 4위는 한라봉입니다
// 과일 순위 5위는 사과입니다
// 과일 순위 6위는 애플망고입니다
// 과일 순위 7위는 딸기입니다
// 과일 순위 8위는 천혜향입니다
// 과일 순위 9위는 과일선물세트입니다
// 과일 순위 10위는 귤입니다
// undefined