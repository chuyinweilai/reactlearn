// 定义接口
interface NameInfo {
  firstName: string;
  lastName: string;
}
const getFillName = ({ firstName, lastName }: NameInfo) => {
  return `${firstName} ${lastName}`;
};
const res = getFillName({
  firstName: "hello",
  lastName: "Mirai",
});
console.log(res);

interface VegetableInfo {
  type: string;
  // 可选属性
  color?: string;
  // 只读属性
  readonly id: string | number;

  // 索引签名
  [props: string]: any;
}
const getVegetables = ({ color, type }: VegetableInfo) => {
  return `A ${color ? color + " " : ""}${type}`;
};

console.log(
  getVegetables({
    id: 1,
    type: "tomato",
  })
);

interface AnotherInfo {}

// 类型别名
type AddFunc = (num1: number, num2: number) => number;
const addFunc: AddFunc = (n1, n2) => n1 + n2;
console.log("addFunc", addFunc(1, 2));

// 索引类型
interface RoleDic {
  [id: string]: string;
}
const role1: RoleDic = {
  0: "admin",
  a: "aqs",
};

// 接口继承
interface Vegetables {
  color: string;
}
interface Tomato extends Vegetables {
  radius: number;
}
interface Carrot extends Tomato {
  length: number;
}

const carrot: Carrot = {
  color: "red",
  length: 123,
  radius: 19,
};
console.log("carrot", carrot);

// 混合类型接口,getCounter既是函数，也是对象
interface Counter {
  (): void;
  count: number;
}

const getCounter = (): Counter => {
  const c = () => {
    c.count++;
  };
  c.count = 0;
  return c;
};
const counter: Counter = getCounter();
console.log("getCounter", counter.count);
counter();
console.log("getCounter", counter.count);
counter();
console.log("getCounter", counter.count);
