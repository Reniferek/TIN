function Student(first, last, index, gradesArr) {
    this.firstName = first;
    this.lastName = last;
    this.index = index;
    this.grades = gradesArr;

this.showStudent = function() {
        var sum = 0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += parseInt(this.grades[i], 10)
        }
        var avg = sum/this.grades.length;
        return "Name:" + this.firstName + " Surname:" + this.lastName + " GradeAvg: " + avg;
    };
}

var Adam = new Student("Adam", "Soltanowski", 15520, [5,4,2,5]);

console.log(Adam.showStudent());