"use strict";
const course1 = {
    title: "Typescript Bootcamp",
    lessonsCount: 10
};
const course2 = {
    title: "Angular Bootcamp",
    lessonsCount: 20
};
function printCourse(message, ...courses) {
    console.log(message);
    for (let course of courses) {
        console.log(course.title);
    }
}
printCourse("Welcome to Courses", course1, course2);
