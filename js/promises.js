"use strict";

// call back for asynchronous operations
function wait(number){
    const promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            resolve();
        },  number)
    });
    return promise;
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



fetch('https://api.github.com/users', {headers: {'Authorization': 'token b3df9f6ed3c2a4b2e085900ea65788f34120c6f0'}})



function github(username){
    const promise = new Promise(function (resolve, reject){

    });
    return promise;
}

github.then(() => console.log('resolved'));
github.catch(() => console.log('rejected'));