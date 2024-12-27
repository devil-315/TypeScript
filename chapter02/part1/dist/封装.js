"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this.name = name;
            this._age = age;
        }
        getName() {
            return this.name;
        }
        setName(value) {
            this.name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            this._age = value;
        }
    }
    const per = new Person('devil', 18);
    // per.age = -10
    // console.log(per.age);
    console.log(per);
    per.setName('孙悟空');
    console.log(per.getName());
    console.log(per.age);
    per.age = 89;
    console.log(per.age);
})();
