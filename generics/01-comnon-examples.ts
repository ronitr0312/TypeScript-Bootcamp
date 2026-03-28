
const number = new Array<number>();

number.push(10);


const promise = new Promise<string>((resolve, reject) => {

    resolve("hello World!");
});

promise.then(val => console.log(val));