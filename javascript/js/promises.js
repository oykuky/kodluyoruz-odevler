new Promise ((resolve,reject) => {
    //işlem bitmiş ve baaşrılıysa
    //.then ile alınır
    resolve({
        name: 'oyku',
        surname: 'kaya'
    })
    reject("fail")
    //işlem hatalı ise
    //.catch ile hata yakalanır
})

.then(data => {
    data.age = 18;
    return data
})
.then(data => {
    console.log(data)
})

.catch(data => {
    console.log(data)
})

.finally(() => {
    console.log('finished')
})




// import axios from "axios";

// const getPosts  = () => {
//     return new Promise(async (resolve,reject) => {
//         const {data} = await axios ("https://jsonplaceholder.typicode.com/posts/1")
//         resolve(data);
//     });
// };

// getPosts().then ((data) => console.log(data))
// .catch((e) => console.log(e));


