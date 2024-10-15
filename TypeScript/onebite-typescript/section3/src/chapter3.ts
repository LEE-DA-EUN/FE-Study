//Unknown 타입

import { BlobOptions } from "buffer";

function unknownExam() {
    let a: unknown = 1;                 // number -> unknown
    let b: unknown = "hello";           // string -> unknown
    let c: unknown = true;              // boolean -> unknown
    let d: unknown = null;              // null -> unknown
    let e: unknown = undefined;         // undefined -> unknown
    let f: unknown = [];                // Array -> unknown
    let g: unknown = {};                // Object -> unknown
    let h: unknown = () => {};          // Function -> unknown
    //업캐스팅은 가능하지만 다운캐스팅은 안된다
    // let unknownVar: unknown;
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}


//Never 타입
// 모든 집합의 부분집합 -> 공집합

function neverExam() {
    function neverFunc(): never {
        while(true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: Boolean = neverFunc();

    //여기도 마참가지로 다운캐스팅이 안된다
    //let never1: never = 10;
    //let never2: never = "string";
    //let never3: never = true;
}

//void타입
//undefined 타입의 super 타입이다.
function voidExam() {
    function voidFunc(): void{
        console.log("hi");
        return undefined;
    }

    let voidVar: void = undefined;
}

//any타입
//치트키 - 모든타입의 수퍼타입으로도 가능하고 모든 타입의 서브타입으로도 가능하다(never 제외)

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    
    anyVar = unknownVar;
    undefinedVar = anyVar;

}

