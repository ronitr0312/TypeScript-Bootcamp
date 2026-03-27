interface Course{
    title: string;
    subtitle: string;
    lessonsCount: number;
}

function createCourse(title:string, subtitle:string,lessonsCount:number):Course{

    console.log(` Creating a course with Title: ${title}, with Subtitle: ${subtitle}, 
    lessonsCount${lessonsCount}`);

    return {
        title,
        subtitle,
        lessonsCount
    }

}

const result =createCourse("Typescript Typescript-Bootcamp","learn fundamentals",100);

console.log(typeof result);