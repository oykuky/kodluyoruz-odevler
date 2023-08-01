import axios from 'axios';

const getData = async (id) => {
    const {data : getdata} = await axios ("https://jsonplaceholder.typicode.com/users/" + id); 
    const {data : getpost} = await axios ("https://jsonplaceholder.typicode.com/posts?userId=" + id);
    // verileri birleştir
    const merge = {
        getdata,
        getpost
    }
    return merge;
};



export default getData ; // default olarak dışa aktarma
