import {course, PAGE_SIZE} from "./12-module-export";


const pageSize = PAGE_SIZE;

const Course = course;

export {
    PAGE_SIZE as MAX_PAGE_SIZE,
}

import {Course,loadAllCourses,saveCourseFunction} from "./14-module-reexports/14-module-reexport";


