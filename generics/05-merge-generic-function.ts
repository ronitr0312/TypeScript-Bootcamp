const someData= {
    title: "Typescript Bootcamp",
    subtitle: "Learn Fundamentals",
    lessonsCount: 10
};

const moreData = {
    title: "Typescript Lesson",
    seqNo: 1,
};

export function merge<T,U>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2) as (T & U);
}

const merged = merge(someData, moreData);

console.log(merged);