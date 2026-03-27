
type courseRecord = [string, string, number];


const courseRecord: courseRecord = ["Typescript Typescript-Bootcamp","learn fundamentals",100];

function creaateCourse(title: string, subtitle: string) :courseRecord{

    console.log(` Creating a course with Title: ${title}, with Subtitle: ${subtitle}`);

    return [title, subtitle, 100];
}