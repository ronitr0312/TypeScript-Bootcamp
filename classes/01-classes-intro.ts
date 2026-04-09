import {HasId} from "./02-interfaces";


abstract class NewCourse {

}

abstract class Course implements HasId{
/*

    private _title: string;
    private subtitle: string;
    private creationDt: Date;

    constructor(title: string, subtitle: string, creationDt: Date){
        this.title = title;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
    }

*/

    private static TOTAL_COURSES = 0;

    static readonly TYPESCRIPT_TITLE = "TypeScript Bootcamp";

    protected constructor(
        private _title: string,
        private price: number,
        private subtitle = "",
        private creationDt = new Date(2000,1,1)
) {
        this.validate();

    }

    id: string = "123456";
    printId():string {
        throw new Error("Method not implemented.");
    }

    protected validate(){
        if(this.price<=0){
            throw "Please enter a valid price";
        }

    }

    getTitle(){
        return this._title;
    }

    set title(newTitle: string){
        if(!newTitle){
            throw new Error("Title can't be specified");
        }
        this._title = newTitle;

    }

    get age(){
       const ageInMs = new Date().getTime() - this.creationDt.getTime()


        return Math.round(ageInMs / 1000 / 60 / 24);
    }

    static printTitle(course:Course){
        console.log(`The title of the course ${course._title}`);
    }

}

class FreeCourse extends Course {

    constructor(title: string,
                subtitle = "",
                creationDt = new Date(2000, 1, 1)
    ) {
        super(title, 0, subtitle, creationDt);
    }

    validate() {
        console.log("free course is valid");

    }
}
