class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get fullName() {
        return this.name + ' ' + this.surname;
    }

    set fullName(name) {
        var words = name.split(' ');
        this.name = words[0] || '';
        this.surname = words[1] || '';
    }
}

class Student extends Person {
    constructor(name, surname, index, grades) {
        super(name, surname);
        this.index = index;
        this.grades = grades;
      }

      
    studentStatus() {
        var sum = 0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += parseInt(this.grades[i], 10);
        }
        var avg = sum/this.grades.length;
        return "id: " + this.index + " name:" + this.name + " " + this.surname + " avg:" + avg;
    };


    get AvgGrade() {
        var sum = 0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += parseInt(this.grades[i], 10);
        }
        var avg = sum/this.grades.length;
        return avg;
    }
}

var Dora = new Person('Dora', 'Explorer');
var Adamik = new Student('Adam', 'Soltanowski', 15520, [5,4,5,4,5]);

console.log(Dora);
Dora.fullName = 'Adamik Duda';
console.log(Dora);
console.log(Dora.fullName);
console.log(Adamik.studentStatus());
console.log(Adamik.AvgGrade)
