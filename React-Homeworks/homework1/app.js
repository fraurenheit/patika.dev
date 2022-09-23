import axios from "axios";

const GetData = async (user_id) => {

    const { data: user }= await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
    const { data: posts }= await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);

    const lastData = [user,...posts];
    return lastData;
}


export default GetData;