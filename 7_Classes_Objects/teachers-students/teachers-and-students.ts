'use strict';

/*Teacher Student
Create Student and Teacher classes
Student
learn() -> prints: the student is actually learning
question(teacher) -> calls the teacher's giveAnswer() method
Teacher
teach(student) -> calls the student's learn() method
giveAnswer() -> prints: the teacher is answering a question
Instantiate a Student and Teacher object
Call the student's question() method and the teacher's teach() method */

class Student {
  learn(): void {
    console.log('the student is actually learning');
  }
  question(teacher: Teacher): void {
    teacher.giveAnswer();
  }
}

class Teacher {
  teach(student: Student): void {
    student.learn();
  }
  giveAnswer(): void {
    console.log('the teacher is answering a question');
  }
}

const student = new Student();
const teacher = new Teacher();

teacher.teach(student);
student.question(teacher);

export { Student, Teacher };
