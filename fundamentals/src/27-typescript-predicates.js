"use strict";
const course = {
    title: "Typescript Typescript-Bootcamp",
    subtitle: "learn language fundamentals",
    lessonsCount: 10
};
if (isCourse(course)) {
}
//Predicate
function isCourse(value) {
    const course = value;
    return course?.title != null && course?.subtitle != null;
}
