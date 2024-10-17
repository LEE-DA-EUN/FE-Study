// 타입단언

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <= 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string; 오류발생
// 교집합이 아니기에 실패함
let num3 = 10 as unknown as string;
//다중단언하면 가능하긴 함 -> 좋은 방법은 아님

/**
 * const 단언
 */

let num4 = 10 as const;
let cat = {
  name: "야옹이",
  color: "yellow",
} as const; //읽기전용으로 만들어짐

// cat.name = '' 오류뜸

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "이정환",
};

// const len : Number = post.author?.length; 오류뜸
// number 타입으로 정의한 변수에 undefined 값은 들어갈 수 없음 -> ?를 !로 바꾸면 된다
// !는 NonNull 단언연산자
const len: Number = post.author!.length;

//위험한 문법이기도 해서 조심히 사용해라
