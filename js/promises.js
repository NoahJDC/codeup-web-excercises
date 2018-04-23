"use strict";

// call back for asynchronous operations
// function wait(number){
//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(()=>{
//             resolve();
//         },  number)
//     });
//     return promise;
// }
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

////////




// function github(){
//         fetch('https://api.github.com/users/noahjdc/events', {headers: {'Authorization': 'token  b3df9f6ed3c2a4b2e085900ea65788f34120c6f0'}})
//             .then((response) => {console.log(response.json())})
//             .then((events) => (events[0])
//                 .then((create) => create.created_at)
//                 .then((date) => console.log(date))
//             .catch(error => console.log(error)));
// }
//
// github();
//
// github.then(() => console.log('resolved'));
// github.catch(() => console.log('rejected'));

function github(){
    fetch('https://api.github.com/users/noahjdc/events/public',
        // {headers: {'Authorization': 'token  b3df9f6ed3c2a4b2e085900ea65788f34120c6f0'}})
        .then(response => response.json())
        .then((users) => console.log(users[0].created_at));

}
github();
