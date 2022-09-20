// setTimeout(() => {
//     console.log("Hello");
// },5000)

// setInterval(()=>{
//     console.log("Hey,im gonna shake this code all night long");
// },1000);

// const sayHi = (cb) => {
//     cb();
// };

// sayHi(() => {
//     console.log("Hi");
// });

import fetch from "node-fetch";
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users) => {
//     console.log("users added!", users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((data) => data.json())
//         .then((post) => {
//             console.log("post 1 added!", post);

//     fetch("https://jsonplaceholder.typicode.com/posts/2")
//         .then((data) => data.json())
//         .then((data) => console.log("post 2 added", data));
// });
// });

// async function getData(){
//     const users = await (
//         await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();

//     const post1 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json();

//     const post2 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")
//     ).json();

//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// }

// getData();

// (async () => {
//     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");

//     const post1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");

//     const post2 = await axios("https://jsonplaceholder.typicode.com/posts/2");

//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// })();

const getUsers = () => {
    return new Promise(async (resolve, reject)=> {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users");
        
        resolve(data);
    });
};

const getPost = (post_id) => {
    return new Promise(async (resolve, reject)=> {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts" + post_id);
        
        resolve(data);
    });
};

// (async() => {

//     try{
//         const users = await getUsers();
//         const post = await getPost(1)

//         console.log(users);
//         console.log(post);
//     }catch(e){
//         console.log(e);
//     }
    
// })();

Promise.all([getUsers, getPost(1)])
.then(console.log)
.catch(console.log);

//resolve'da geçilen parametre,then'e düşüyor.
