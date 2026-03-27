"use strict";
//let neverValue: never = undefined; //we cannot assign any value.
let courseStatus;
if (courseStatus === "draft") {
}
else if (courseStatus === "published") {
}
else {
    const value = courseStatus; //this will be of type never
    unexpectedError(courseStatus);
}
function unexpectedError(value) {
    throw new Error(`Unexpected error: ${value}`);
}
