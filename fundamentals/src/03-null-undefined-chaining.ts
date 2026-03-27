let title:string;

console.log("Title:"+title);//Undefined

if(!title){
    console.log("the value of title is not known yet...");
}
//Undefined is considered as false

//Optional Value

let title1:string = null;

console.log("Title1:"+title1);//Undefined

if(!title){
    console.log("the value of title1 is not known yet...");
}

//Optional Chaining

let course = {
    title3: 'Typescript Typescript-Bootcamp',
};

const title3 = course?.title3  ?? "No title found"

if(course?.title3)//course && course.title
    console.log('The title is:' + course.title3);
