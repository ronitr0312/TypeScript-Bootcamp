"use strict";
//primitive types: number
const lessonCount = 10;
const total = lessonCount + 10;
console.log(total);
//primitive types: String
let title = 'Typescript Typescript-Bootcamp';
console.log(typeof title);
let subtitle = "Learn the language Fundamentals";
//const fullTitle = title + " : " + subtitle;
const fullTitle = `Full Title: ${title}: ${subtitle}`;
console.log(fullTitle);
//primitive types: Boolean
const published = true;
if (published) {
    console.log("the course is published");
}
printCourse(title, subtitle, 10);
//Only Function we need to use Annotation
function printCourse(tile, subtitle, lessonCount) {
    let fullTitle = title + subtitle;
    console.log(fullTitle);
}
//primitive types: Object
let course = {
    title: 'Typescript Typescript-Bootcamp',
    subtitle: "Learn the language Fundamentals",
    lessonCount: 10,
    author: {
        firstName: "John",
        lastName: "Doe",
    }
};
console.log("Type of Course" + typeof course);
