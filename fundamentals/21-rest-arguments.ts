interface Course {
    readonly title: string; //This make sure that value is assign only once
    lessonsCount?: number; //Optional property.
}

const course1: Course = {
    title: "Typescript Typescript-Bootcamp",
    lessonsCount: 10
};

const course2: Course = {
    title: "Angular Typescript-Bootcamp",
    lessonsCount: 20
};

function printCourse(message:string, ...courses:Course[]) {
    console.log(message);

    for (let course of courses) {
        console.log(course.title);
    }
}

printCourse("Welcome to Courses",course1,course2);

