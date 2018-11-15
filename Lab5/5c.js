var Courses = { 
    obligatoryCourses: ['PRO', 'GRK', 'TIN', 'BYT']
};

function createStudent(_index, _name, _surname) { 
    var student = Object.create(Courses);
    student.index = _index;
    student.name = _name;
    student.surname = _surname;
    return student;
}

var showStudent = createStudent(12345, 'Adam', 'Nowak');

console.log(showStudent);
console.log(showStudent.obligatoryCourses);