// console.log('Test!');



// Task 1

const testTen = (num) => {
    let newNumber = new Promise((resolve, reject) => {
        if(num > 10) {
            resolve(num + " is greater than 10, successfully!") 
        } else {
            reject(num + " is less than 10, ERROR!");
        }
    })
    return newNumber
}


setTimeout(() => {
    testTen(16)
.then(result => document.body.innerHTML += (result))
.catch(error => console.log(error))

    testTen(5)
.then(result => document.body.innerHTML += (result))
.catch(error => console.log(error));
}, 2000);





// Task 2

let arrayOfString = ['Lakers', 'Heat', 'Mavericks', 'Nets', 'Bulls', 'Knicks'];
let arrayOf = []


const changeAllToCaps = array => {
       let caps = new Promise((resolve, reject) => {
        resolve(arrayOf = array.map(teams => {
            if(typeof teams === 'string') {
                return teams.toUpperCase();
            } else {
                reject('ERROR!');
            }
        }))
    })
    return caps
}

changeAllToCaps(arrayOfString)
.then(result => console.log(result))
.catch(error => console.log(error))





let sortedArray = ['Los Angeles', 'Miami', 'Dallas', 'Brooklyn', 'Chicago', 'New York'];


const sortStrings = array => {
    return new Promise((resolve, reject) => {
        if(array.length >= 2) {
            resolve(array.sort());
        } else {
            reject('ERROR!');
        }
    })
}

sortStrings(sortedArray)
.then(result => console.log(result))
.catch(error => console.log(error))





// Please comment sortStrings() function above and let arrays to see them sorted like for every city, every team :)
const final = (arrayOne, arrayTwo) => {
    setTimeout(() => {
        return Promise.all([arrayOne, arrayTwo])
        .then(teams => console.log(teams))
        .catch(error => console.log(error))
        .finally(() => console.log(`Everything is done in ${Math.round(performance.now())} ms`))
    }, 2000);
}

final(sortedArray, arrayOf);







//BONUS


const bonusFunction = async () => {
    try {
        let numTen  = await testTen(21);
        console.log(numTen);
        final(sortedArray, arrayOf)
        console.log(`Everything done in ${Math.round(performance.now())} ms.`);
    } catch (error) {
        console.log(error);
    }
}

bonusFunction();


























// George HOMEWORK!






// const myUl = document.getElementById("myUl");
// const myParagTime = document.getElementById("myParag");



// Task 1

// const testTen = (num) => {
//     let newNumber = new Promise((resolve, reject) => {
//         if(num > 10) {
//             resolve(num + " is greater than 10, successfully!") 
//         } else {
//             reject(num + " is less than 10, ERROR!");
//         }
//     })
//     return newNumber
// }




// setTimeout(() => {
//     testTen(16)
// .then(result => document.body.innerHTML += (result))
// .catch(error => console.log(error))

//     testTen(5)
// .then(result => document.body.innerHTML += (result))
// .catch(error => console.log(error));
// }, 2000);




// //async/await

// const taskOneFunction = async (number) => {
//     try {
//         console.log(await testTen(number))
//     } catch(error) {
//         console.log(error);
//     }

// }

// taskOneFunction(79);






// Task 2

// let arrayOfString = ['Lakers', 'Heat', 'Mavericks', 'Nets', 'Bulls', 'Knicks'];


// let isString = arr => {
//     for (const el of arr) {
//         if(el !== String) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// }


// let caps = arr => {
//     arr.map(arrayOfString => {
//         return arrayOfString.toUpperCase();
//     })
// }


// let isNotString = currentValue => currentValue === String(currentValue);
// console.log(arrayOfString.every(isNotString));



// let allToCaps = array => {
//     return new Promise((resolve, reject) => {
//         if(arrayOfString.every(isNotString) === false || arrayOfString.length <= 1) {
//             reject('There is something else in the array')
//         } else {
//             setTimeout(() => {
//                 resolve(caps(array.sort()))
//             }, 2000)
//         }
//     })
// };


// let allToCaps = (array) => {
//     return new Promise((resolve, reject) => {
//         if (arrayOfString.every(isNotString) === false) {
//             reject("There is something else in the array")
//         } else {
//             setTimeout(() => {
//                 resolve(caps(array))
//             }, 2000)

//         }
//     });
// };


// let allCapitalized = async (array) => {
//     try {
//         console.log(await allToCaps(array));
//     } catch {
//         console.log(arror);
//     }
//         console.log(`Everything is done in ${Math.round(performance.now())} ms`)
// }

// allCapitalized(arrayOfString);




// Sorting

// let sortingArray = array => {
//     return new Promise((resolve, reject) => {
//         if(arrayOfString.every(isNotString) === false || array.length <= 1) {
//             reject("There are not enough words in the array");
//         } else {
//             setTimeout(() => {
//                 resolve(array.sort())
//             }, 2000)
//         }
//     })
// }





// const allSorted = async (array) => {
//     try {
//         console.log(await sortingArray(array));
//     } catch(error) {
//         console.log(error);
//     }
//         console.log(`Everything is done in ${Math.round(performance.now())} ms`);
// }

// allSorted(arrayOfString);





//Final Print

// let printAll = teams => {
//     for(const team of teams) {
//         myUl.innerHTML += `
//         <li>${team}</li>`
//     };
// };




// async function showArrayAsync(array) {
//     try {
//         const allCapitalized = await allToCaps(array)
//         console.log(await sortingArray(allCapitalized))
//         printAll(await sortingArray(allCapitalized))
//         myParagTime.style.color = "blue";
//         myParagTime.innerText = (`Everything is done in ${Math.round(performance.now())} ms`)
//     } catch (error) {
//         myParagTime.innerText = " ";
//         myParagTime.style.color = "red";
//         myParagTime.innerText += `${error} Everything is done in ${Math.round(performance.now())} ms`
//     }
// }
// showArrayAsync();



















