//타입별칭

type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

let user: User = {
    id:1,
    name:"이다은",
    nickname:"lian",
    birth:"2000.01.01",
    bio:"안녕하세요",
    location:"성남시",
}

//인덱스 시그니처
type CountryCodes = {
    [key : string] : string;
}

let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
}

type CountryNumbersCodes = {
    [key : string] : number;
    Korea: number; //Korea는 반드시 가지도록 함
}

let countryNumbersCodes: CountryNumbersCodes = {
    Korea: 410,
    UnitedState: 840,
    UnutedKingdom: 826,
}
