
# λ³μ
### π μ§λλ² λ³΅μ΅ λΆλΆ
- λ³μλ βλ³ν  μ μλ μβ, βλ³ν  μ μλ μ λ³΄βλΌλ λ»
- λ³μλ μ£ΌκΈ°μ΅μ₯μΉ(RAM)μ μ μ₯λ¨

1. μμμλ£ν
    - λΆ, μ«μ, λ¬Έμμ΄, μ¬λ³Ό
    - κ°μ΄ ν λΉ λ  λ, λ³΅μ¬λμ΄μ ν λΉ(Call by Value)
2. κ°μ²΄ μλ£ν
    - κ°μ²΄
    - κ°μ΄ ν λΉ λ  λ, κ°μ΄ μμΉν μ£Όμλ₯Ό λ³΅μ¬(Call by Reference)

### μ£Όμμ κ°μ λ³΅μ¬νλ κ²μ μ°¨μ΄
```javascript
var myObj = {name: 'μ¬ν'};
var myObj2 = myObj; //κ°μ²΄μ κ°μ ν λΉν΄μ€

myObj2
>{name: 'μ¬ν'}
myObj.name = 'λνλ'; //myObjμ name κ°μ λ³κ²½ν¨
>'λνλ' 
myObj //μ λ³κ²½ λμλμ§ νμΈ
>{name: 'λνλ'} 
myObj2 
>{name:'λνλ'}//myObjμ κ°μ ν λΉλ°μ myObj2μ nameκ°λ λ³κ²½λ¨(κ°μ΄ μμΉν μ£Όμλ₯Ό λ³΅μ¬νκΈ° λλ¬Έμ)
```

#### true κ°μ κ°λ κ²
```javascript
[] //λΉκ°μ²΄
```

#### false κ°μ κ°λ κ²
```javascript
0, '', undefined, null, NaN //λΉκ°μ²΄
```
<br>
<br>


# λ°°μ΄
- λ°°μ΄μ κ° κ°μ μμ(element) νΉμ μμλΌκ³  λΆλ₯Έλ€.


```javascript
var myArr2 = new Array(5); //μμ±μλ‘ λ°°μ΄ μμ±
myArr2
>(5) [λΉμ΄μμ * 5]

var myArr2 = [5,3,4,5];
myArr2[1]; 
//κ°μ²΄ μλ£νλ μ΄λ κ² μ κ·Ό κ°λ₯
//λ¬Έμμ΄μμλ μ΄λ κ² μ κ·Ό κ°λ₯
Ex) 
'hello'[2]
>'l'

μμ νλ€λ©΄
'hello'[2] = 'p';
>'p'

```
## π λ°°μ΄μ νΉμ§
- `λ°μ΄ν°μ μ§ν©`. μ¬λ¬κ°μ κ°μ νλμ μ΄λ¦μΌλ‘ λ¬Άμ΄ μ¬μ©ν  μ μκ² λμμ€λλ€.
- λ°°μ΄μ κ° κ°μ `μμ(element)` νΉμ `μμ` λΌκ³  λΆλ¦λλ€.
- λ°°μ΄μ ν¬κΈ°λ `length νλ‘νΌν°`λ₯Ό ν΅ν΄ μ μ μμ΅λλ€.
- λ°°μ΄μ μμ±μ ν¨μμ μ«μλ₯Ό νκ°λ§ λ£μΌλ©΄ μΈμ€ν΄μ€μ κΈΈμ΄λ₯Ό, μ¬λ¬ μ«μλ₯Ό λ£μΌλ©΄ λ°°μ΄μ μμλ₯Ό λ»ν©λλ€.
- λ°°μ΄μλ λ¦¬ν°λ΄ ννμ΄ μμ΅λλ€.( [ ] )
- κ°κ΄νΈ + μΈλ±μ€λ₯Ό ν΅ν΄ κ° μμμ μ κ·Ό ν  μ μμΌλ©°, μμμ κ°μ μ μ₯ ν  μλ μμ΅λλ€. μ¬μ§μ΄ μ‘΄μ¬νμ§ μλ μμμλ μ κ·Όμ΄ κ°λ₯ν©λλ€.
- λ¦¬ν°λ΄ μμ±κ³Ό λμμ μμμ μ κ·Ό ν  μλ μμ΅λλ€. ([1,2,3,][0] === 1)

## π pop()κ³Ό push()
### pop()
- λ°°μ΄μμ λ§μ§λ§ μμλ₯Ό μ κ±°νκ³  κ·Έ μμλ₯Ό λ°νν©λλ€.
- μ κ±° ν μμλ₯Ό λ³΄κ΄νκ³  μΆλ€λ©΄ λ³μμ λ΄μ λ μ μμ΅λλ€.
- λΉ λ°°μ΄μ popμ νΈμΆνλ©΄ undefinedλ₯Ό νΈμΆν©λλ€.

### push()
 - λ°°μ΄μ λ§μ§λ§ μμλ‘ μΈμλ‘ μ λ¬ν κ°μ μΆκ°νκ³  μλ‘μ΄ λ°°μ΄μ κΈΈμ΄λ₯Ό λ°νν©λλ€.

 ```javascript
 myArr
>(5) [1,2,3,4,5]

myArr.pop(); //λ°°μ΄μ λ§μ§λ§ μμ μ κ±°νκ³  λ°ννκΈ°
>5

myArr 
>(4) [1,2,3,4] //λ°°μ΄μ λ§μ§λ§ μμμΈ 5κ° λΉ μ§ λͺ¨μ΅

myArr.push(0); //λ°°μ΄μ λ§μ§λ§ μμμ μΈμ μ λ¬
>(5) [1,2,3,4,0]

var val = []; //λΉ λ°°μ΄ μμ±
>undefined

val.pop(); //λΉ λ°°μ΄μμ popνλ©΄ undefined
>undefined
```

### π‘ λ¬Έμ 
μ² μκ° μ¬λΆλ¦μ λ°μμ΅λλ€! μ΄λ¨Έλκ»μ λ§λ, μν, λ°°μΆλ₯Ό μ¬μ€λΌκ³  νλκ΅°μ. μ§μ μλλ μ€λ νμν μ¬λ£λ λ°°μΆλΌκ³  ν©λλ€! μ΄λ¨Έλμκ² λ°°μΆλ₯Ό μ£ΌμΈμ!
```javascript
var μ² μ = ['λ§λ', 'μν', 'λ°°μΆ'];
μ² μ
>(3) ['λ§λ', 'μν', 'λ°°μΆ']
var μλ§ = μ² μ.pop();
μλ§
>'λ°°μΆ'
```
λλ
```javascript
var μ² μ = ['λ§λ', 'μν', 'λ°°μΆ'];
μ² μ
>(3) ['λ§λ', 'μν', 'λ°°μΆ']
var μλ§ = []; //μλ§λ₯Ό λ°°μ΄λ‘ μ μΈν΄μ€μΌν¨
μλ§.push(μ² μ.pop());
```

## π splice()
- κΈ°μ‘΄μ λ°°μ΄μμ μλ μμλ₯Ό μ­μ νκ±°λ μμ νκ±°λ μ­μ ν  μ μλ λ©μλ

```javascript
var arr=[1,2,3];
arr.splice();
```

### π spliceλ‘ λ°°μ΄ μμ μ­μ νκΈ°

```javascript
var avengers=['spiderman', 'ironman', 'hulk', 'thor'];
avengers.splice(1, 1) //avengersλ°°μ΄μμ μ²«λ²μ§Έμμμμ νλλ§ μ­μ νκ² λ€!(λ°°μ΄ μΈλ±μ€λ 0λΆν° μΈλ κ²μ μ£Όμ)
```
> κ²°κ³Όκ°: ['ironman'] μ­μ  <br>
> -> spiderman, hulk, thor λ§ λ°°μ΄μ λ¨μ μλ€.

```javascript
var avengers=['spiderman', 'hulk', 'thor'];
avengers.splice(1,2)
```
> κ²°κ³Όκ°: ['hulk', 'thor'] μ­μ <br>
> -> spiderman λ§ λ°°μ΄μ λ¨μ μλ€.

### π spliceλ‘ λ°°μ΄ μμ μΆκ°νκΈ°

```javascript
var avengers=['spiderman', 'ironman', 'hulk', 'thor'];
avengers.splice(2, 0, 'blackwidow') //avengersλ°°μ΄μμ λλ²μ§Έ μμμμ blackwidow μΆκ°νκ² λ€! 
```
> κ²°κ³Όκ°: ['spiderman', 'ironman','blackwidow', 'hulk', 'thor']
> - splice λλ²μ¨° μμμ 0μ λ£μΌλ©΄ μΆκ°ν  μ μμ

### π spliceλ‘ λ°°μ΄ λ³κ²½νκΈ°
```javascript
var avengers=['spiderman', 'ironman','blackwidow', 'hulk', 'thor']
avengers.splice(2,1,'wandar')
//2λ²μ§Έ μμΉμ μλ ironmanμ λΉΌκ³  wandarλ₯Ό λ£μ΄μ€λΌ
```
> κ²°κ³Όκ°: ['spiderman', 'wandar','blackwidow', 'hulk', 'thor']
```javascript
avengers.splice(2,3,'dr.strange'); //λλ²μ§Έ λΆν° 3κ°μ§ μμλ₯Ό λΉΌκ³  dr.strangeλ₯Ό λ£μ΄μ€λΌ
```
> κ²°κ³Όκ°: ['spiderman', 'wandar','dr.strange']

> μ²«λ²μ§Έ μΈμλ μμκ°μ΄ λ€μ΄κ° μ μμ§λ§(μμκ°μ΄ λ€μ΄κ°λ€λ©΄ λ€μμ μμλ₯Ό μ), λλ²μ§Έ μΈμλ μμκ°μ΄ λ€μ΄κ° μ μμ

### π‘ λ¬Έμ 
```javascript
var fish = ['μ μ΄λ¦¬', 'κ³ λ±μ΄', 'λκ³ λ', 'μ°ΈμΉ', 'κ³ λμμ΄', 'μ½λΌλ¦¬'];
        // 1. splice λ₯Ό μ΄μ©ν΄ μ½λΌλ¦¬λ₯Ό μ κ±°ν΄λ³΄μΈμ
        // 2. μ°ΈμΉ λ€μμ λ€κΈλ°λ¦¬λ₯Ό μΆκ°ν΄λ³΄μΈμ
        // 3. λκ³ λλ₯Ό μ κ±°νκ³  μ₯λκ³Ό κ°μΉλ₯Ό μΆκ°ν΄λ³΄μΈμ
```
1. splice λ₯Ό μ΄μ©ν΄ μ½λΌλ¦¬λ₯Ό μ κ±°ν΄λ³΄μΈμ 
```javascript
fish.splice(-1,1)
```
- 1μ λ£μΌλ©΄ κ°μ₯ λ§μ§λ§ μμ μμΉλ₯Ό κ°λ₯΄ν΅λλ€!

2. μ°ΈμΉ λ€μμ λ€κΈλ°λ¦¬λ₯Ό μΆκ°ν΄λ³΄μΈμ
```javascript
fish.splice(4,0,'λ€κΈλ°λ¦¬')
```

3. λκ³ λλ₯Ό μ κ±°νκ³  μ₯λκ³Ό κ°μΉλ₯Ό μΆκ°ν΄λ³΄μΈμ
```javascript
fish.splice(2, 1, 'μ₯λ', 'κ°μΉ')
```

## π slice()
- μλ³Έμ κ·Έλλ‘ μ μ§νκ³ , μ νν λΆλΆλ§ λ³΅μ¬ν΄μ¨λ€.
- slice() : λ κ°μ μΈμλ₯Ό μ λ¬νμ¬ λ°°μ΄μμ μλ μμλ₯Ό μλ‘μ΄ λ°°μ΄λ‘ λ°νν©λλ€. μλ³Έ μμκ° λ°λμ§ μλκ²μ΄ ν¬μΈνΈ! νΉν λ λ²μ§Έ μΈμμ ν΄λΉνλ μΈλ±μ€μ μμ΄νμ ν¬ν¨νμ§ μμ΅λλ€.
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
- splice μΈμλ‘ μμκ°μ μ§μνλ€.

### π‘ λ¬Έμ 
λ€μ λ°°μ΄μμ λ¬Όκ³ κΈ°κ° μλκ²μ sliceλ‘ μ νν΄ μ½μλ‘ μΆλ ₯ν΄ λ³΄μΈμ.
```javascript
var fish = ['μ μ΄λ¦¬', 'κ³ λ±μ΄', 'λκ³ λ', 'μ°ΈμΉ', 'κ³ λμμ΄', 'μ½λΌλ¦¬'];
        
```

```javascript
fish.slice(2,3); //λκ³ λ
```
- λκ³ λ λΉΌκΈ°
```javascript
fish.slice(5); //μ½λΌλ¦¬
fish.slice(-1); //μ½λΌλ¦¬
```
- μ½λΌλ¦¬ λΉΌκΈ°

## π sort
- λ°°μ΄μ μ λ¦¬νλ λ°©λ²
- μλ³Έ λ°°μ΄μ λ°κΎΌλ€
- μνλ²³ μμ, κ°λλ€ μμλ‘ λ³κ²½λλ€.

```javascript
avengers = ['spiderman', 'ironman', 'hulk', 'thor']
avengers.sort(); // [ 'hulk', 'ironman', 'spiderman', 'thor']
```
- abc μμλλ‘ μ λ ¬ λλ.

> #### π¨ μ£Όμμ ! μ«μλ μ΄λ»κ² μ λ ¬ν κΉ?
```javascript
var arrNum = [13, 9, 10, 3, 44, 21]
arrNum.sort(); //[10,13,21,3,44,9]
```
λ¬Έμμ΄λ‘ λ°κΎΈκ³  λ¬Έμμ μ λμ½λ κΈ°μ€μΌλ‘ μ λ ¬νκ² λλ€. -> μ°λ¦¬μ μμκ³Όλ λ€λ₯΄κ² μ λ ¬λμ΄μ§! <br>
β κ·Έλ λ€λ©΄, μμ μ«μλΆν° μ λ ¬νλ €λ©΄ μ΄λ»κ² ν΄μΌν κΉ?

β `λΉκ΅ν¨μ`λ₯Ό μ¬μ©ν΄λ³΄μ!<br>
μ«μν λ°μ΄ν° μ λ ¬μ λ¨μ μ ν΄κ²°νκΈ° μν΄ λΉκ΅ ν¨μ(compareFunction)λ₯Ό μ¬μ©ν  μ μλ€.
#### π μ€λ¦μ°¨μ μ λ ¬
```javascript
arrNum.sort(
    function(a,b){
        return a-b;
    }
); // [3, 9, 10, 13, 21, 44]
```
compare ν¨μμ λ°νκ°μ λν΄μ λ°°μ΄μ΄ μ λ ¬μ΄ λλ€!
aμ b λκ°μ§λ₯Ό λΉκ΅νκ² λλ€.

#### π λ΄λ¦Όμ°¨μ μ λ ¬

```javascript
arrNum.sort(
    function(a,b){
        return b-a;
    }
); // [3, 9, 10, 13, 21, 44]
```

#### π μ€λ¦μ°¨μ μ λ ¬(κΈΈκ² μ΄ λ²μ )
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

#### π λ΄λ¦Όμ°¨μ μ λ ¬(κΈΈκ² μ΄ λ²μ )
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

### π‘ λ¬Έμ 
  λ€μ λ°°μ΄μμ sort ν¨μλ₯Ό μ΄μ©ν΄ μμμ productμ κ°μ κΈ°μ€μΌλ‘ κ°λλ€μμΌλ‘ μ λ ¬ν΄λ³΄μΈμ.
  ```javascript
        var studentList = [
            {
                id: 1, product: 'μ°ν', stock: 10
            },
            {
                id: 2, product: 'μμ’μ΄', stock: 33
            },
            {
                id: 3, product: 'μ²΄μ‘λ³΅', stock: 2
            },
            {
                id: 4, product: 'λ§μ°ν', stock: 0
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
κ°μ²΄λ₯Ό λΉκ΅ν΄μ€ λλ κ°μ²΄λͺ.μμ±κ°μΌλ‘ κ°μ λΉκ΅ν΄μ£Όλ©΄ μνλ κ°μ μ»μ μ μλ€.
μμ μ½λκ° λλ¬΄ κΈΈλ€λ©΄ 3ν­μ°μ°μλ‘λ κ°λ¨νκ² ννν  μ μλ€.

```javascript
result= studentList.sort(
    function(a,b){
        return a.product < b.product ? -1 : a.product > b.product? 1: 0;
    });
```

## π sort()μ reverse() ν¨μ
```javascript
var fish = ['μ μ΄λ¦¬','κ³ λ±μ΄', 'λκ³ λ', 'μ°ΈμΉ', 'κ³ λμμ΄','μ½λΌλ¦¬'];
fish.sort(); // γ±γ΄γ· μμΌλ‘ λ°°μ΄
>(6) ['κ³ λ±μ΄', 'κ³ λμμ΄', 'λκ³ λ', 'μ μ΄λ¦¬', 'μ°ΈμΉ', 'μ½λΌλ¦¬']
fish.reverse(); // γ±γ΄γ· μ­μμΌλ‘ λ°°μ΄
>(6) ['μ½λΌλ¦¬', 'μ°ΈμΉ', 'μ μ΄λ¦¬', 'λκ³ λ', 'κ³ λμμ΄', 'κ³ λ±μ΄']
fish.sort().reverse(); //νλ²μ μμ±νλ κ²λ κ°λ₯ν¨, sort ν¨μ μμ²΄κ° λ°°μ΄μ λ°ννκΈ° λλ¬Έμ
>(6) ['μ½λΌλ¦¬', 'μ°ΈμΉ', 'μ μ΄λ¦¬', 'λκ³ λ', 'κ³ λμμ΄', 'κ³ λ±μ΄']
```

μ°Έκ³  λ§ν¬

https://mylife365.tistory.com/307
