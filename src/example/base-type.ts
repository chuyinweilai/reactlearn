namespace baseType {
  // 布尔类型
  let bool: boolean = false;

  // 数值类型，js数字都是浮点数
  let num: number = 30;
  num = 0b1111011;
  num = 0o173;
  num = 0x7b;

  // 字符串类型
  let str: string = "Mirai";
  str = "Mirai";
  str = `name:${str}`;
  console.log(str);

  // 数组类型
  let arr: (number | string)[];
  let arr2: Array<number | string>;
  arr = [1, 2, 3];
  arr2 = [1, "Mirai"];

  // 元组类型,限定每个位置的元素类型,以及长度
  let tuple: [string, number, boolean];
  tuple = ["string1", 2, false];

  // 枚举类型
  /*
  0: "SUPER_ADMIN"
  3: "ADMIN"
  4: "USER"
  ADMIN: 3
  SUPER_ADMIN: 0
  USER: 4
  */
  enum Roles {
    SUPER_ADMIN,
    ADMIN = 3,
    USER,
  }
  console.log(Roles);

  // void类型,指undefined或null
  const consoleText = (text: string): void => {
    console.log(text);
  };
  let v: void;
  v = undefined;
  consoleText("test");

  // never类型,不同于void.是不会有返回值或者抛出异常报错
  const errorFunc = (message: string): never => {
    throw new Error(message);
  };
  const infiniteFunc = () => {
    while (true) {}
  };

  // 对象类型
  const getObject = (obj: object): void => {
    console.log(obj);
  };
  getObject({
    name: "lison",
  });

  // 类型断言
  const getLength = (target: string | number): number => {
    if ((target as string).length || (<string>target).length === 0) {
      return (<string>target).length;
    } else {
      return target.toString().length;
    }
  };
}
