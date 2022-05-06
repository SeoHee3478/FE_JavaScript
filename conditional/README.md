# 조건문
## 🍒 if 문
```js
if (true) console.log("중괄호를 생략했습니다.");
```
## 🍒 if else
```js
if (조건식1) {
		// 조건식1이 참(true)일 경우 실행될 코드
} else if (조건식2) {
		// 조건식1이 거짓(false)이고 조건식2가 참(true)일 경우 실행될 코드
} else {
		// 조건식1, 2 모두 거짓일 경우 실행될 코드
}
```

### 문제
커피의 가격을 입력하면 미리 정해둔 조건에 따라 해당 커피의 가격이 어떠한지 알아보는 코드
```js
function coffePrice(price) {
		if (price > 6000) {
				console.log('커피가 너무 비싸요!');
		} else if (price < 3000) {
				console.log('맨날 먹어도 되겠네요!');
		} else {
				console.log('적당한 가격대입니다.');
		}
}
```

## 🍒 삼항연산자
```js
조건식 ? 참일 경우 실행되는 표현식 : 거짓일 경우 실행되는 표현식
```

```js
let item = true ? console.log('true') : console.log('false');
console.log(item);
```
item이 true 이면 true를 출력하고 true가 아니면 false를 출력한다.

## 🍒 switch
switch문은 참이냐 거짓이냐를 판별하는 상황보다는 다양한 값을 받아오는 상황에서 코드 실행을 결정할 때 사용한다.
```js
let price = 0;
let menu = '카페라떼'; // 메뉴를 바꿔보세요!

switch (menu) {
		case '아메리카노':
				price = 4000;
	  case '카페라떼':
				price = 5000;
		case '바닐라라떼':
				price = 6000;
	  case '콜드브루':
				price = 5500;
		case '딸기라떼':
				price = 7000;
	  case '레몬에이드':
				price = 6500;
		case '에스프레소':
				price = 3500;
	  case '루이보스':
				price = 4500;
		default:
				console.log('메뉴를 정확히 입력하세요.');
}
```
