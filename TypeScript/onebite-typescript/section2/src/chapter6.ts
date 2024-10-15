//any
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;

let num: number = 10;
num = anyVar;

//unknown
let unknownVar: unknown;
// num = unknownVar <- 이건 불가능
// 연산, toUppercase 둘다 any에서는 가능, unknown은 불가능

//타입정제
if (typeof unknownVar === "number") {
    num = unknownVar;
}