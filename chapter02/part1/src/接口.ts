interface myInter{
  name: string;
  sayHello():void;
}

class MyClass implements myInter{
  name: string;
  constructor(name:string){
    this.name = name
  }
  sayHello(): void {
    console.log("大家好");
  }
}