# 배열(Array)

```javascript
const cafe = ['coffee', 'cake', 'tea', 'cookie']
```

## 🍒 unshift()
위와 같은 배열일 때, 맨 앞에 bread라는 요소를 추가해주고 싶다면?
unshift를 사용해보자!
```javascript
const cafe = ['coffee', 'cake', 'tea', 'cookie']
const count = cafe.unshift('bread')
>(5) ['bread','coffee', 'cake', 'tea', 'cookie']
```

Array.prototype.unshift() 메소드는 배열의 맨 앞에 1개 이상의 요소를 추가하고, 배열의 새로운 길이를 반환할 수 있다.

## 🍒 shift()
이번에는 맨 앞의 요소를 지워보자!

```javascript
const cafe = ['coffee', 'cake', 'tea', 'cookie']
let first = cafe.shift() //맨 앞의 bread 지워짐
cafe
>(4) ['coffee', 'cake', 'tea', 'cookie']
first
> 'bread'
cafe.unshift(first) //다시 맨 앞에 bread 추가
>5

```
## 🍒 push()
맨 뒤에서 요소를 추가할 때는 push()를 사용하면 된다.
```javascript
const cafe = ['bread', 'coffee', 'cake', 'tea', 'cookie']
cafe
>(5)['bread','coffee', 'cake', 'tea', 'cookie']
cafe.push('toast')
>6
cafe
>(6) ['bread','coffee', 'cake', 'tea', 'cookie','toast']
```

## 🍒 pop()
맨 뒤에서 요소를 제거할 때는 pop()을 사용하면 된다.
```js
const cafe = ['bread','coffee', 'cake', 'tea', 'cookie','toast']
let last = cafe.pop()
last
>'toast'
cafe
(5) ['bread','coffee', 'cake', 'tea', 'cookie']
```
## 🍒join()
- 요소들을 연결해 하나의 값으로 만들어준다.
- Array.prototype.join() 메소드는 배열 내 원소들을 연결해 하나의 값으로 만들며, 그 값의 자료형은 문자열이다. 매개변수를 생략하면 쉼표로 구분되며, 빈 문자열을 넣을 시 띄어쓰기 없이 연결된다. 요소가 null 또는 undefined 일 경우 빈 문자열로 반환된다.

```js
const cafe = ['coffee', 'cake', 'tea', 'cookie']
cafe.join(',') //cafe 배열의 요소들을 ,(comma)로 연결하기
>bread,coffee,cake,tea,cookie

cafe.join('!!!') //cafe 배열의 요소들을 !!!으로 연결하기
>bread!!!coffee!!!cake!!!tea!!!cookie

const number = ['010', '2845', '3478']
number.join('-') //number 배열의 요소를 -으로 연결하여 전화번호 형태처럼 만들기
>'010-2845-3478'
```

## 🍒fill()
- 모두 똑같은 요소로 채워넣고 싶을 때 사용한다.
- Array.prototype.fill() 메소드는 배열 내 원하는 요소를 같은 값으로 채울 수 있다. 해당 메소드는 `원본을 변경하는 메소드`로, 복사본이 아닌 this 객체로 변경해 반환한다는 특징이 있다.
```js
const cafe = ['coffee', 'cake', 'tea', 'cookie']
cafe.fill('bread') //cafe 배열 내의 원소들을 모두 bread로 변경하기
>(5) ['bread', 'bread', 'bread', 'bread', 'bread']
cafe
>(5) ['bread', 'bread', 'bread', 'bread', 'bread']
```
- 두번째 매개변수에는 배열 내에 첫번째 매개변수에 입력할 값을 채우기 시작할 지점의 인덱스를 입력하면 된다.
- 생략이 가능하며 입력하지 않을 시 기본값은 0이다. 
```js
cafe = ['coffee', 'cake', 'tea', 'cookie']
cafe.fill('bread',-1)
>(4) ['coffee', 'cake', 'tea', 'bread'] //마지막 요소를 bread로 채움
```
- 두번째 매개변수에는 음수 값도 넣을 수 있으며, 음수 값을 넣으면 배열 내 마지막 원소가 -1이 되며 마지막 부터 세기 시작한다. 

```js
Array(10)
Array(10).fill(10)
>(10) [10,10,10,...,10]

let test = Array(10).fill(0)
test
>(10) [0,0,0,0,0,0,0,0,0,0]
test.fill('hello', -1) //test 배열의 마지막 요소에 hello 값으로 채우기
>(10)[0,0,0,0,0,0,0,0,0,'hello']
cafe.fill('bread', -3, -1) //cafe 배열의 마지막 요소와 마지막에서 3번째 요소까지 bread로 채우기
>(4)['coffee', 'bread', 'bread', 'bread']
test = Array(10).fill(0)
>(10) [0,0,0,0,0,0,0,0,0,0]
test.fill('bread', 2, 5)//test 배열의 두번째 요소부터 다섯번째 요소까지 bread로 채우기
>(10) [0,0,'bread', 'bread', 'bread', 0,0,0,0,0]
```
## 🍒 flat()
- 배열을 원하는 깊이로 평탄화해주는 메서드이다.
- Array.prototype.flat() 메소드는 배열 구조 내에 또 다른 배열 요소를 지정한 깊이까지 이어 붙인 새로운 배열을 생성한다. 기본값은 1이며 괄호 안에 들어간 숫자 만큼의 차원을 평탄화해주는 메소드이다. 매개변수에 infinity를 넣고 사용하면 하위배열이 없을 때 까지 평탄화가 이뤄진다. 빈 요소가 있을 경우 무시된다.

```javascript
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, [10, 11]]]]
```
 2차원이라고 볼 수 있음
```
0 -> 스칼라
10 -> 스칼라
[0] -> 백터
[10] -> 백터
[[1,2,3], [4,5,6], [7,8,9]] -> 메트릭스(행렬)
[[[1,2],[3,4]],[[1,2],[3,4]]] -> 3차원, 텐서
```


```javascript
arr.flat();
> [1,2,3,4,5,6,7,8,[9,[10,11]]]
arr.flat(1);
> [1, 2, 3, 4, 5, 6, 7, 8, [9, [10, 11]]]

arr.flat(2);
> [1, 2, 3, 4, 5, 6, 7, 8, 9, [10, 11]]

arr.flat(3);
> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

arr.flat(Infinity);
> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
```

## 🍒 includes()
특정 요소가 포함되었는지 확인해주는 메소드
```javascript
const cafe = ['coffee', 'cake', 'tea', 'cookie']

cafe.includes('bread');
//expected output: false

cafe.includes('cake');
//expected output: true

cafe.includes('cake', -3); //음수를 입력한 경우, 맨 뒤에 있는 인덱스를 -1으로 간주해 뒤에서 부터 세기 시작한다.
//expected output: true
```
- 첫번째 매개변수에는 탐색하고자 하는 요소 입력
- 두번째 매개변수에는 탐색을 시작하고자 하는 인덱스를 입력(값이 없으면 전체 요소를 대상으로 탐색) 

- find, filter, map 3가지는 정말 중요하니까 잘 정리해둘 것!
- 간단한 코딩테스트를 볼 수도 있음

## 🍒 find()
- 하나의 요소라도 조건을 만족하는지 확인하는 메서드이다.
- Array.prototype.find() 메소드는 배열에서 특정 조건에 부합하는 1개의 값을 찾아 반환한다. Array.prototype.filter() 메소드와 문법이 유사하지만, 단 하나의 요소 만을 찾는다는 점이 다르며 하나의 값만 찾기 때문에 Array.prototype.filter() 보다 성능이 우수하다. 어떤 요소도 특정 조건에 부합하지 못하면 undefined를 반환한다. 

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.find(i => i > 5);
//expected output: 6
```
- 고유한 ID 값을 찾을 때 많이 사용한다.
-> map, filter를 사용하는 것과 다르게 한번 찾으면 그 뒤에는 탐색을 하지 않기 때문에 효율적이다.(다만 아이디가 맨 마지막에 있다면 다른 것과 비슷한 시간을 가지는 낮은 효율성을 보인다)

## 🍒 filter()
- 모든 요소가 조건을 만족하는지 확인할 때는 filter()을 사용한다.
- Array.prototype.filter() 메소드는 배열에서 특정 조건에 부합하는 값을 찾고 그 값들로 이루어진 `새로운 배열`을 만들어 출력한다. 어떤 요소도 특정 조건에 부합하지 못하면 빈 배열을 반환한다. 해당 메소드는 숫자, 문자열, boolean과 같은 원시값 뿐 아니라 json 같은 객체를 사용해서 true인 값을 판별할 수 있다. 콜백함수의 반환값이 true인 모든 요소를 모아 새로운 배열로 만들어 출력하며 true가 아닌 요소들은 건너뛰며 새로운 배열에 포함시키지 않는다.


📌 실제 검색하는 것처럼 filter 기능을 사용해보자.
```javascript
const arr = [{
    'name' : 'title1',
    'contents' : 'contents1',
    'dataNum' : 1
}, {
    'name' : 'title2',
    'contents' : 'contents2',
    'dataNum' : 2
}, {
    'name' : 'title3',
    'contents' : 'contents3',
    'dataNum' : 3
}, {
    'name' : 'title4',
    'contents' : 'contents4',
    'dataNum' : 4
}, {
    'name' : 'title5',
    'contents' : 'contents5',
    'dataNum' : 5
}];
arr.filter(i=>i.dataNum >3)//dataNum의 값이 3 초과인 것을 찾아라 
//expected output:
	[{
	    'name' : 'title4',
	    'contents' : 'contents4',
	    'dataNum' : 4
	}, {
	    'name' : 'title5',
	    'contents' : 'contents5',
	    'dataNum' : 5
	}] // 3 초과인 4와 5에 해당하는 객체를 전부 반환한다.
```

📌 블로그 검색 처럼 만들어보자!

```javascript
const arr = [{
    'name' : '안녕1',
    'contents' : '프론트엔드1',
    'dataNum' : 1
}, {
    'name' : '프론트엔드2',
    'contents' : 'contents2',
    'dataNum' : 2
}, {
    'name' : 'title3',
    'contents' : '프론트엔드3',
    'dataNum' : 3
}, {
    'name' : '안녕4',
    'contents' : 'contents4',
    'dataNum' : 4
}, {
    'name' : 'title5',
    'contents' : 'contents5',
    'dataNum' : 5
}];
arr.filter(i => (i.name.includes('프론트엔드'))||(i.contents.includes('프론트엔드'))) 
//name에 프론트엔드를 가지고 있거나 contents에 프론트엔드를 가지고 있는 것을 모두 찾아라 

//expected output:
(3) [{…}, {…}, {…}]
0: {name: '안녕1', contents: '프론트엔드1', dataNum: 1}
1: {name: '프론트엔드2', contents: 'contents2', dataNum: 2}
2: {name: 'title3', contents: '프론트엔드3', dataNum: 3}
length: 3
[[Prototype]]: Array(0) 
//위와 같이 프론트엔드 키워드가 들어간 것을 모두 반환하는 것을 확인할 수 있다.

```
## 🍒 findIndex()
- 조건을 만족하는 첫 번째 인덱스를 찾을 때 사용하는 메서드이다.
- Array.prototype.findIndex() 메소드는 주어진 조건에 부합하는 배열의 맨 첫 번째 요소의 인덱스를 반환한다. Array.prototype.find() 메소드와 비슷하지만 Array.prototype.find() 메소드는 여기서 첫 번째 인덱스가 아닌 첫 번째 요소를 반환한다는 차이가 있다. 배열 내에서 조건에 부합하는 요소가 존재하지 않으면 -1을 반환한다. 
```javascript
const cafe = [{
	'item' : 'coffee',
	'amount' : 5
},{
	'item' : 'cake',
	'amount' : 4
},{
	'item' : 'tea',
	'amount' : 7
},{
	'item' : 'cookie',
	'amount' : 3
}];

const index = cafe.findIndex(obj => obj.item.length <= 3) //item의 길이가 3보다 작은 것을 찾아서 인덱스값을 반환하여라. 3보다 작은 것은 'item'요소가 'tea'인 객체 이므로 index값 2를 반환

index
//expected output: 2
```

### 🍕 find와 findIndex 차이점 정리

|이름|내용|
|------|---|
|find |- find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환|
|findIndex|- findIndex() 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환|


## 🍒 map()
- Array.prototype.map() 메소드는 배열 내에 있는 요소에 오름차순으로 접근해서 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다. 
- 해당 메소드를 사용해 기존의 값을 재정의할 수도 있지만 새로운 형태의 값을 정의하는 것 또한 가능하다. 
- 객체나 json 형태의 데이터를 탐색하는 용도로 사용할 수 있기도 하며 이 과정에서 새로운 형태의 값을 정의하는 경우가 많다. 
- 이러한 방식은 다른 순회하는 Array.prototype.filter() 메소드나 Array.prototype.find() 메소드, Array.prototype.forEach() 메소드 에서도 사용 가능하다.
- 새로운 배열을 만들어주고, 기존 배열은 그대로 있다.

❗map 함수를 이용해 주어서 전체 원소에 10, 100을 더한 값을 만들어보자
```javascript
arr = [1,2,4,8,16] 
arr.map(i => i + 10)
>(5)[11,12,14, 18, 26]//모든 요소에 10씩 더해짐
function weniv(x){
    return x+100
}
arr.map(weniv)
>(5)[101, 102, 103, 104, 105] //함수로 만들어서 정의 가능
```

```javascript
const arr = [{
    'name' : 'title1',
    'contents' : 'contents1',
    'dataNum' : 1,
    '지역과날짜' : ['한국', [22,5,4]]
}, {
    'name' : 'title2',
    'contents' : 'contents2',
    'dataNum' : 2,
    '지역과날짜' : ['한국', [22,5,4]]
}, {
    'name' : 'title3',
    'contents' : 'contents3',
    'dataNum' : 3,
    '지역과날짜' : ['한국', [23,5,4]]
}, {
    'name' : 'title4',
    'contents' : 'contents4',
    'dataNum' : 4,
    '지역과날짜' : ['한국', [23,5,4]]
}, {
    'name' : 'title5',
    'contents' : 'contents5',
    'dataNum' : 5,
    '지역과날짜' : ['한국', [22,5,4]]
}];
arr.map((i => i.지역과날짜[1][0]));
```

### 🍕 method chaining
연속해서 함수를 사용할 수 있음
value와 index 값 두개를 다 뽑아보자
```javascript
const arr = [{
    'name' : 'title1',
    'contents' : 'contents1',
    'dataNum' : 1,
    '지역과날짜' : ['한국', [22,5,4]]
}, {
    'name' : 'title2',
    'contents' : 'contents2',
    'dataNum' : 2,
    '지역과날짜' : ['한국', [22,5,4]]
}, {
    'name' : 'title3',
    'contents' : 'contents3',
    'dataNum' : 3,
    '지역과날짜' : ['한국', [23,5,4]]
}, {
    'name' : 'title4',
    'contents' : 'contents4',
    'dataNum' : 4,
    '지역과날짜' : ['한국', [23,5,4]]
}, {
    'name' : 'title5',
    'contents' : 'contents5',
    'dataNum' : 5,
    '지역과날짜' : ['한국', [22,5,4]]
}];
arr.map((value, index)=>([index, value.contents]))
//expect out:
(5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
0: (2) [0, 'contents1']
1: (2) [1, 'contents2']
2: (2) [2, 'contents3']
3: (2) [3, 'contents4']
4: (2) [4, 'contents5']
length: 5
[[Prototype]]: Array(0)
```
value와 index는 이름명 보다는 순서로 인식함

### 🍕 구조분해할당
구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.
```javascript
var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20


// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

```
## 🍕 전개구문
전개 구문을 사용하면 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 (함수로 호출할 경우) 또는 요소 (배열 리터럴의 경우)로 확장하여, 0개 이상의 키-값의 쌍으로 객체로 확장시킬 수 있습니다.
```javascript 
          var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
// ["head", "shoulders", "knees", "and", "toes"]

```
안쓰는 변수는 _처리를 해줄 것

```javascript
Array(100).fill(0).map((value, index)=> index+1)

(100) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
```

```javascript
Array(100).fill(0).map((_, index)=>index+1)
(100) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
```

## 🍒 forEach()
- 배열의 각 요소에 대해 callback을 실행합니다.
- 배열을 순회하므로 중간에 "break;" 문을 사용할 수 없습니다. 
- 이런 경우라면 for( )문을 사용해야 합니다.
```javascript
array.forEach(callback(currentvalue[, index[, array]])[, thisArg])
```
### 🍕 map 과 forEach 문의 차이점
map()은 배열을 반환하고
forEach()는 순회만 한다.
forEach()는 무엇을 할지 정확하게 명시해줘야 함

forEach 사용 예제
```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(i => console.log(i));
// expected output: 1
// expected output: 2
// expected output: 3
// expected output: 4
// expected output: 5
// expected output: 6
// expected output: 7
// expected output: 8
// expected output: 9
// expected output: 10

```

## 🍒 reduce
- 누적해주며 실행하고 싶을 때 사용
- 메소드는 배열 내의 각 요소에 주어진 reducer 함수를 실행하고, 단 1개의 결과값을 반환한다. 
- 해당 메소드는 4개의 매개변수를 갖는다. 
- 바로 직전 콜백함수의 반환값을 누적하는 누적값, 그리고 순회를 돌고 있는 현재값, 현재 돌고 있는 요소의 index, array 전체이다. 
- 보통 index와 array를 생략하고 많이 사용한다.
```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr.reduce((누적값, 현재값) => 누적값+현재값)
//expected output: 55

arr.reduce((누적값, 현재값, index, array) => 누적값+현재값)
//expected output: 55

arr.reduce((누적값, 현재값, index, array) => 누적값-현재값)
//expected output: -53

```

## 🍒 Array.from()
- 유사배열객체를 생성함
- `Array.from()` 메소드는 배열, 문자열 등 처럼 반복이 가능한 객체 (Iterable object) 혹은 유사 배열을 받아 새로운 배열 객체를 만든다. 여러 객체를 배열로 만들 때 주로 사용되며 객체 내의 모든 요소를 새로운 배열로 얕은 복사를 한다.
```javascript
Array.from('hello world');
//expected output: ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

Array.from([1, 2, 3], x => x ** 2);
//expected output: [1, 4, 9]

Array.from([{'value':100}, {'value':200}, {'value':300}], x => x.value);
//expected output: [100, 200, 300]
```

```javascript
let seohee = [10,20,30]
seohee.length = 100
seohee
> (100) [10,20,30, 비어 있음 * 07]
typeof seohee
> Object
```
- 유사배열 객체는 method(length)가 정의가 안되어있다.

- length 길이를 강제로 늘려주면 나머지 부분은 비어 있음으로 채워질 수 있다.
이렇게 될 수 있는 이유는 type이 object이기 때문이다. 

❗ Array.from을 이용해서 원하는 값만 출력해보자
```javascript
Array.from([
  {
    "_id": "6271fd40fe5c58d4cbd3a72f",
    "index": 0,
    "guid": "60f843d2-1b6b-4536-b421-e5df1c4ab735",
    "isActive": true,
    "balance": "$2,534.11",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "brown",
    "name": "Miranda Nguyen",
    "gender": "male",
    "company": "ZENTIA",
    "email": "mirandanguyen@zentia.com",
    "phone": "+1 (833) 466-3207",
    "address": "198 Dank Court, Hartsville/Hartley, Indiana, 8416",
    "about": "Consectetur proident anim do commodo ipsum. Elit consectetur irure dolore voluptate. Enim aute voluptate et qui do. Eu pariatur laboris labore esse enim reprehenderit mollit ullamco fugiat. Laborum sunt veniam consectetur laboris cupidatat. Lorem tempor occaecat labore ut et eiusmod amet.\r\n",
    "registered": "2021-06-16T11:50:54 -09:00"
  },
  {
    "_id": "6271fd40e30856d15651c60c",
    "index": 1,
    "guid": "ee647592-0647-4ad5-96b1-eb6c06a32dbd",
    "isActive": true,
    "balance": "$2,636.22",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "blue",
    "name": "Florence Flynn",
    "gender": "female",
    "company": "ELENTRIX",
    "email": "florenceflynn@elentrix.com",
    "phone": "+1 (901) 525-3731",
    "address": "246 Billings Place, Brandermill, Guam, 5037",
    "about": "Sint non dolore cupidatat voluptate laboris adipisicing eu quis. Laboris nostrud qui dolor cillum dolor nulla sint culpa est reprehenderit sint ipsum nisi excepteur. Qui cupidatat sint do aliquip ut. Officia est aliquip fugiat ex enim do sunt consequat.\r\n",
    "registered": "2014-12-10T08:44:47 -09:00"
  },
  {
    "_id": "6271fd404394e16d79143873",
    "index": 2,
    "guid": "3d3890ff-8241-4a2b-a361-789e0298817a",
    "isActive": false,
    "balance": "$1,047.32",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "green",
    "name": "Debbie Pratt",
    "gender": "female",
    "company": "OPTIQUE",
    "email": "debbiepratt@optique.com",
    "phone": "+1 (831) 537-3188",
    "address": "737 Quentin Street, Calpine, Louisiana, 9102",
    "about": "Officia nisi labore mollit cupidatat exercitation commodo duis adipisicing officia amet laborum. Nulla qui commodo aliqua reprehenderit dolore cupidatat esse ea pariatur sint ad dolore. Exercitation duis veniam velit occaecat est irure quis labore occaecat.\r\n",
    "registered": "2016-09-19T10:00:38 -09:00"
  }
], x => [x.name, x.gender, x.email])
```

## 🍒 concat()
- 배열을 합치거나 새로운 요소를 반환한다.
- 원본 배열에 변경은 없고 새로운 배열을 반환한다.
- Array.prototype.concat() 메소드는 매개변수로 주어진 값 또는 배열을 이용해서 기존의 배열에 존재하던 요소를 사용해 새로운 배열을 만들 수 있고 기존 배열에 새로운 요소를 추가할 수도 있다. 주로 배열을 합치고자 할 때 자주 사용된다. 기존의 배열을 변경하지 않으며, 추가된 새로운 배열을 반환한다는 특징이 있다.
```javascript
const cafe = ['coffee'];

cafe.concat(['cake']);
//expected output: ['coffee', 'cake']

cafe.concat(['tea'], 'cookie');
//expected output: ['coffee', 'tea', 'cookie']
```

## 🍒 some()
- 1개 이상의 요소가 조건에 맞는지 찾으려면 some 사용한다.
- Array.prototype.some() 메소드는 배열 내 1개의 요소라도 조건에 맞는 값이 있는지 여부를 boolean으로 반환한다. 조건에 부합하는 값이 없거나 빈 배열에서 호출할 경우에 false를 반환한다. 호출할 배열 내에 존재하는 모든 요소가 함수의 반환 값을 true로 만드는지 여부를 확인하는 Array.prototype.every() 메소드와 차이가 있다고 할 수 있다.
```javascript
const cafe = ['coffee', 'cake', 'tea', 'cookie']

const cafe = [{
	'item' : 'coffee',
	'amount' : 5
},{
	'item' : 'cake',
	'amount' : 4
},{
	'item' : 'tea',
	'amount' : 7
},{
	'item' : 'cookie',
	'amount' : 3
}];

const order = cafe.every( i => i.amount >= 3)

order
//expected output: true
```

## 🍒 every()
- 모든 요소가 조건에 맞는지 찾을 때 사용한다.
- Array.prototype.every() 메소드는 배열 내에 존재하는 모든 요소가 조건에 부합하는지 여부를 boolean으로 반환한다. 조건에 부합하지 않는 요소를 발견하거나 빈 배열에서 호출할 경우 false를 반환한다. Array.prototype.some() 메소드와 마찬가지로 호출한 배열을 변형하지 않는다는 특징이 있다.
```javascript
const cafe = [{
	'item' : 'coffee',
	'amount' : 5
},{
	'item' : 'cake',
	'amount' : 4
},{
	'item' : 'tea',
	'amount' : 7
},{
	'item' : 'cookie',
	'amount' : 3
}];

const order = cafe.some ( i => {
	return i.amount >= 5
});

order
//expected output: true
```


![sum](https://user-images.githubusercontent.com/78894678/166642143-b1bf0bcc-7984-46a1-bc9e-afc6f6f00a96.png)
