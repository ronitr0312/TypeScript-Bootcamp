"use strict";
const course = {
    title: "Typescript Typescript-Bootcamp",
    subtitle: "learn language fundamentals",
    lessonsCount: 10
};
printCourse(course);
function printCourse(course) {
    const { title, subtitle, lessonsCount } = course; // another way const {title, ...others} = course;
    console.log(`Title: ${title}, subtitle: ${subtitle}, lessonsCount: ${lessonsCount}`);
}
