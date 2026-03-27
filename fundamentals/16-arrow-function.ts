
interface Course {
    title:string
}
function saveCourse(course: Course, callback: Function) {

    this.course = course
    setTimeout(() => {

        callback(this.course?.title ?? " unknown course");
    },1);
}


saveCourse({title:"Typescript Typescript-Bootcamp"}, () =>{ //Arrow Syntax
    console.log("Save Successfully...Arrow");
});