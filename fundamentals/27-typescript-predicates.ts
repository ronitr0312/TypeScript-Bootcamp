interface Course {
    readonly title: string; //This make sure that value is assign only once
    subtitle: string;
    lessonsCount?: number; //Optional property.
}

const course: unknown = {
    title: "Typescript Typescript-Bootcamp",
    subtitle: "learn language fundamentals",
    lessonsCount: 10
};

if(isCourse(course)){

}
//Predicate
function isCourse(value: unknown): value is Course{

    const course = value as Course;

    return course?.title != null && course?.subtitle != null;
}
