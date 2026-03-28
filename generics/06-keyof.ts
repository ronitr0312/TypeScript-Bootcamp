import {Course} from "./04-generic-function";

const course: Course= {
    title: "Typescript Bootcamp",
    subtitle: "Learn Fundamentals",
    lessonsCount: 10
};

type CourseKey = keyof Course; // "title" | "subtitle" | "lessonsCount"

export function extractProperty<T,K extends keyof T>(data:T, property: K) {
    return data[property];
}

const val = extractProperty(course,"title");
