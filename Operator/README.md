# 연산
```javascript
x = x + 2
x += 2 //간단하게 작성 

x = x**2
x **= 2 //간단하게 작성 
```
- 위와 같은 연산들은 `할당연산`이라고 부름

### 전위연산자
```javascript
++x //전위 증가 연산자
--x //전위 감소 연산자
```
- ++x -> x의 값을 증가시키고 나서 x를 반환
### 후위연산자
```javascript
x++ //후위 증가 연산자
x-- //후위 감소 연산자
```
- x++ -> x의 값을 반환하고 나서 x값 증가

### 문제
3과 5의 배수를 구해보자!
```javascript
let x = 15
document.write(`i % 3 == 0 || i % 5 == 0 : ${i % 3 == 0 || i % 5 == 0} <br>`);
```

```javascript
let s = 0
Array(100).fill(0).map((_, index)=>index).filter(i => i % 3 ==0 || i % 5 == 0).forEach(x => s += x)
```
이렇게도 풀어볼 수 있음!
