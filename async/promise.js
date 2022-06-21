

const done = true;

const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here is the thing I built';
        setTimeout(() => resolve(workDone), 3000);
        console.log("in done")
    } else {
        const why = 'Still working on something else';
        reject(why);
    }
});

console.log(isItDoneYet)
isItDoneYet.then((msg) => {
    console.log(msg);
    console.log(isItDoneYet);
},
    (err) => console.log(err)
);

// const doSomething = async () => {
//     console.log(await isItDoneYet);
// };

// const doSomething = async () => {
//     console.log(await isItDoneYet());
// };

// doSomething();

// const doSomethingAsync = () => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve('I did something'), 3000);
//     });
// };

// const doSomething = async () => {
//     console.log(await doSomethingAsync());
// };

// doSomething();
