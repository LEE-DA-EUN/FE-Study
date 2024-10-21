/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은기를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

//기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; //됨
// b=a; 안됨
/**
 * a 함수의 반환값 타입은 넘버 타입, b 함수의 반환값 타입은 넘버 리터럴 타입
 * 넘버 타입을 넘버 리터럴 타입으로 취급하겠다는 것은 다운 캐스팅 -> 그래서 안됨
 */

//기준2. 매개변수가 호환되는가
//2-1. 매개변수의 개수가 같을때
type C = (value: number) => void;
type D = (value: number) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c=d; 안됨
d = c; //됨

/**
 * 매개변수 타입을 기준으로 함수 타입의 호환성을 판단할 때 업캐스팅이면 안되고 다운캐스팅이면 된다
 */

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

// 애니멀 타입의 조건이 더 적기에 애니멀 타입이 도그 타입의 슈퍼타입이다.

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let DogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;

// let testFunc = (animal:Animal)=>{
//     console.log(animal.name);
//     console.log(animal.color);
// } 안됨

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

//매개변수일때는 다운캐스팅이 되고 업캐스팅이 안된다.

// 2-2. 매개변수의 개수가 다를때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; 안됨
