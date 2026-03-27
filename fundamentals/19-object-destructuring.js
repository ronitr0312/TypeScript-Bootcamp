"use strict";
const course = {
    title: "Typescript Bootcamp",
    subtitle: "learn language fundamentals",
    lessonsCount: 10
};
printCourse(course);
function printCourse(course) {
    const { title, subtitle, lessonsCount } = course;
    console.log(`Title: ${title}, subtitle: ${subtitle}, lessonsCount: ${lessonsCount}`);
}
