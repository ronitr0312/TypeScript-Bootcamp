//@SealClass()
//@DatabaseService()
class DbService {


   // @Perf()
    //@Log(LoggingLevel.DEBUG)
    saveData(data: any) {
        console.log('saving data in the database...');
    }
}

class Course{

    //@DatabaseId()
    id: string;

    title:string
}
