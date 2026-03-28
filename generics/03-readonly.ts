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
function freeze(course:Course): Readonly<Course> {
    return Object.freeze(course);
}


const frozen = freeze({
    title: "Typescript Bootcamp",
    subtitle: "Learn Fundamentals",
    lessonsCount: 10
})
interface Lesson{
    title: string;
    swqNo: number;
}

function freezeLesson(lesson: Lesson): Readonly<Lesson>{
    return Object.freeze(lesson);

}