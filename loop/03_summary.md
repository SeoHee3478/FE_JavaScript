# 함수
## 🍒 익명함수, 기명함수(전 시간 복습)

모던 자바스크립트 167page 화살표 하ㅏㅁ수는 항상 익명 함수로 정의한다
함수의 이름이 있는 함수를 기명함수
함수의 이름이 업슨 함수를 익명함수(anonymous function) 또는 무명 함수

```js
function test1(){
    return 'hello 1'
}

test.name
>'test'

let test2 = function(){
    return 'hello 2'
}
test1.name
>'test'

let test3 = () => 'hello3'
test3.name
>'test3'

```
## 🍒 Call by value, reference(전 시간 복습)
call by value - 값 전달
call by reference - 주소 값 전달
javascript는 주소 값 전달 하는 것처럼 보이지만 모두 값 전달임

# 클로저
- 폐쇄된 공간 안에 데이터에 접근하기 위한 테크닉

- 지역 스코프에서 값을 찾고, 없으면 그 밖에 있는 스콮에서 찾고, 계속해서 찾아 올라가 전역 스코프까지 찾아보는 것을 스코프 체이닝
- 내부 렉시컬 환경에서 찾고 없으면 전역 렉시컬 환경에서 
- 함수가 수행된 이후에도 상위함수의 렉시컬 환경에 접근 가능
- 클로저(closure)는 내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것을 가르킨다. 클로저는 자바스크립트를 이용한 고난이도의 테크닉을 구사하는데 필수적인 개념으로 활용된다.  


`사용하는 이유` - 변수 은닉, 메모리 효율, 코드효율(완전성)을 극대화
```js
function test(){
    var x = 100;
    console.log(x);//100
    function test2(){
        var x = 1000;
        console.log(x)//1000
    }
    test2()
}
test()
```

클로저 - 알맞은 함수를 찍어내기 위해서 사용하는 것
```js
function 제곱(x){
    function 승수(y){return y**x;
    }
    return 승수

}

let 제곱2 = 제곱(2);
let 제곱3 = 제곱(3);

제곱2(5)
>25
```

- 함수 내부에서 선언해야 한다. 호출된 위치는 상관 없다.
```js
const x = 100; //b가 참조하는 변수

function a() {
  const x = 1;
  b(); //호출 위치는 무시해도 될 것
}

function b() {
  console.log(x); //b가 참조하는 변수는 첫번째 전역 변수
}

a(); // 100
b(); // 100
```
- `렉시컬 스코프` 함수가 호출된 위치는 중요하지 않다. 함수가 선언된 위치가 중요하다 

```js
let x = 10;
function test4(){
    x = 100;
}
test4()
x
>10
```

```js
function 승수제조기(){
    let value = 0;
    function 승수(){
        return ++value**2
    }
    return 승수
}

let 승 = 승수제조기();
승()
승()
승()
value //출력할 수 없습니다. 은닉화가 된거죠.

```
# 생성자 함수
유사한 객체를 여러 개 만들어야 할 때가 생기곤 합니다. 복수의 사용자, 메뉴 내 다양한 아이템을 객체로 표현하려고 하는 경우 new 연산자와 생성자 함수를 사용한다. 
```js
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("보라");

console.log(user.name); // 보라
console.log(user.isAdmin); // false
```

new User(...)를 써서 함수를 실행하면 아래와 같은 알고리즘이 동작합니다.

1. 빈 객체를 만들어 this에 할당합니다.
2. 함수 본문을 실행합니다. this에 새로운 프로퍼티를 추가해 this를 수정합니다.
3. this를 반환합니다.

예시를 이용해 new User(...)가 실행되면 무슨 일이 일어나는지 살펴 보도록 하겠습니다.
```js
function User(name) {
  // this = {};  (빈 객체가 암시적으로 만들어짐)

  // 새로운 프로퍼티를 this에 추가함
  this.name = name;
  this.isAdmin = false;

  // return this;  (this가 암시적으로 반환됨)
}
```
이제 let user = new User("보라")는 아래 코드를 입력한 것과 동일하게 동작합니다.
```js
let user = {
  name: "보라",
  isAdmin: false
};
```

- 손 쉽게 사용자 객체를 만들 수 있음, 객체 리터럴 문법으로 일일이 객체를 만드는 방법보다 훨씬 간단하고 일기 쉽게 객체를 만들 수 있음
- 모든 함수는 생성자 함수가 될 수 있음
- new를 붙여 실행한다면 어떤 함수라도 위에 언급된 알고리즘이 실행된다. 첫글자가 대문자인 함수는 new를 붙여 실행해야 한다.
- function을 대문자로 쓰면 클래스라고 오해하는경우가 많음...
회사에서 생성자 function을 어떻게 쓰는지 유의해서 볼 것


```js
function User2(name) {
  this.name = name;
  console.log(this.name);
}

let user2 = User2("호준");//호준
console.log(user2.name)//안나옴 (휘발되서 안나옴)
```
인스턴스를 만들기 위해 사용하는 거라면 new 사용
new 를 안쓰면 휘발 됨

지금은 syntax sugar가 아님
클래스에 새로운 기능이 많이 도입이 되었음

```js
new User("서희") === new User("서희")
서희
서희
false
User("호준") == User("호준")
호준
호준
true
```

this는 그 유저의 고유한 메모리 주소
```js
function 회원(name){
    this.이름 = 이름;
    this.isAdmin = false;
}
function 회원(name){
    this.이름 = 이름;
    this.isAdmin = false;
}
function 회원(입력이름, 입력나이, 입력성){
    this.이름 = 입력이름;
    this.나이 = 입력나이;
    this.성 = 입력성;
}

let 유저1 = new 회원('호준', 10, '남성');
let 유저1 = new 회원('호상', 20, '남성');
let 유저1 = new 회원('홍길동', 30, '여성');
let 유저1 = new 회원('호준', 10, '남성');
```

생성자는 객체를 생성해주는 것이라고 생각하면 편하다!