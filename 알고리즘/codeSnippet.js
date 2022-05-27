//언어 선택(속도: C++ ,풀이 : python)
//5~6시간
//6~7문제

//30분씩 4문제, 2시간씩 2문제

//자료구조와 알고리즘
//자료구조: 데이터를 효율적으로 담는 구조
//알고리즘: 문제를 해결하는 방법
//빅오(O): O(1), O(n), O(n**2), O(n**3)
//시간복잡도, 공간복잡도

/*
while(1<a){
    s += a;
    n++
}
//O(n)

while (1 < a) {
    s += a;
    n++
    while (1 < b) {
        s += b;
        b++
    }
}
*/
//O(n**2)

// 목차(기본 자료구조 및 알고리즘)
// 1. 스택과 큐
// 2. 연결리스트(linked list)
// 3. 정렬
// 3.1 선택정렬
// 3.2 삽입정렬
// 3.3 병합정렬
// 3.4 퀵정렬
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회

//문제1. 이 포함되어있는 숫자의 개수를 카운팅하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다
Array(10);
let x = Array(10);
x[2] = null
x[3] = undefined

x.length = 20;
x
Array(10).fill(0);
Array(10).fill(10);

Array(100).fill(1).map((value, index)=>value+index);
Array(100).fill(1).map((value, index) => value + index) + '';
(Array(100).fill(1).map((value, index) => value + index) + '').split('8'); //8의 개수 + 1의 값이 반환됨
(Array(100).fill(1).map((value, index) => value + index) + '').split('8').length - 1;
'2384234592879'.split(/8/g)//정규표현식으로 하는거 풀기


//문제 2. 인접한 수의 차이 값 구하기
let s = [1,3,4,8,13,17,20]
for(let i = 0; i<s.length;i++){
    console.log(s[i]);
}
//다른 언어, but js에서는 -1 안해줘도 error 안남
for (let i = 0; i < s.length; i++) {
    console.log(s[i+1]-s[i]);
}

for (let i = 0; i < s.length; i++) {
    console.log(s[i] - s[i-1]);
}

let s = [1,3,4,8,13,17,20]
let arr = []
for(let i = 1; i<s.length; i++){
    arr.push(s[i]-s[i-1]);
}
arr

let index =arr.indexOf(Math.min(...arr))
console.log(s[index], s[index+1])

const zip = (a, b) =>  a.map((value, index)=>[
    value, b[index]
]);
zip([10,20,30], [1,2,3])

let pairs = zip(s.slice(0,s.length-1),s.slice(1))

function 비교(a,b){
    if(a[1]-a[0]<b[1]-b[0]){
        return -1
    }
    if (a[1] - a[0] > b[1] - b[0]){
        return 1
    }
    return 0;
}//이해안감 다시 해볼 것

pairs.sort(비교)[0]

//쉬운풀이
let s = [1,3,4,8,13,17,20];

const zip = (a,b) => a.map((v,i)=>[v.b[i]]);
let pairs = zip(s.slice(0,s.length-1), s.slice(1))
//초기값, for 문 안에서 최솟값을 비교하는 용도로 사용
//MAX_SAFE_INTEGER를 주로 사용합니다!
//let init = Number.MAX_SAFE_INTEGER;
//let init = Number.MIN_SAFE_INTEGER;

let init = pairs[0][1] - pairs[0][0]
let result = [];
for(let i of pairs){
    if(init>i[1]-i[0]){
        init = i[1]-i[0]
        result = i;
    }
}
console.log(result)

https: //paullabworkspace.notion.site/56acc29106be4243b6e0d56af782c5a0
class Stack{
    constructor(){
        this.arr = []

    }
    push(data){
        this.arr.push(data)
    }

    pop(index){
        if(index>this.arr.length-1){
            return this.arr.pop()
        }
        let result = this.arr.splice(index,1)
        return result;
    }
    top(){
        return this.arr[this.arr.length-1];
    }
    bottom(){
        return this.arr[0]
    }
}
let s = new Stack()
s.push(10)
s.push(20)
s.push(30)
s.pop(1)
console.log(s)

//굳이 생성자를 만드는 이유는 메서드를 만들거나 쉽게 순회하기 위해서, 효율적으로 관리하기 위해서

