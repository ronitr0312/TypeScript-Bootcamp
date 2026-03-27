
//let neverValue: never = undefined; //we cannot assign any value.

type CourseStatus = "draft" | "published";

let courseStatus : CourseStatus;

if(courseStatus === "draft"){

}
else if(courseStatus === "published"){

}
else {

    const value = courseStatus; //this will be of type never
    unexpectedError(courseStatus)
}

function unexpectedError(value:never){
    throw new Error(`Unexpected error: ${value}`);
}
