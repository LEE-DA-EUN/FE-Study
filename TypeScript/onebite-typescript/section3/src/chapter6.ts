let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

// any타입의 진화
// 변수 선언하고 초기값 지정안하면 암묵적으로 any로 지정
let d;
d = 10; // number 타입으로 진화
d.toFixed();

d = "hello"; // string 타입으로 진화
d.toUpperCase();

//리터럴 타입으로 추론됨
const num = 10;
const str = "hello";

let arr = [1, "string"];
