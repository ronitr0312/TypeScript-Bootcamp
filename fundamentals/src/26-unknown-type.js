"use strict";
//Any
let anyValue;
anyValue = true;
anyValue = 10;
anyValue = "Hello World!";
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;
let value1 = anyValue;
let value2 = anyValue;
let value3 = anyValue;
let value4 = anyValue;
let value5 = anyValue;
let value6 = anyValue;
let value7 = anyValue;
let value8 = anyValue;
//Unknown
let unknownValue;
unknownValue = true;
unknownValue = 10;
unknownValue = "Hello World!";
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;
let unknownvalue1 = unknownValue;
let unknownvalue2 = unknownValue;
if (typeof unknownValue == "boolean") {
    let unknownvalue3 = unknownValue; //Error if used directly without check
}
if (typeof unknownValue == "number") {
    let unknownvalue4 = unknownValue; //Error if used directly without check
}
if (typeof unknownValue == "string") {
    let unknownvalue5 = unknownValue; //Error if used directly without check
}
if (typeof unknownValue == "object") {
    let unknownvalue6 = unknownValue; //Error if used directly without check
}
//let unknownvalue7: any[] = unknownValue; //Error if used directly without check
if (typeof unknownValue == "function") {
    let unknownvalue8 = unknownValue; //Error if used directly without check
}
