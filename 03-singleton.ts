
export class CourseService{

    private static INSTANCE: CourseService;

    private constructor () {

    }

    static instance(){
        if(!CourseService.INSTANCE){
            CourseService.INSTANCE = new CourseService();
        }
        return CourseService.INSTANCE;
    }


}