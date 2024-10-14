//enum 타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
//숫자할당따로 안해도 위부터 0~으로 배정됨
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "사용자1",
    role: Role.ADMIN,
    language: Language.korean,
};
const user2 = {
    name: "사용자2",
    role: Role.USER,
};
const user3 = {
    name: "사용자3",
    role: Role.GUEST,
};
export {};
