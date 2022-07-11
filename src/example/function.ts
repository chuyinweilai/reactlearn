// 函数类型

// 先定义类型，再定义函数
let add: (x: number, y: number) => number;
add = (arg1: number, arg2: number): number => arg1 + arg2;

// 通过类型别名定义函数
type Add = (x: number, y: number) => number;
let addFunc1: Add;
addFunc1 = (arg1: number, arg2: number): number => arg1 + arg2;

// 定义参数
type AddFunction = (arg1: number, arg2: number, arg3?: number) => number;
let addFunc2: AddFunction = (arg1, arg2 = 10, arg3) =>
  arg1 + arg2 + (arg3 ? arg3 : 0);

// 函数重载,1,2行为函数重载,第三行为函数实体
function handleData(x: string, y: string): string;
function handleData(x: number, y: number): number;
function handleData(x: any, y: any): any {
  if (typeof x === "string") {
    return `${x}_${y}`;
  } else {
    return x + y;
  }
}
// 函数重载的时候，参数要根据定义的组合来传，比如(number,number)/(string,string).不可以为(number,string1)
console.log(handleData(2, 1)); // 3
console.log(handleData("a", "b")); // "a_b"
// handleData(2, "a");     // error
