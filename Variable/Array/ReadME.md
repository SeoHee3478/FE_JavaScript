
# 변수
### 📌 지난번 복습 부분
- 변수는 ‘변할 수 있는 수’, ’변할 수 있는 정보’라는 뜻
- 변수는 주기억장치(RAM)에 저장됨

1. 원시자료형
    - 불, 숫자, 문자열, 심볼
    - 값이 할당 될 때, 복사되어서 할당(Call by Value)
2. 객체 자료형
    - 객체
    - 값이 할당 될 때, 값이 위치한 주소를 복사(Call by Reference)

### 주소와 값을 복사하는 것의 차이
```javascript
var myObj = {name: '재현'};
var myObj2 = myObj; //객체에 값을 할당해줌

myObj2
>{name: '재현'}
myObj.name = '대표님'; //myObj에 name 값을 변경함
>'대표님' 
myObj //잘 변경 되었는지 확인
>{name: '대표님'} 
myObj2 
>{name:'대표님'}//myObj의 값을 할당받은 myObj2의 name값도 변경됨(값이 위치한 주소를 복사하기 때문에)
```

#### true 값을 갖는 것
```javascript
[] //빈객체
```

#### false 값을 갖는 것
```javascript
0, '', undefined, null, NaN //빈객체
```
<br>
<br>


# 배열
- 배열의 각 값은 원소(element) 혹은 요소라고 부른다.


```javascript
var myArr2 = new Array(5); //생성자로 배열 생성
myArr2
>(5) [비어있음 * 5]

var myArr2 = [5,3,4,5];
myArr2[1]; 
//객체 자료형도 이렇게 접근 가능
//문자열에서도 이렇게 접근 가능
Ex) 
'hello'[2]
>'l'

수정한다면
'hello'[2] = 'p';
>'p'

```
## 🍒 배열의 특징
- `데이터의 집합`. 여러개의 값을 하나의 이름으로 묶어 사용할 수 있게 도와줍니다.
- 배열의 각 값은 `원소(element)` 혹은 `요소` 라고 부릅니다.
- 배열의 크기는 `length 프로퍼티`를 통해 알 수 있습니다.
- 배열의 생성자 함수에 숫자를 한개만 넣으면 인스턴스의 길이를, 여러 숫자를 넣으면 배열의 원소를 뜻합니다.
- 배열에도 리터럴 표현이 있습니다.( [ ] )
- 각괄호 + 인덱스를 통해 각 원소에 접근 할 수 있으며, 원소에 값을 저장 할 수도 있습니다. 심지어 존재하지 않는 원소에도 접근이 가능합니다.
- 리터럴 생성과 동시에 원소에 접근 할 수도 있습니다. ([1,2,3,][0] === 1)

## 🍒 pop()과 push()
### pop()
- 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.
- 제거 한 요소를 보관하고 싶다면 변수에 담아 둘 수 있습니다.
- 빈 배열에 pop을 호출하면 undefined를 호출합니다.

### push()
 - 배열의 마지막 요소로 인자로 전달한 값을 추가하고 새로운 배열의 길이를 반환합니다.

 ```javascript
 myArr
>(5) [1,2,3,4,5]

myArr.pop(); //배열의 마지막 요소 제거하고 반환하기
>5

myArr 
>(4) [1,2,3,4] //배열의 마지막 요소인 5가 빠진 모습

myArr.push(0); //배열의 마지막 요소에 인자 전달
>(5) [1,2,3,4,0]

var val = []; //빈 배열 생성
>undefined

val.pop(); //빈 배열에서 pop하면 undefined
>undefined
```

### 💡 문제
철수가 심부름을 받았습니다! 어머니께서 마늘, 양파, 배추를 사오라고 하는군요. 집에 왔더니 오늘 필요한 재료는 배추라고 합니다! 어머니에게 배추를 주세요!
```javascript
var 철수 = ['마늘', '양파', '배추'];
철수
>(3) ['마늘', '양파', '배추']
var 엄마 = 철수.pop();
엄마
>'배추'
```
또는
```javascript
var 철수 = ['마늘', '양파', '배추'];
철수
>(3) ['마늘', '양파', '배추']
var 엄마 = []; //엄마를 배열로 선언해줘야함
엄마.push(철수.pop());
```

## 🍒 splice()
- 기존에 배열안에 있는 요소를 삭제하거나 수정하거나 삭제할 수 있는 메소드

```javascript
var arr=[1,2,3];
arr.splice();
```

### 📌 splice로 배열 원소 삭제하기

```javascript
var avengers=['spiderman', 'ironman', 'hulk', 'thor'];
avengers.splice(1, 1) //avengers배열에서 첫번째원소에서 하나만 삭제하겠다!
```
> 결과값: ['ironman'] 삭제 <br>
> -> spiderman, hulk, thor 만 배열에 남아 있다.

```javascript
var avengers=['spiderman', 'hulk', 'thor'];
avengers.splice(1,2)
```
> 결과값: ['hulk', 'thor'] 삭제<br>
> -> spiderman 만 배열에 남아 있다.

### 📌 splice로 배열 원소 추가하기

```javascript
var avengers=['spiderman', 'ironman', 'hulk', 'thor'];
avengers.splice(2, 0, 'blackwidow') //avengers배열에서 두번째 원소에서 blackwidow 추가하겠다! 
```
> 결과값: ['spiderman', 'ironman','blackwidow', 'hulk', 'thor']
> - splice 두번쨰 원소에 0을 넣으면 추가할 수 있음

### 📌 splice로 배열 변경하기
```javascript
var avengers=['spiderman', 'ironman','blackwidow', 'hulk', 'thor']
avengers.splice(2,1,'wandar')
//2번째 위치에 있는 ironman을 빼고 wandar를 넣어줘라
```
> 결과값: ['spiderman', 'wandar','blackwidow', 'hulk', 'thor']
```javascript
avengers.splice(2,3,'dr.strange'); //두번째 부터 3가지 원소를 빼고 dr.strange를 넣어줘라
```
> 결과값: ['spiderman', 'wandar','dr.strange']

> 첫번째 인자는 음수값이 들어갈 수 있지만(음수값이 들어간다면 뒤에서 순서를 셈), 두번째 인자는 음수값이 들어갈 수 없음

### 💡 문제
```javascript
var fish = ['정어리', '고등어', '돌고래', '참치', '고래상어', '코끼리'];
        // 1. splice 를 이용해 코끼리를 제거해보세요
        // 2. 참치 다음에 다금바리를 추가해보세요
        // 3. 돌고래를 제거하고 옥돔과 갈치를 추가해보세요
```
1. splice 를 이용해 코끼리를 제거해보세요 
```javascript
fish.splice(-1,1)
```
- 1을 넣으면 가장 마지막 원소 위치를 가르킵니다!

2. 참치 다음에 다금바리를 추가해보세요
```javascript
fish.splice(4,0,'다금바리')
```

3. 돌고래를 제거하고 옥돔과 갈치를 추가해보세요
```javascript
fish.splice(2, 1, '옥돔', '갈치')
```

## 🍒 slice()
- 원본은 그대로 유지하고, 선택한 부분만 복사해온다.
- slice() : 두 개의 인자를 전달하여 배열안에 있는 요소를 새로운 배열로 반환합니다. 원본 요소가 바뀌지 않는것이 포인트! 특히 두 번째 인자에 해당하는 인덱스의 아이템은 포함하지 않습니다.
```javascript
avengers=['spiderman', 'ironman', 'hulk', 'thor']
var arrNew = avengers.slice(1,3);
//arrNew  = ['ironman', 'hulk']
```
```javascript
avengers=['spiderman', 'ironman', 'hulk', 'thor']
var arrNew = avengers.slice(-2,-1);
//arrNew  = ['hulk']
```
- splice 인수로 음수값을 지원한다.

### 💡 문제
다음 배열에서 물고기가 아닌것을 slice로 선택해 콘솔로 출력해 보세요.
```javascript
var fish = ['정어리', '고등어', '돌고래', '참치', '고래상어', '코끼리'];
        
```

```javascript
fish.slice(2,3); //돌고래
```
- 돌고래 빼기
```javascript
fish.slice(5); //코끼리
fish.slice(-1); //코끼리
```
- 코끼리 빼기

## 🍒 sort
- 배열을 정리하는 방법
- 원본 배열을 바꾼다
- 알파벳 순서, 가나다 순서로 변경된다.

```javascript
avengers = ['spiderman', 'ironman', 'hulk', 'thor']
avengers.sort(); // [ 'hulk', 'ironman', 'spiderman', 'thor']
```
- abc 순서대로 정렬 된디.

> #### 🚨 주의점! 숫자는 어떻게 정렬할까?
```javascript
var arrNum = [13, 9, 10, 3, 44, 21]
arrNum.sort(); //[10,13,21,3,44,9]
```
문자열로 바꾸고 문자의 유니코드 기준으로 정렬하게 된다. -> 우리의 예상과는 다르게 정렬되어짐! <br>
❓ 그렇다면, 작은 숫자부터 정렬하려면 어떻게 해야할까?

❗ `비교함수`를 사용해보자!<br>
숫자형 데이터 정렬의 단점을 해결하기 위해 비교 함수(compareFunction)를 사용할 수 있다.
#### 📌 오름차순 정렬
```javascript
arrNum.sort(
    function(a,b){
        return a-b;
    }
); // [3, 9, 10, 13, 21, 44]
```
compare 함수의 반환값에 대해서 배열이 정렬이 된다!
a와 b 두가지를 비교하게 된다.

#### 📌 내림차순 정렬

```javascript
arrNum.sort(
    function(a,b){
        return b-a;
    }
); // [3, 9, 10, 13, 21, 44]
```

#### 📌 오름차순 정렬(길게 쓴 버전)
```javascript
arrNum.sort(function(a,b){
    if(a<b){
        return -1;
    }
    else if(a>b){
        return 1;
    }
    else{
        return 0;
    }
});
```

#### 📌 내림차순 정렬(길게 쓴 버전)
```javascript
arrNum.sort(function(a,b){
    if(a>b){
        return -1;
    }
    else if(a<b){
        return 1;
    }
    else{
        return 0;
    }
});
```

### 💡 문제
  다음 배열에서 sort 함수를 이용해 원소의 product의 값을 기준으로 가나다순으로 정렬해보세요.
  ```javascript
        var studentList = [
            {
                id: 1, product: '연필', stock: 10
            },
            {
                id: 2, product: '색종이', stock: 33
            },
            {
                id: 3, product: '체육복', stock: 2
            },
            {
                id: 4, product: '만연필', stock: 0
            }
        ]
```

```javascript
result= studentList.sort(
    function(a,b){
        if(a.product<b.product){
            return -1
        }
        else if (a.product>b.product){
            return 1
        }
        else {
            return 0;
        }
    });
```
객체를 비교해줄 때는 객체명.속성값으로 값을 비교해주면 원하는 값을 얻을 수 있다.
위에 코드가 너무 길다면 3항연산자로도 간단하게 표현할 수 있다.

```javascript
result= studentList.sort(
    function(a,b){
        return a.product < b.product ? -1 : a.product > b.product? 1: 0;
    });
```
참고 링크

https://mylife365.tistory.com/307
