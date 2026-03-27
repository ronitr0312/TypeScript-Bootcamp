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

printCourse(course);

function printCourse(course:Course){

    const {title, subtitle, lessonsCount} = course; // another way const {title, ...others} = course;

    console.log(`Title: ${title}, subtitle: ${subtitle}, lessonsCount: ${lessonsCount}`);
}
