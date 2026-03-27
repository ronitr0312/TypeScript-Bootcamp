"use strict";
const course = {
    title: "Typescript Typescript-Bootcamp",
    subtitle: "Learn th language fundamentals",
    stats: {
        lessonsCount: 10
    }
};
console.log("course: " + course);
//deep copy
const newCourse = {
    title: course.title,
    subtitle: course.subtitle,
    stats: {
        lessonsCount: course.stats.lessonsCount
    }
};
console.log(newCourse);
newCourse.stats.lessonsCount = 100;
console.log(newCourse);
//shallow copy
const newCourse1 = {
    title: course.title,
    subtitle: course.subtitle,
    stats: course.stats
};
newCourse1.stats.lessonsCount = 120;
console.log(newCourse1);
//this can be consume lot of time we can create shallow copy directly:
const newCourse2 = { ...course }; //create shallow copy this is inbuild function
newCourse2.stats.lessonsCount = 150;
console.log(newCourse2);
console.log(newCourse1);
//there is no inbuild function to create Deep copy we can use library like cloneDeep
