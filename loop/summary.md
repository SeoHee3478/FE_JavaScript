# 반복문
기본적인 for 문 식
```js
for (let index = 0; index < 5; index++) {
    console.log(index);
}

>0
>1
>2
>3
>4
```
배열을 모두 순회하는 코드
```js
let sample = ['A', 'B','C', 'DD', 'EE']
for(let i = 0; i<sample.length;i++){
    console.log(sample[i]);
}

>A
>B
>C
>DD
>EE 
```

무한반복 코드
```js
let i = 0;
for(;;){}
```

평균 나이 구하기 코드
```js
for(let i = 0; i<age.lenth; i++){
    console.log(age[i]);
    sum = sum + age[i]; //sum += age[i]
}
sum/age.length
```

성비 구하기 코드
```js

```

8의 개수 구하기


나이 총합 구하기 코드
```js
data.map(i=>i['나이']).reduce((a,b)=>a+b,0)
```
가장 큰 나이 
```js
let 가장큰나이 = 0
for(let i = 0; i<data.length;i++){
    if(가장큰나이<data['나이']){
        가장큰나이 = data['나이'][]
    }
}
```
가장 작은 나이
```js
let 가장작은나이 = 0
for(let i = 0; i<data.length;i++){
    if(가장작은나이>data['나이']){
        가장작은나이 = data['나이'][]
    }
}
```
가장 작은 나이
```js
let arr = [21,17, 6,55]
Math.min(21,17,6,55)
//Math.min(arr)가 들어가면 구할 수 없음
```
l이 들어간 개수 구하기
```js
txt = 'hello world'
count = 0;
for(let i = -; i< txt.length; i++){
    if(txt[i]=='l'{
        count++;
    })
}
console.log(count);
```

숫자문자열 더하기
```js
let b = '12390812476'
b.split()
let sum = 0;
for(i=0;i<b.length;i++){
    sum = sum + parseInt(b[i]);
}
console.log(sum);
>>43
```

짝수들의 합
```js
result = 0
for(let i = 0; i<=100;i++){
    if(i%2 == 0){
        
        result = result + i
    }
}
console.log(result)
```
