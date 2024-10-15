type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};

// animal = dog; 가능
// dog = animal; 불가능

// animal과 dog는 name과 color 프로퍼티를 가지고 있기에 dog에 포함되면 무조건 animal에도 포함이 된다.
// animal타입이 dog타입의 슈퍼타입이라는 것


type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
    let programmingBook: ProgrammingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs",
};

// book = programmingBook; 가능
// programmingBook = book; 불가능
// Book 타입은 ProgrammingBook 타입의 슈퍼타입

//초과프로퍼티 검사
//오류발생함
// let book2: Book = {
//     name: "한 입 크기로 잘라먹는 리액트",
//     price: 33000,
//     skill: "reactjs",
// };

//이건됨
let book3: Book = programmingBook;