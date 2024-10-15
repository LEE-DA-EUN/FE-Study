//void -> 공허 -> 아무것도 없다
 
function func1(): string {
    return "hello";
}

//반환하는 값이 없을 때 void를 사용한다.
function func2(): void {
    console.log("hello")
}

let a: void;
a = undefined;
//void로 할당하면 undefined을 제외한 다른거로는 할당할 수 없다.
//tsconfig에 strictNullCehcks false로 하면 그때는 a = null 도 가능


//never -> 존재하지 않는 -> 불가능한 타입

//이 함수가 뭔가를 반환한다는 것 자체가 모순일 때
function func3(): never {
    while(true) {}
}

function func4(): never {
    throw new Error();
}


//어떤것도 담지못함 심지어 any도 못담음
let b: never;

