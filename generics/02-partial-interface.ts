
export interface Course{
    title: string;
    subtitle: string;
    lessonsCount: number;

}

export interface CourseUpdate {
    title?: string;
    subtitle?: string;
    lessonsCount?: number;

}

/*export function updateCourse(courseId: string, update:CourseUpdate){

}*/

export function updateCourse(courseId: string, update:Partial<Course>) {

}

updateCourse("1",{title: "New Version of title"})

updateCourse("1",{subtitle: "New Version of subtitle"})

updateCourse("1",{subtitle: "New Version of subtitle",
    lessonsCount:100})