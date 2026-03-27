"use strict";
const createCourse = (title, subtitle, lessonsCount, callback) => {
    console.log(` Creating a course with Title: ${title}, with Subtitle: ${subtitle}, 
    lessonsCount${lessonsCount}`);
    const course = {
        title,
        subtitle,
        lessonsCount
    };
    callback();
    return course;
};
//const result =createCourse("Typescript Typescript-Bootcamp","learn fundamentals",100);
//console.log(typeof result);
