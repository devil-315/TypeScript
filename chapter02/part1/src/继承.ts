class Animal{
  name: string;

  constructor(name: string){
      this.name = name;
  }

  run(){
      console.log(`父类中的run方法！`);
  }

  say(){
    console.log("hi");
  }
}
class Dog extends Animal{
age: number

constructor(name: string,age: number){
    //如果子类写了构造函数，必须在子类的构造函数中对父类进行调用
    super(name) //调用父类构造器
    this.age = age;
  }
say(){
  super.say()
}
}
const dog = new Dog('哈士奇',3);
// const cat = new Cat('缅因猫',2);
// console.log(dog);
dog.say()
// dog.run()
// console.log(cat);
// cat.say()
// cat.run()
