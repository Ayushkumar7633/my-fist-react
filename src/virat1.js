class student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(this.name, this.age);
  }
}
let timtim = new student("ayush", 12);
ayush.greet();
