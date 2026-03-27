"use strict";
function createCourse(title, subtitle, lessonsCount) {
    console.log(` Creating a course with Title: ${title}, with Subtitle: ${subtitle}, 
    lessonsCount${lessonsCount}`);
    return {
        title,
        subtitle,
        lessonsCount
    };
}
const result = createCourse("Typescript Bootcamp", "learn fundamentals", 100);
console.log(typeof result);
