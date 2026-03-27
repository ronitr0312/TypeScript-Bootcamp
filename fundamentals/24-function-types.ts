interface Course{
    title: string;
    subtitle: string;
    lessonsCount: number;
}

type createCourse = (title:string, subtitle:string,lessonsCount:number) => Course;

type OnCourseCreated = (course: Course) => void;

const createCourse = (title:string, subtitle:string,lessonsCount:number,callback: Function) =>{

    console.log(` Creating a course with Title: ${title}, with Subtitle: ${subtitle}, 
    lessonsCount${lessonsCount}`);

    const course = {
        title,
        subtitle,
        lessonsCount
    }

    callback();
    return course;

}



//const result =createCourse("Typescript Typescript-Bootcamp","learn fundamentals",100);

//console.log(typeof result);