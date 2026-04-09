//Any

let anyValue: any;
anyValue = true;
anyValue = 10;
anyValue = "Hello World!";
anyValue = [];
anyValue = {};
anyValue =null;
anyValue = undefined;

let value1: unknown = anyValue;
let value2: any = anyValue;
let value3: boolean = anyValue;
let value4: number = anyValue;
let value5: string = anyValue;
let value6: object = anyValue;
let value7: any[] = anyValue;
let value8: Function = anyValue;


//Unknown
let unknownValue: unknown;
unknownValue = true;
unknownValue = 10;
unknownValue = "Hello World!";
unknownValue = [];
unknownValue = {};
unknownValue =null;
unknownValue=Object;
unknownValue = undefined;

let unknownvalue1: unknown = unknownValue;
let unknownvalue2: any = unknownValue;

if(typeof unknownValue == "boolean") {
    let unknownvalue3: boolean = unknownValue; //Error if used directly without check
}
if(typeof unknownValue == "number") {
    let unknownvalue4: number = unknownValue;   //Error if used directly without check
}
if(typeof unknownValue == "string") {
let unknownvalue5: string = unknownValue; //Error if used directly without check
    }

if(typeof unknownValue == "object") {
    let unknownvalue6: object|null = unknownValue; //Error if used directly without check
}

//let unknownvalue7: any[] = unknownValue; //Error if used directly without check
if(typeof unknownValue == "function") {
    let unknownvalue8: Function = unknownValue; //Error if used directly without check
}