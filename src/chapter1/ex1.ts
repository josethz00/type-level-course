/**
* 1. The `identity` function takes a value of any type
*    and returns it. Make it generic!
*/
export namespace genericFunction {
  
  function identity<A>(a: A): A {
    return a;
  }
  
  let input1 = 10;
  let res1 = identity(input1);
  
  type test1 = Expect<Equal<typeof res1, number>>;
  
  let input2 = "Hello";
  let res2 = identity(input2);
  
  type test2 = Expect<Equal<typeof res2, string>>;
  
}