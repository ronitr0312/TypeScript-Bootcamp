
interface Course{
    title: string;
    subtitle: string;
    lessonsCount: number;
}

const title = "Typescript Typescript-Bootcamp";
const subtitle = "learn language fundamentals";
const lessonsCount = 10;

const course: Course = {
    title,
    subtitle,
    lessonsCount
};

console.log(course);
