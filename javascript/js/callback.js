setTimeout (() => {console.log("hi")}, 2000); //2sn sonra çalışır

// setInterval (() => {
//     console.log("ben her saniye çalışacağım") 
// },1000 );

// const sayHi = () => {console.log("hi");
// }

// sayHi();


// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then( (data ) => data.json())
// .then((users) => console.log(users));

 //Fetch ile kullanım 
 // import fetch from "node-fetch";
//async sadece fonksiyonlarda kullanılır
// async function getData() {
//     const users = await (
//         await fetch("https://jsonplaceholder.typicode.com/users")
//         ).json();

//         const post1 = await (
//             await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         ).json();

//         const post2 = await (
//             await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         ).json();
        
//         console.log("users", users);
//         console.log("post1", post1);
//         console.log("post2", post2);

// }
// getData();

//axios ile kullanım
import axios from "axios";
 ( async () =>  {

        const {data : users} = await axios(
            "https://jsonplaceholder.typicode.com/users");
        

        const{ data :post1} = await axios(
            "https://jsonplaceholder.typicode.com/posts/1");
        

        const {data : post2} = await axios(
            "https://jsonplaceholder.typicode.com/posts/1");
        
        
        console.log("users", users);
        console.log("post1", post1);
        console.log("post2", post2);

})();

//async-await ile yukarıdaki işlem bitmeden aşağıdakilere geçilmesi önlenir