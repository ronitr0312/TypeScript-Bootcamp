export interface Course {
    readonly title: string; //This make sure that value is assign only once
    subtitle: string;
    lessonsCount?: number; //Optional property.
}