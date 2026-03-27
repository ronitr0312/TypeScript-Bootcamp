interface Course {
    readonly title: string; //This make sure that value is assign only once
    subtitle: string;
    lessonsCount?: number; //Optional property.
}


export const course: Course = {
    title: "Typescript Typescript-Bootcamp",
    subtitle: "learn language fundamentals",
    lessonsCount: 10
};

export const courseV2 : Course = {
    title: "Typescript Typescript-Bootcamp V2",
    subtitle: "learn language fundamentals",
    lessonsCount: 10
};

export const courseV3 : Course = {
    title: "Typescript Typescript-Bootcamp V3",
    subtitle: "learn language fundamentals",
    lessonsCount: 10
};
