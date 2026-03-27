interface HasId{
    id: string;
}

interface HasTitle {
    title: string;
    description: string;
}

type Course = HasId & HasTitle;

const course: Course = {
    id: "12345",
    title: "Typescript Typescript-Bootcamp",
    description: "This is the typescript Typescript-Bootcamp"
}