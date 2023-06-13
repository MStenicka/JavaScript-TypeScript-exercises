import { skip } from 'tape';
import { isNumberObject } from 'util/types';

// https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/inheritance/green-fox/ts.md
export {};
class Person {
  name: string;
  age: number;
  gender: string = 'male' || 'female';

  constructor(
    name: string = 'Jane Doe',
    age: number = 30,
    gender: string = 'female',
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
  }
}

class Student extends Person {
  previousOrganization: string;
  skippedDays: number = 0;

  constructor(
    name: string = 'Jane Doe',
    age: number = 30,
    gender: string = 'female',
    previousOrganization: string = 'The School of Life',
  ) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
  }
  getGoal() {
    console.log('My goal is: Be a junior software developer.');
  }
  introduce() {
    console.log(
      `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`,
    );
  }
  skipDays(numberOfDays: number) {
    return (this.skippedDays += numberOfDays);
  }
}

class Mentor extends Person {
  level: string = 'junior' || 'intermediate' || 'senior';
  constructor(
    name: string = 'Jane Doe',
    age: number = 30,
    gender: string = 'female',
    level: string = 'intermediate',
  ) {
    super(name, age, gender);
    this.level = level;
  }
  getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.');
  }
  introduce() {
    console.log(
      `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`,
    );
  }
}

class Sponsor extends Person {
  company: string;
  hiredStudents: number;

  constructor(
    name: string = 'Jane Doe',
    age: number = 30,
    gender: string = 'female',
    company: string = 'Google',
    hiredStudents: number = 0,
  ) {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = hiredStudents;
  }
  getGoal() {
    console.log('My goal is: Hire brilliant junior software developers.');
  }
  introduce() {
    console.log(
      `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}  who represents ${this.company} and hired ${this.hiredStudents}, students so far.`,
    );
  }
  hire() {
    return (this.hiredStudents += 1);
  }
}

class Cohort {
  name: string;
  students: Student[] = [];
  mentors: Mentor[] = [];

  constructor(name: string) {
    this.name = name;
  }
  addStudent(student: Student) {
    this.students.push(student);
  }
  addMentor(mentor: Mentor) {
    this.mentors.push(mentor);
  }
  info() {
    console.log(
      `The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`,
    );
  }
}

// Test input
const people: Person[] = [];

const mark = new Person('Mark', 46, 'male');
people.push(mark);

const jane = new Person();
people.push(jane);

const john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

const student = new Student();
people.push(student);

const gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

const mentor = new Mentor();
people.push(mentor);

const elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

const sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

const awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();
