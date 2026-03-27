"use strict";
function printCourse(title, subtitle, lessonsCount = 0) {
    console.log(`Title: ${title}, subtitle: ${subtitle}, lessonsCount: ${lessonsCount}`);
}
printCourse("Typescript Bootcamp", "Learning language fundamentals", 10);
printCourse("Typescript Bootcamp", "Learning language fundamentals");
