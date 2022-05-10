# for of, for in, 전개구문, 구조분해할당, 함수, 지역변수, 재귀함수, call by value, call by reference, sharing(공식 용어 아님)

# 반복문
## 🍒 for in
- 객체를 순환
- `열거할 수 있는 속성`들을 순회할 수 있도록 해준다.(keys는 열거 가능한 속성, value는 열거 불가능한 속성)
- for in은 객체의 key 값에는 접근이 가능하지만, value 값에 직접적으로 접근하는 방법은 제공하지 않는다. 
```js
var obj = {
  a: 1,
  b: 2,
  c: 3
};

for (var item in obj) {
  console.log(item) // a, b, c
}
```
객체의 프로퍼티가 나오는 것을 확인 할 수 있음


❓하지만 for of를 쓴다면?
```js
var obj = {
  a: 1,
  b: 2,
  c: 3
};

for (var item of obj) {
  console.log(item) // Uncaught TypeError: obj is not iterable
}
```
에러가 발생되는 것을 확인할 수 있다.

- for in 문은 위에서 언급했듯이 key 값에만 접근이 가능하기 떄문에, 배열에서는 index에, 객체에서는 key값에 접근하게 된다. 
❓ 그렇다면 value값이 궁금하다면 어떻게 해야할까?
❗ value 값이 궁금하다면 arr[i], obj[prop]과 같이 key를 이용하는 방식을 사용해 간접적으로 접근할 수 있다.

```js
var arr = ['a', 'b', 'c']; 
for (var i in arr) { 
    console.log(i, arr[i]); 
} 
// 0 a, 1 b, 2 c 
var obj = { a: 1, b: 2, c: 3 }; 
for (var prop in obj) { 
    console.log(prop, obj[prop]); 
} 
// a 1, b 2, c 3
```

## 🍒 for of
- 배열 순환
- 반복 가능한 객체(iterable)를 순회할 수 있도록 해줌
- Array, Map, Set, arguments 등이 해당됨(Object는 해당 X)

> for...of 반복문은 ES6에 추가된 새로운 컬렉션 전용 반복 구문입니다.  for...of구문을 사용하기 위해선 컬렉션 객체가 [Symbol.iterator]속성을 가지고 있어야만합니다(직접 명시 가능)

- iterator속성이 있는 객체인 Array, Map, Set, String, TypedArray, arguments 등의 값을 반복 할 수 있으며, String 문자열에도 적용할 수 있다.
- 객체는 이에 해당하지 않기 떄문에 for...of 문을 사용하면 TypeError를 발생시킨다.

```js
// Array 
for (const val of ['a', 'b', 'c']) { 
    console.log(val); // 'a','b','c' 
    } 
// String 
for (const val of 'abc') { 
    console.log(val); // 'a','b','c' 
    } 
// Object 
for ( let val of {1 :'a', 2 :'b', 3 :'c'} ) { 
    console.log(val); // TypeError: object is not iterable 
    }
```

```js
var arr = [1, 2, 3];

for (var item of arr) {
  console.log(item); // 1, 2, 3
}
```
배열 순환이 잘 되는 것을 확인할 수 있다. 여기서 반대로 for in을 하게 된다면?
```js
var arr = [1, 2, 3];

for (var item in arr) {
  console.log(item); // 0, 1, 2
}
```
자바스크립트에서는 배열도 객체이기 때문에 그 객체의 키값에 해당하는 게 나온다.
배열로 따지면 index라고 생각하면 된다.

### 💡 정리
> for ...in //객체 순환 - loops through the properties of an object
> for ... //배열 값 순환 - loops through the values of an iterable object

### for...in문
- Iterable object이면 모두 대상으로 함
- 객체의 모든 열거 가능한 속성에 대해 반복
- key를 리턴(배열의 경우에는 index)

### for...of문
- [Symbol.iterator]속성을 가지는 collection만 대상으로 함
- Iterable object이지만, prototype chain에 의한 Iterable은 대상에서 제외
-> Array, Map, Set, String, TypedArray, arguments 등
- value를 리턴

정리하자면, 둘의 가장 큰 차이점은 for...in은 객체(Object)의 key를 순회하고, for...of는 iterable객체의 value를 순회하는데 사용한다는 것이다.


## 🍒 3-5 Object(객체) 반복문 - for ...in
```js
let value=[10,1,100,200,300,10];
let value2 = {
    피카츄 : 1,
    라이츄 : 2,
    파이리 : 3,
    꼬부기 : 4,
    버터플 : 5,
    야도란 : 6,
    피죤투 : 7,
    또가스 : 8,
    메타몽 : 9,
};

let value3 = {
    피카츄 : 10,
    라이츄 : 20,
    파이리 : 30,
    꼬부기 : 40,
    버터플 : 50,
    야도란 : 60,
    피죤투 : 70,
    또가스 : 80,
    메타몽 : 90,
}

for (let i in value){
    console.log(i);
}
>0
>1
>2
>3
>4
>5

for (let i in value2) {
    console.log(i, value2[i]);
}
> 피카츄, 1
> 라이츄, 2
> 파이리, 3
> 꼬부기, 4
> 버터플, 5
> 야도란, 6
> 피죤투, 7
> 또가스, 8
> 메타몽, 9
for (let i in value3) {
    console.log(i, value3[i]);
    console.log(value3[i]);
}
> 피카츄, 10
> 라이츄, 20
> 파이리, 30
> 꼬부기, 40
> 버터플, 50
> 야도란, 60
> 피죤투, 70
> 또가스, 80
> 메타몽, 90


```
## 🍒 3-6. array(배열) 반복문 - for...of
```js
for (let i of [10,20,30,40]) {
    console.log(i);
}
> 10
> 20
> 30
> 40

for(let[i, j]of Object.entries(value3)){
    console.log(i);
    console.log(j);
}
```
# 구조분해 할당
## 🍒 구조분해 할당을 통해 하나씩 뽑아내기
```js
let [a,b] = [10,20]
a
>10
b
>20
```

```js
for (let [[a, b], j] of [[[1, 2], 2], [[1, 2], 4]]) {
    console.log(a, b, j);
}
> 1 2 2
> 1 2 4
```

```js
let [a,b, ...c] =[10,20,30,40,50]
c
>[30,40,50]
```
마지막에 있는 요소만 가능

## 🍒 객체 구조분해 할당하기
❗ 객체를 구조분해 해보자!
```js
let {name, age} = {name:'hojun', age: '10'}

 //위 아래 같은 코드(짧은 코드)
let obj = {name: 'hojun', age:'10'}
let{name.age}=obj
//위 아래 같은 코드(긴 코드)

let {name2, age2} = {name2:'hojun', height2:'20', age2:'10'}
//매칭할 수 있음

let{name3, ...rest} = {name3:'hojun', height3:'20', age3:'10'}
rest
> {height3: '20', age3: '10'} //객체 구조분해
```

```js
let a = [10,20,30]
> undefined
a.push(2)
> 4
a.unshift(5)
> 5
let = [1, a, 2]
> (3) [1, Array(5), 2] //push와 unshift를 이용하여 배열에 요소 추가하기
let b = [1, ...a, 2]
> undefined
b
> (7) [1, 5, 10, 20, 30, 2, 2]
let c = [1, a, 2]
> undefined
> c
(3) [1, Array(5), 2]
let d = [1, ...a, 20]
> undefined
d
> (7) [1, 5, 10, 20, 30, 2, 20] //구조분해 할당을 이용하여 배열에 요소 추가하기
```

❓ 구조분해 할당은 또 언제 사용할까?
❗ Math.max 함수를 이용할 때 배열 이름만 쓰면 안되고, ...배열 형식으로 써야 제대로 작동
```js
let arr = [3,5,1,10,8,7]
> undefined
Math.max(arr)
> NaN
Math.max(...arr)
> 10
let arr1 = [1,-2, 3, 4]
let arr2 = [8, 3, -8, 1]
> undefined
Math.max(...arr1, ...arr2)
> 8
[100, 200, ...arr1, ...arr2]
> (10) [100, 200, 1, -2, 3, 4, 8, 3, -8, 1]
```

### 💡 문제
다음 array의 각 자리수의 합을 구하세요.
```js
변수 = [15, 22, 33, 111, 22]
```

1. 풀이1
```js
변수 = [15, 22, 33, 111, 22]
변수.map(x=>'' + x) //['15', '22', '33', '111', '22'] -> join, split() 함수를 쓰기위해서 문자열로 바꿔줌
    .join("")   //'15223311122'
    .split('') //['1', '5', '2', '2', '3', '3', '1', '1', '1', '2', '2']
    .map(x=>parseInt(x)) // [1, 5, 2, 2, 3, 3, 1, 1, 1, 2, 2]
    .reduce((a,b)=>(a+b),0) //reduce 함수를 사용해서 전체 원소 더한 값 구하기
```
* reduce 메서드란?
- 배열의 각 요소에 대해 주어진 리듀서(reducer)함수를 실행하고, 하나의 결과값을 반환합니다.
❗ reduce 함수를 이용해서 배열의 전체 합을 구해보자
```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
```

2. 풀이2
- 메서드 사용하지 않고 구하기
```js
let sum = 0
for(let i of 변수){
    let s = '' + i;
    for(let j of s.split('')){
        sum += +j
    }
}
console.log(sum)
```
풀이3
```js
var str1 = [11, 22, 33, 111, 2].join('');
let result = 0;
for (let i = 0; i < str1.length; i++) {
    result += parseInt(str1[i]);
}
```

함수 사용하는 이유
1. 재사용성
2. 코드 구조 파악 용이(아키텍처를 파악하기에 용이하다)
```js
function 안녕(){
    console.log('hello world')
}
for(let i = 0; i<5; i++){
    안녕();
}
```
객체 안에 있는 함수 -> 메서드(.을 찍어서 접근하는 함수)
.을 찍어서 접근하지 않는 함수를 그냥 함수라고 부름

# Scope
전역변수, 지역변수
같은 변수를 사용하면 안되기 때문에 변수가 구분이 됨

```js
for(var i = 0; i<5; i++){
    console.log(i);
}
console.log(i); //사용 가능
//var은 다른 변수들과 다르게 지역변수에서 선언했어도 전역변수 영역에서 사용할 수 있음...
```
```html
<script src="a.js"></script>
<script src="b.js"></script>
<!-- 둘 변수도 서로 영향 미침 -->
```

# for of
- 구조분해 할당을 이용한 for of
```js
for(let i of [[1,2],[3,4],[5,6]]){
    console.log(i);
}
>[1,2]
>[3,4]
>[5,6]

for(let [i,j] of[[1,2],[3,4],[5,6]]){
    console.log(i);
}
>0
>1
>2

for(let i in {one: 1, two:2, three:3}){
    console.log(i);
}

let [i,j,k]=[10,20,30]
k
>30
let[aa,bb]=[10,[10,20]]
b
>[10,20]

let {name, age} = {name: 100, age:10, height:1}
name
> 100

let [x,y] = [10,20,30,40]
y
> 20
let [x, ...y] = [10,20,30,40]
y
> [20,30,40]
```




