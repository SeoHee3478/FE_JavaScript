# λ°°μ΄(Array)

```javascript
const cafe = ['coffee', 'cake', 'tea', 'cookie']
```

## π unshift()
μμ κ°μ λ°°μ΄μΌ λ, λ§¨ μμ breadλΌλ μμλ₯Ό μΆκ°ν΄μ£Όκ³  μΆλ€λ©΄?
unshiftλ₯Ό μ¬μ©ν΄λ³΄μ!
```javascript
const cafe = ['coffee', 'cake', 'tea', 'cookie']
const count = cafe.unshift('bread')
>(5) ['bread','coffee', 'cake', 'tea', 'cookie']
```

Array.prototype.unshift() λ©μλλ λ°°μ΄μ λ§¨ μμ 1κ° μ΄μμ μμλ₯Ό μΆκ°νκ³ , λ°°μ΄μ μλ‘μ΄ κΈΈμ΄λ₯Ό λ°νν  μ μλ€.

## π shift()
μ΄λ²μλ λ§¨ μμ μμλ₯Ό μ§μλ³΄μ!

```javascript
const cafe = ['coffee', 'cake', 'tea', 'cookie']
let first = cafe.shift() //λ§¨ μμ bread μ§μμ§
cafe
>(4) ['coffee', 'cake', 'tea', 'cookie']
first
> 'bread'
cafe.unshift(first) //λ€μ λ§¨ μμ bread μΆκ°
>5

```
## π push()
λ§¨ λ€μμ μμλ₯Ό μΆκ°ν  λλ push()λ₯Ό μ¬μ©νλ©΄ λλ€.
```javascript
const cafe = ['bread', 'coffee', 'cake', 'tea', 'cookie']
cafe
>(5)['bread','coffee', 'cake', 'tea', 'cookie']
cafe.push('toast')
>6
cafe
>(6) ['bread','coffee', 'cake', 'tea', 'cookie','toast']
```

## π pop()
λ§¨ λ€μμ μμλ₯Ό μ κ±°ν  λλ pop()μ μ¬μ©νλ©΄ λλ€.
```js
const cafe = ['bread','coffee', 'cake', 'tea', 'cookie','toast']
let last = cafe.pop()
last
>'toast'
cafe
(5) ['bread','coffee', 'cake', 'tea', 'cookie']
```
## πjoin()
- μμλ€μ μ°κ²°ν΄ νλμ κ°μΌλ‘ λ§λ€μ΄μ€λ€.
- Array.prototype.join() λ©μλλ λ°°μ΄ λ΄ μμλ€μ μ°κ²°ν΄ νλμ κ°μΌλ‘ λ§λ€λ©°, κ·Έ κ°μ μλ£νμ λ¬Έμμ΄μ΄λ€. λ§€κ°λ³μλ₯Ό μλ΅νλ©΄ μΌνλ‘ κ΅¬λΆλλ©°, λΉ λ¬Έμμ΄μ λ£μ μ λμ΄μ°κΈ° μμ΄ μ°κ²°λλ€. μμκ° null λλ undefined μΌ κ²½μ° λΉ λ¬Έμμ΄λ‘ λ°νλλ€.

```js
const cafe = ['coffee', 'cake', 'tea', 'cookie']
cafe.join(',') //cafe λ°°μ΄μ μμλ€μ ,(comma)λ‘ μ°κ²°νκΈ°
>bread,coffee,cake,tea,cookie

cafe.join('!!!') //cafe λ°°μ΄μ μμλ€μ !!!μΌλ‘ μ°κ²°νκΈ°
>bread!!!coffee!!!cake!!!tea!!!cookie

const number = ['010', '2845', '3478']
number.join('-') //number λ°°μ΄μ μμλ₯Ό -μΌλ‘ μ°κ²°νμ¬ μ νλ²νΈ ννμ²λΌ λ§λ€κΈ°
>'010-2845-3478'
```

## πfill()
- λͺ¨λ λκ°μ μμλ‘ μ±μλ£κ³  μΆμ λ μ¬μ©νλ€.
- Array.prototype.fill() λ©μλλ λ°°μ΄ λ΄ μνλ μμλ₯Ό κ°μ κ°μΌλ‘ μ±μΈ μ μλ€. ν΄λΉ λ©μλλ `μλ³Έμ λ³κ²½νλ λ©μλ`λ‘, λ³΅μ¬λ³Έμ΄ μλ this κ°μ²΄λ‘ λ³κ²½ν΄ λ°ννλ€λ νΉμ§μ΄ μλ€.
```js
const cafe = ['coffee', 'cake', 'tea', 'cookie']
cafe.fill('bread') //cafe λ°°μ΄ λ΄μ μμλ€μ λͺ¨λ breadλ‘ λ³κ²½νκΈ°
>(5) ['bread', 'bread', 'bread', 'bread', 'bread']
cafe
>(5) ['bread', 'bread', 'bread', 'bread', 'bread']
```
- λλ²μ§Έ λ§€κ°λ³μμλ λ°°μ΄ λ΄μ μ²«λ²μ§Έ λ§€κ°λ³μμ μλ ₯ν  κ°μ μ±μ°κΈ° μμν  μ§μ μ μΈλ±μ€λ₯Ό μλ ₯νλ©΄ λλ€.
- μλ΅μ΄ κ°λ₯νλ©° μλ ₯νμ§ μμ μ κΈ°λ³Έκ°μ 0μ΄λ€. 
```js
cafe = ['coffee', 'cake', 'tea', 'cookie']
cafe.fill('bread',-1)
>(4) ['coffee', 'cake', 'tea', 'bread'] //λ§μ§λ§ μμλ₯Ό breadλ‘ μ±μ
```
- λλ²μ§Έ λ§€κ°λ³μμλ μμ κ°λ λ£μ μ μμΌλ©°, μμ κ°μ λ£μΌλ©΄ λ°°μ΄ λ΄ λ§μ§λ§ μμκ° -1μ΄ λλ©° λ§μ§λ§ λΆν° μΈκΈ° μμνλ€. 

```js
Array(10)
Array(10).fill(10)
>(10) [10,10,10,...,10]

let test = Array(10).fill(0)
test
>(10) [0,0,0,0,0,0,0,0,0,0]
test.fill('hello', -1) //test λ°°μ΄μ λ§μ§λ§ μμμ hello κ°μΌλ‘ μ±μ°κΈ°
>(10)[0,0,0,0,0,0,0,0,0,'hello']
cafe.fill('bread', -3, -1) //cafe λ°°μ΄μ λ§μ§λ§ μμμ λ§μ§λ§μμ 3λ²μ§Έ μμκΉμ§ breadλ‘ μ±μ°κΈ°
>(4)['coffee', 'bread', 'bread', 'bread']
test = Array(10).fill(0)
>(10) [0,0,0,0,0,0,0,0,0,0]
test.fill('bread', 2, 5)//test λ°°μ΄μ λλ²μ§Έ μμλΆν° λ€μ―λ²μ§Έ μμκΉμ§ breadλ‘ μ±μ°κΈ°
>(10) [0,0,'bread', 'bread', 'bread', 0,0,0,0,0]
```
## π flat()
- λ°°μ΄μ μνλ κΉμ΄λ‘ νννν΄μ£Όλ λ©μλμ΄λ€.
- Array.prototype.flat() λ©μλλ λ°°μ΄ κ΅¬μ‘° λ΄μ λ λ€λ₯Έ λ°°μ΄ μμλ₯Ό μ§μ ν κΉμ΄κΉμ§ μ΄μ΄ λΆμΈ μλ‘μ΄ λ°°μ΄μ μμ±νλ€. κΈ°λ³Έκ°μ 1μ΄λ©° κ΄νΈ μμ λ€μ΄κ° μ«μ λ§νΌμ μ°¨μμ νννν΄μ£Όλ λ©μλμ΄λ€. λ§€κ°λ³μμ infinityλ₯Ό λ£κ³  μ¬μ©νλ©΄ νμλ°°μ΄μ΄ μμ λ κΉμ§ νννκ° μ΄λ€μ§λ€. λΉ μμκ° μμ κ²½μ° λ¬΄μλλ€.

```javascript
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, [10, 11]]]]
```
 2μ°¨μμ΄λΌκ³  λ³Ό μ μμ
```
0 -> μ€μΉΌλΌ
10 -> μ€μΉΌλΌ
[0] -> λ°±ν°
[10] -> λ°±ν°
[[1,2,3], [4,5,6], [7,8,9]] -> λ©νΈλ¦­μ€(νλ ¬)
[[[1,2],[3,4]],[[1,2],[3,4]]] -> 3μ°¨μ, νμ
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

## π includes()
νΉμ  μμκ° ν¬ν¨λμλμ§ νμΈν΄μ£Όλ λ©μλ
```javascript
const cafe = ['coffee', 'cake', 'tea', 'cookie']

cafe.includes('bread');
//expected output: false

cafe.includes('cake');
//expected output: true

cafe.includes('cake', -3); //μμλ₯Ό μλ ₯ν κ²½μ°, λ§¨ λ€μ μλ μΈλ±μ€λ₯Ό -1μΌλ‘ κ°μ£Όν΄ λ€μμ λΆν° μΈκΈ° μμνλ€.
//expected output: true
```
- μ²«λ²μ§Έ λ§€κ°λ³μμλ νμνκ³ μ νλ μμ μλ ₯
- λλ²μ§Έ λ§€κ°λ³μμλ νμμ μμνκ³ μ νλ μΈλ±μ€λ₯Ό μλ ₯(κ°μ΄ μμΌλ©΄ μ μ²΄ μμλ₯Ό λμμΌλ‘ νμ) 

- find, filter, map 3κ°μ§λ μ λ§ μ€μνλκΉ μ μ λ¦¬ν΄λ κ²!
- κ°λ¨ν μ½λ©νμ€νΈλ₯Ό λ³Ό μλ μμ

## π find()
- νλμ μμλΌλ μ‘°κ±΄μ λ§μ‘±νλμ§ νμΈνλ λ©μλμ΄λ€.
- Array.prototype.find() λ©μλλ λ°°μ΄μμ νΉμ  μ‘°κ±΄μ λΆν©νλ 1κ°μ κ°μ μ°Ύμ λ°ννλ€. Array.prototype.filter() λ©μλμ λ¬Έλ²μ΄ μ μ¬νμ§λ§, λ¨ νλμ μμ λ§μ μ°Ύλλ€λ μ μ΄ λ€λ₯΄λ©° νλμ κ°λ§ μ°ΎκΈ° λλ¬Έμ Array.prototype.filter() λ³΄λ€ μ±λ₯μ΄ μ°μνλ€. μ΄λ€ μμλ νΉμ  μ‘°κ±΄μ λΆν©νμ§ λͺ»νλ©΄ undefinedλ₯Ό λ°ννλ€. 

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.find(i => i > 5);
//expected output: 6
```
- κ³ μ ν ID κ°μ μ°Ύμ λ λ§μ΄ μ¬μ©νλ€.
-> map, filterλ₯Ό μ¬μ©νλ κ²κ³Ό λ€λ₯΄κ² νλ² μ°ΎμΌλ©΄ κ·Έ λ€μλ νμμ νμ§ μκΈ° λλ¬Έμ ν¨μ¨μ μ΄λ€.(λ€λ§ μμ΄λκ° λ§¨ λ§μ§λ§μ μλ€λ©΄ λ€λ₯Έ κ²κ³Ό λΉμ·ν μκ°μ κ°μ§λ λ?μ ν¨μ¨μ±μ λ³΄μΈλ€)

## π filter()
- λͺ¨λ  μμκ° μ‘°κ±΄μ λ§μ‘±νλμ§ νμΈν  λλ filter()μ μ¬μ©νλ€.
- Array.prototype.filter() λ©μλλ λ°°μ΄μμ νΉμ  μ‘°κ±΄μ λΆν©νλ κ°μ μ°Ύκ³  κ·Έ κ°λ€λ‘ μ΄λ£¨μ΄μ§ `μλ‘μ΄ λ°°μ΄`μ λ§λ€μ΄ μΆλ ₯νλ€. μ΄λ€ μμλ νΉμ  μ‘°κ±΄μ λΆν©νμ§ λͺ»νλ©΄ λΉ λ°°μ΄μ λ°ννλ€. ν΄λΉ λ©μλλ μ«μ, λ¬Έμμ΄, booleanκ³Ό κ°μ μμκ° λΏ μλλΌ json κ°μ κ°μ²΄λ₯Ό μ¬μ©ν΄μ trueμΈ κ°μ νλ³ν  μ μλ€. μ½λ°±ν¨μμ λ°νκ°μ΄ trueμΈ λͺ¨λ  μμλ₯Ό λͺ¨μ μλ‘μ΄ λ°°μ΄λ‘ λ§λ€μ΄ μΆλ ₯νλ©° trueκ° μλ μμλ€μ κ±΄λλ°λ©° μλ‘μ΄ λ°°μ΄μ ν¬ν¨μν€μ§ μλλ€.


π μ€μ  κ²μνλ κ²μ²λΌ filter κΈ°λ₯μ μ¬μ©ν΄λ³΄μ.
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
arr.filter(i=>i.dataNum >3)//dataNumμ κ°μ΄ 3 μ΄κ³ΌμΈ κ²μ μ°ΎμλΌ 
//expected output:
	[{
	    'name' : 'title4',
	    'contents' : 'contents4',
	    'dataNum' : 4
	}, {
	    'name' : 'title5',
	    'contents' : 'contents5',
	    'dataNum' : 5
	}] // 3 μ΄κ³ΌμΈ 4μ 5μ ν΄λΉνλ κ°μ²΄λ₯Ό μ λΆ λ°ννλ€.
```

π λΈλ‘κ·Έ κ²μ μ²λΌ λ§λ€μ΄λ³΄μ!

```javascript
const arr = [{
    'name' : 'μλ1',
    'contents' : 'νλ‘ νΈμλ1',
    'dataNum' : 1
}, {
    'name' : 'νλ‘ νΈμλ2',
    'contents' : 'contents2',
    'dataNum' : 2
}, {
    'name' : 'title3',
    'contents' : 'νλ‘ νΈμλ3',
    'dataNum' : 3
}, {
    'name' : 'μλ4',
    'contents' : 'contents4',
    'dataNum' : 4
}, {
    'name' : 'title5',
    'contents' : 'contents5',
    'dataNum' : 5
}];
arr.filter(i => (i.name.includes('νλ‘ νΈμλ'))||(i.contents.includes('νλ‘ νΈμλ'))) 
//nameμ νλ‘ νΈμλλ₯Ό κ°μ§κ³  μκ±°λ contentsμ νλ‘ νΈμλλ₯Ό κ°μ§κ³  μλ κ²μ λͺ¨λ μ°ΎμλΌ 

//expected output:
(3) [{β¦}, {β¦}, {β¦}]
0: {name: 'μλ1', contents: 'νλ‘ νΈμλ1', dataNum: 1}
1: {name: 'νλ‘ νΈμλ2', contents: 'contents2', dataNum: 2}
2: {name: 'title3', contents: 'νλ‘ νΈμλ3', dataNum: 3}
length: 3
[[Prototype]]: Array(0) 
//μμ κ°μ΄ νλ‘ νΈμλ ν€μλκ° λ€μ΄κ° κ²μ λͺ¨λ λ°ννλ κ²μ νμΈν  μ μλ€.

```
## π findIndex()
- μ‘°κ±΄μ λ§μ‘±νλ μ²« λ²μ§Έ μΈλ±μ€λ₯Ό μ°Ύμ λ μ¬μ©νλ λ©μλμ΄λ€.
- Array.prototype.findIndex() λ©μλλ μ£Όμ΄μ§ μ‘°κ±΄μ λΆν©νλ λ°°μ΄μ λ§¨ μ²« λ²μ§Έ μμμ μΈλ±μ€λ₯Ό λ°ννλ€. Array.prototype.find() λ©μλμ λΉμ·νμ§λ§ Array.prototype.find() λ©μλλ μ¬κΈ°μ μ²« λ²μ§Έ μΈλ±μ€κ° μλ μ²« λ²μ§Έ μμλ₯Ό λ°ννλ€λ μ°¨μ΄κ° μλ€. λ°°μ΄ λ΄μμ μ‘°κ±΄μ λΆν©νλ μμκ° μ‘΄μ¬νμ§ μμΌλ©΄ -1μ λ°ννλ€. 
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

const index = cafe.findIndex(obj => obj.item.length <= 3) //itemμ κΈΈμ΄κ° 3λ³΄λ€ μμ κ²μ μ°Ύμμ μΈλ±μ€κ°μ λ°ννμ¬λΌ. 3λ³΄λ€ μμ κ²μ 'item'μμκ° 'tea'μΈ κ°μ²΄ μ΄λ―λ‘ indexκ° 2λ₯Ό λ°ν

index
//expected output: 2
```

### π findμ findIndex μ°¨μ΄μ  μ λ¦¬

|μ΄λ¦|λ΄μ©|
|------|---|
|find |- find() λ©μλλ μ£Όμ΄μ§ νλ³ ν¨μλ₯Ό λ§μ‘±νλ μ²« λ²μ§Έ μμμ κ°μ λ°ν|
|findIndex|- findIndex() λ©μλλ μ£Όμ΄μ§ νλ³ ν¨μλ₯Ό λ§μ‘±νλ λ°°μ΄μ μ²« λ²μ§Έ μμμ λν μΈλ±μ€λ₯Ό λ°ν|


## π map()
- Array.prototype.map() λ©μλλ λ°°μ΄ λ΄μ μλ μμμ μ€λ¦μ°¨μμΌλ‘ μ κ·Όν΄μ μ£Όμ΄μ§ ν¨μλ₯Ό νΈμΆν κ²°κ³Όλ₯Ό λͺ¨μ μλ‘μ΄ λ°°μ΄μ λ°ννλ€. 
- ν΄λΉ λ©μλλ₯Ό μ¬μ©ν΄ κΈ°μ‘΄μ κ°μ μ¬μ μν  μλ μμ§λ§ μλ‘μ΄ ννμ κ°μ μ μνλ κ² λν κ°λ₯νλ€. 
- κ°μ²΄λ json ννμ λ°μ΄ν°λ₯Ό νμνλ μ©λλ‘ μ¬μ©ν  μ μκΈ°λ νλ©° μ΄ κ³Όμ μμ μλ‘μ΄ ννμ κ°μ μ μνλ κ²½μ°κ° λ§λ€. 
- μ΄λ¬ν λ°©μμ λ€λ₯Έ μννλ Array.prototype.filter() λ©μλλ Array.prototype.find() λ©μλ, Array.prototype.forEach() λ©μλ μμλ μ¬μ© κ°λ₯νλ€.
- μλ‘μ΄ λ°°μ΄μ λ§λ€μ΄μ£Όκ³ , κΈ°μ‘΄ λ°°μ΄μ κ·Έλλ‘ μλ€.

βmap ν¨μλ₯Ό μ΄μ©ν΄ μ£Όμ΄μ μ μ²΄ μμμ 10, 100μ λν κ°μ λ§λ€μ΄λ³΄μ
```javascript
arr = [1,2,4,8,16] 
arr.map(i => i + 10)
>(5)[11,12,14, 18, 26]//λͺ¨λ  μμμ 10μ© λν΄μ§
function weniv(x){
    return x+100
}
arr.map(weniv)
>(5)[101, 102, 103, 104, 105] //ν¨μλ‘ λ§λ€μ΄μ μ μ κ°λ₯
```

```javascript
const arr = [{
    'name' : 'title1',
    'contents' : 'contents1',
    'dataNum' : 1,
    'μ§μ­κ³Όλ μ§' : ['νκ΅­', [22,5,4]]
}, {
    'name' : 'title2',
    'contents' : 'contents2',
    'dataNum' : 2,
    'μ§μ­κ³Όλ μ§' : ['νκ΅­', [22,5,4]]
}, {
    'name' : 'title3',
    'contents' : 'contents3',
    'dataNum' : 3,
    'μ§μ­κ³Όλ μ§' : ['νκ΅­', [23,5,4]]
}, {
    'name' : 'title4',
    'contents' : 'contents4',
    'dataNum' : 4,
    'μ§μ­κ³Όλ μ§' : ['νκ΅­', [23,5,4]]
}, {
    'name' : 'title5',
    'contents' : 'contents5',
    'dataNum' : 5,
    'μ§μ­κ³Όλ μ§' : ['νκ΅­', [22,5,4]]
}];
arr.map((i => i.μ§μ­κ³Όλ μ§[1][0]));
```

### π method chaining
μ°μν΄μ ν¨μλ₯Ό μ¬μ©ν  μ μμ
valueμ index κ° λκ°λ₯Ό λ€ λ½μλ³΄μ
```javascript
const arr = [{
    'name' : 'title1',
    'contents' : 'contents1',
    'dataNum' : 1,
    'μ§μ­κ³Όλ μ§' : ['νκ΅­', [22,5,4]]
}, {
    'name' : 'title2',
    'contents' : 'contents2',
    'dataNum' : 2,
    'μ§μ­κ³Όλ μ§' : ['νκ΅­', [22,5,4]]
}, {
    'name' : 'title3',
    'contents' : 'contents3',
    'dataNum' : 3,
    'μ§μ­κ³Όλ μ§' : ['νκ΅­', [23,5,4]]
}, {
    'name' : 'title4',
    'contents' : 'contents4',
    'dataNum' : 4,
    'μ§μ­κ³Όλ μ§' : ['νκ΅­', [23,5,4]]
}, {
    'name' : 'title5',
    'contents' : 'contents5',
    'dataNum' : 5,
    'μ§μ­κ³Όλ μ§' : ['νκ΅­', [22,5,4]]
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
valueμ indexλ μ΄λ¦λͺ λ³΄λ€λ μμλ‘ μΈμν¨

### π κ΅¬μ‘°λΆν΄ν λΉ
κ΅¬μ‘° λΆν΄ ν λΉ κ΅¬λ¬Έμ λ°°μ΄μ΄λ κ°μ²΄μ μμ±μ ν΄μ²΄νμ¬ κ·Έ κ°μ κ°λ³ λ³μμ λ΄μ μ μκ² νλ JavaScript ννμμλλ€.
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
## π μ κ°κ΅¬λ¬Έ
μ κ° κ΅¬λ¬Έμ μ¬μ©νλ©΄ λ°°μ΄μ΄λ λ¬Έμμ΄κ³Ό κ°μ΄ λ°λ³΅ κ°λ₯ν λ¬Έμλ₯Ό 0κ° μ΄μμ μΈμ (ν¨μλ‘ νΈμΆν  κ²½μ°) λλ μμ (λ°°μ΄ λ¦¬ν°λ΄μ κ²½μ°)λ‘ νμ₯νμ¬, 0κ° μ΄μμ ν€-κ°μ μμΌλ‘ κ°μ²΄λ‘ νμ₯μν¬ μ μμ΅λλ€.
```javascript 
          var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
// ["head", "shoulders", "knees", "and", "toes"]

```
μμ°λ λ³μλ _μ²λ¦¬λ₯Ό ν΄μ€ κ²

```javascript
Array(100).fill(0).map((value, index)=> index+1)

(100)Β [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
```

```javascript
Array(100).fill(0).map((_, index)=>index+1)
(100)Β [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
```

## π forEach()
- λ°°μ΄μ κ° μμμ λν΄ callbackμ μ€νν©λλ€.
- λ°°μ΄μ μννλ―λ‘ μ€κ°μ "break;" λ¬Έμ μ¬μ©ν  μ μμ΅λλ€. 
- μ΄λ° κ²½μ°λΌλ©΄ for( )λ¬Έμ μ¬μ©ν΄μΌ ν©λλ€.
```javascript
array.forEach(callback(currentvalue[, index[, array]])[, thisArg])
```
### π map κ³Ό forEach λ¬Έμ μ°¨μ΄μ 
map()μ λ°°μ΄μ λ°ννκ³ 
forEach()λ μνλ§ νλ€.
forEach()λ λ¬΄μμ ν μ§ μ ννκ² λͺμν΄μ€μΌ ν¨

forEach μ¬μ© μμ 
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

## π reduce
- λμ ν΄μ£Όλ©° μ€ννκ³  μΆμ λ μ¬μ©
- λ©μλλ λ°°μ΄ λ΄μ κ° μμμ μ£Όμ΄μ§ reducer ν¨μλ₯Ό μ€ννκ³ , λ¨ 1κ°μ κ²°κ³Όκ°μ λ°ννλ€. 
- ν΄λΉ λ©μλλ 4κ°μ λ§€κ°λ³μλ₯Ό κ°λλ€. 
- λ°λ‘ μ§μ  μ½λ°±ν¨μμ λ°νκ°μ λμ νλ λμ κ°, κ·Έλ¦¬κ³  μνλ₯Ό λκ³  μλ νμ¬κ°, νμ¬ λκ³  μλ μμμ index, array μ μ²΄μ΄λ€. 
- λ³΄ν΅ indexμ arrayλ₯Ό μλ΅νκ³  λ§μ΄ μ¬μ©νλ€.
```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr.reduce((λμ κ°, νμ¬κ°) => λμ κ°+νμ¬κ°)
//expected output: 55

arr.reduce((λμ κ°, νμ¬κ°, index, array) => λμ κ°+νμ¬κ°)
//expected output: 55

arr.reduce((λμ κ°, νμ¬κ°, index, array) => λμ κ°-νμ¬κ°)
//expected output: -53

```

## π Array.from()
- μ μ¬λ°°μ΄κ°μ²΄λ₯Ό μμ±ν¨
- `Array.from()` λ©μλλ λ°°μ΄, λ¬Έμμ΄ λ± μ²λΌ λ°λ³΅μ΄ κ°λ₯ν κ°μ²΄ (Iterable object) νΉμ μ μ¬ λ°°μ΄μ λ°μ μλ‘μ΄ λ°°μ΄ κ°μ²΄λ₯Ό λ§λ λ€. μ¬λ¬ κ°μ²΄λ₯Ό λ°°μ΄λ‘ λ§λ€ λ μ£Όλ‘ μ¬μ©λλ©° κ°μ²΄ λ΄μ λͺ¨λ  μμλ₯Ό μλ‘μ΄ λ°°μ΄λ‘ μμ λ³΅μ¬λ₯Ό νλ€.
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
> (100) [10,20,30, λΉμ΄ μμ * 07]
typeof seohee
> Object
```
- μ μ¬λ°°μ΄ κ°μ²΄λ method(length)κ° μ μκ° μλμ΄μλ€.

- length κΈΈμ΄λ₯Ό κ°μ λ‘ λλ €μ£Όλ©΄ λλ¨Έμ§ λΆλΆμ λΉμ΄ μμμΌλ‘ μ±μμ§ μ μλ€.
μ΄λ κ² λ  μ μλ μ΄μ λ typeμ΄ objectμ΄κΈ° λλ¬Έμ΄λ€. 

β Array.fromμ μ΄μ©ν΄μ μνλ κ°λ§ μΆλ ₯ν΄λ³΄μ
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

## π concat()
- λ°°μ΄μ ν©μΉκ±°λ μλ‘μ΄ μμλ₯Ό λ°ννλ€.
- μλ³Έ λ°°μ΄μ λ³κ²½μ μκ³  μλ‘μ΄ λ°°μ΄μ λ°ννλ€.
- Array.prototype.concat() λ©μλλ λ§€κ°λ³μλ‘ μ£Όμ΄μ§ κ° λλ λ°°μ΄μ μ΄μ©ν΄μ κΈ°μ‘΄μ λ°°μ΄μ μ‘΄μ¬νλ μμλ₯Ό μ¬μ©ν΄ μλ‘μ΄ λ°°μ΄μ λ§λ€ μ μκ³  κΈ°μ‘΄ λ°°μ΄μ μλ‘μ΄ μμλ₯Ό μΆκ°ν  μλ μλ€. μ£Όλ‘ λ°°μ΄μ ν©μΉκ³ μ ν  λ μμ£Ό μ¬μ©λλ€. κΈ°μ‘΄μ λ°°μ΄μ λ³κ²½νμ§ μμΌλ©°, μΆκ°λ μλ‘μ΄ λ°°μ΄μ λ°ννλ€λ νΉμ§μ΄ μλ€.
```javascript
const cafe = ['coffee'];

cafe.concat(['cake']);
//expected output: ['coffee', 'cake']

cafe.concat(['tea'], 'cookie');
//expected output: ['coffee', 'tea', 'cookie']
```

## π some()
- 1κ° μ΄μμ μμκ° μ‘°κ±΄μ λ§λμ§ μ°ΎμΌλ €λ©΄ some μ¬μ©νλ€.
- Array.prototype.some() λ©μλλ λ°°μ΄ λ΄ 1κ°μ μμλΌλ μ‘°κ±΄μ λ§λ κ°μ΄ μλμ§ μ¬λΆλ₯Ό booleanμΌλ‘ λ°ννλ€. μ‘°κ±΄μ λΆν©νλ κ°μ΄ μκ±°λ λΉ λ°°μ΄μμ νΈμΆν  κ²½μ°μ falseλ₯Ό λ°ννλ€. νΈμΆν  λ°°μ΄ λ΄μ μ‘΄μ¬νλ λͺ¨λ  μμκ° ν¨μμ λ°ν κ°μ trueλ‘ λ§λλμ§ μ¬λΆλ₯Ό νμΈνλ Array.prototype.every() λ©μλμ μ°¨μ΄κ° μλ€κ³  ν  μ μλ€.
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

## π every()
- λͺ¨λ  μμκ° μ‘°κ±΄μ λ§λμ§ μ°Ύμ λ μ¬μ©νλ€.
- Array.prototype.every() λ©μλλ λ°°μ΄ λ΄μ μ‘΄μ¬νλ λͺ¨λ  μμκ° μ‘°κ±΄μ λΆν©νλμ§ μ¬λΆλ₯Ό booleanμΌλ‘ λ°ννλ€. μ‘°κ±΄μ λΆν©νμ§ μλ μμλ₯Ό λ°κ²¬νκ±°λ λΉ λ°°μ΄μμ νΈμΆν  κ²½μ° falseλ₯Ό λ°ννλ€. Array.prototype.some() λ©μλμ λ§μ°¬κ°μ§λ‘ νΈμΆν λ°°μ΄μ λ³ννμ§ μλλ€λ νΉμ§μ΄ μλ€.
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
