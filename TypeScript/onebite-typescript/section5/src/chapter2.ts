interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

//인터페이스는 객체타입이면 다 확장할 수 있다

interface DogCat extends Dog, Cat {}

const dogcat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
