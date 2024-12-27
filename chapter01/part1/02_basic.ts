//声明一个变量 a ，同时指定他的变量类型为number
let a : number

a = 10
a = 33
// a = 'hello'

let e: unknown
let s: string
e = 'hello'
//unknown类型的变量，不能直接赋值给其他变量
// s = e  //报错
if(typeof e === 'string'){
  s = e
}

//或者用 类型断言，可以用来告诉解析器变量的实际类型
/* 
  语法：
    变量 as 类型
    <类型>变量
*/
s = e as string
s = <string> e

//void 表示空，以函数为例，就表示没有返回值的函数
function fn(): void{

}

//never 表示永远没有返回值  常用来定义报错函数
function fn2(): never{
  throw new Error('报错了！')
}

//属性名后面加上？，表示属性是可选的
let b: {name: string,age?: number}
b = {name:'孙悟空'}

//[propName: string]: any 表示任意类型的属性
//propName: string ： 表示属性名是字符串   propName可以写成任意形式，比如 xxx
let c: {name: string,[propName: string]: any}
c = {name:'猪八戒',b :100,d : 200}

/* 
  设置函数结构的类型声明：
    语法： （形参：类型，形参：类型...）=》返回值
*/
let d: (a: number,b: number)=>number
d = function(n1: number,n2: number): number{
  return 10
}

let j:{name: string} & {age: number}
j = {name: '孙悟空',age: 18}

type myType = string
let m: myType

type myType2 = 1|2|3|4|5|6
let n: myType2