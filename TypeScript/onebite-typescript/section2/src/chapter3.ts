// object
// 객체리터럴타입
let user: {
    id?:number; //물음표 붙으면 있어도되고 없어도된다는 뜻, 있을거면 number로 -> 선택적프로퍼티
    name:string;
} = {
    id: 1,
    name: "이정환",
}

user = {
    name:"홍길동",
}


let config: {
    readonly apiKey: string;
} = {
    apiKey: "MY API KEY"
};