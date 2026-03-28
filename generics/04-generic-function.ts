export interface Course{
    title: string;
    subtitle: string;
    lessonsCount: number;

}

export interface ImmutableCourse{
    title: string;
    subtitle: string;
    lessonsCount: number;

}

/*function freeze(course:Course): ImmutableCourse{
    return Object.freeze(course);
}*/
function freezeCourse(course:Course): Readonly<Course> {
    return Object.freeze(course);
}

const course: Course= { //freezeCourse
    title: "Typescript Bootcamp",
        subtitle: "Learn Fundamentals",
        lessonsCount: 10
}

const frozenCourse = freeze(course);

interface Lesson{
    title: string;
    seqNo: number;
}

function freezeLesson(lesson: Lesson): Readonly<Lesson>{//freezeLesson(lesson: Lesson): Readonly<Lesson>{
    return Object.freeze(lesson);

}

const frozenLesson = freeze({ //freezeLesson
    title: "Typescript Lesson",
    seqNo: 1,
});

const frozenNumber = freeze(10);


function freeze<T extends Object>(input: T): Readonly<T>{
    return  Object.freeze(input);
}

