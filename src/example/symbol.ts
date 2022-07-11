namespace a {
  // symbol
  const s = Symbol("name");

  let prop = "name";
  const info = {
    [s]: "Mirai",
    [`my${prop}`]: "Miku",
    age: 18,
    sex: "main",
  };

  // 因为是独一无二的值，可以确保不会被其他的情况覆盖，保证只有在info[s]才可以修改该值
  console.log(info);
  info[s] = "123";
  console.log(info);

  // 切symbol值不会被遍历到
  for (const key in info) {
    console.log(key);
  }

  // 获取symbol属性
  // 返回所有symbol类型属性名
  console.log(Object.getOwnPropertySymbols(info));
  // 返回对象中所有类型的属性名
  console.log(Reflect.ownKeys(info));

  // Symbol静态方法
  // Symbol.for创建之前，会先遍历所有的symbol，如果之前有同样的值会直接获取已创建的
  let s1 = Symbol.for("Mirai");
  let s2 = Symbol.for("Mirai");
  console.log(s1 === s2); // true
  // 获取Symbol.for的key
  console.log(Symbol.keyFor(s2));

  // 11个内置的Symbol值,ES自带
  // https://www.bookstack.cn/read/es6-3rd/spilt.8.docs-symbol.md
  // Symbol.hasInstance属性，指向一个内部方法。当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法。
  const obj = {
    // instanceof触发
    [Symbol.hasInstance](otherObj: any) {
      console.log("otherObj------>", otherObj);
    },
  };
  // obj instanceof Object;//true 实例obj在不在Object构造函数中.运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
  console.log({ a: "a" } instanceof <any>obj);

  // Symbol.isConcatSpreadable属性等于一个布尔值，表示该对象用于Array.prototype.concat()时，是否可以展开。
  // let arr = ["a", "b"];
  // console.log(([] as any).concat(arr, [3, 4]));

  // arr[Symbol.isConcatSpreadable] = false;
  // console.log(([] as any).concat(arr, [3, 4]));
}
