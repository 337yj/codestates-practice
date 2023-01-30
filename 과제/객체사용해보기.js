/**
 *  TODO: 1) 객체를 선언 (number, string, boolean, null, undefined, object, array, function)
 *  TODO: 2) 함수 : 객체 value의 데이터 타입이 number인 [key,value]만 뽑아서 새로운 객체를 return
 *  MEMO: reduce, entries
 *  */

const obj = {
  nickname: "오얏 리",
  age: 18,
  isFemale: true,
  day: 30,
  isNull: null,
  isUndefined: undefined,
  user: {
    name:"이윤정"
  },
  study: ["자바스크립트", "리액트"],
  getAge: ()=>{
    console.log("getAge")
  },
  getName: function(){
    console.log("getName")
  }
}

// 리펙토링(Refactoring)
const getOnlyNumberObj = (obj) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === "number") {
      acc[key] = value;
    } // 동적할당
    return acc;
  }, {});
};

/**
 * 1) entries와 같은 Object method들에 대해서 익숙해질 것.
 * 2) reduce와 같은 Array method들에 대해서 익숙해질 것.
 * 3) 객체를 생성하는 방법을 알아보기
 */

// acc["age1"] = 10; => 문자열 변수나, 순수 문자열을 통해 객체에 접근할 때 사용.
// acc[key]
// acc.age1 = 10; => 미리 만들어진 객체에 대해서만 사용 가능

/**
 * {
 *  age: 18,
 *  day: 30
 * }
 */

const numberObj = getOnlyNumberObj(obj);
console.log(numberObj);