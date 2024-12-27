(function(){
  class Person{
    private name:string;
    private _age:number;
    constructor(name:string,age:number){
      this.name = name;
      this._age = age
    }
    getName(){
      return this.name;
    }
    setName(value: string){
      this.name = value;
    }
    get age(){
      return this._age
    }
    set age(value:number){
      this._age = value
    }
  }

  
  const per = new Person('devil',18)
  // per.age = -10
  // console.log(per.age);
  console.log(per);
  per.setName('孙悟空')
  console.log(per.getName());
  console.log(per.age);
  per.age = 89
  console.log(per.age);
  
})()