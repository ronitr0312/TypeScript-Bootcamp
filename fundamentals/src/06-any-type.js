"use strict";
//Any type should br avoided to use
let lessonCount = 10;
lessonCount = "Hello World!";
lessonCount = [1, 2, 3, 4, 5, 6];
lessonCount = null;
lessonCount = undefined;
lessonCount = {
    title: 'Typescript Typescript-Bootcamp',
};
let numbers = [10, 20, 30, 40, 'Hello World!', 50.2];
//Implicit Any function
function printCourse(title, lessonCount) {
    console.log("Title: " + title + "lessonCount: " + lessonCount);
}
