"use strict";
function saveCourse(course, callback) {
    this.course = course;
    setTimeout(() => {
        callback(this.course?.title ?? " unknown course");
    }, 1);
}
saveCourse({ title: "Typescript Bootcamp" }, () => {
    console.log("Save Successfully...Arrow");
});
