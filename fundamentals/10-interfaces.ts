interface Course {
    readonly title: string; //This make sure that value is assign only once
    subtitle: string;
    lessonsCount?: number; //Optional property.
}

const course: Course = {
    title: "Typescript Typescript-Bootcamp",
    subtitle: "learn language fundamentals",
    lessonsCount: 10
};

course.subtitle = "Hello World";

const otherCourse: Course = {
    title: "Typescript Typescript-Bootcamp V2",
    subtitle: "learn language fundamentals",
    lessonsCount: 10
};

//type and interface are almost same

type Course1 = {
    readonly title: string; //This make sure that value is assign only once
    subtitle: string;
    lessonsCount?: number; //Optional property.
}

const course1: Course = {
    title: "Typescript Typescript-Bootcamp",
    subtitle: "learn language fundamentals",
    lessonsCount: 10
};

course1.subtitle = "Hello World";

const otherCourse1: Course = {
    title: "Typescript Typescript-Bootcamp V2",
    subtitle: "learn language fundamentals",
    lessonsCount: 10
};

//Only difference is interface are open to expansion
interface Course3 {
    readonly title: string; //This make sure that value is assign only once
    subtitle: string;
    //lessonsCount?: number; //Optional property.
}

const Course3: Course3 = {
    title: "Typescript Typescript-Bootcamp",
    subtitle: "learn language fundamentals",
    //lessonsCount: 10
};

interface Course3{
    lessonsCount?: number;
}

const course4: Course3 = {
    title: "Typescript Typescript-Bootcamp",
    subtitle: "learn language fundamentals",
    lessonsCount: 10
};