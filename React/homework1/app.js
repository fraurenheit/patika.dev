import axios from "axios";

// export default async (user_id) => {
//     try {
//         const{ data:user } = await axios(
//             "https://jsonplaceholder.typicode.com/users/1" + user_id);

//         const{ data:posts } = await axios(
//             "https://jsonplaceholder.typicode.com/posts?userId=1" + user_id);
            
//         return { user, posts };
//     } catch (e) {
//         return e;
//     }
// };

const GetData = async (user_id) => {

    const { data: user }= await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
    const { data: posts }= await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);

    const lastData = [user,...posts];
    return lastData;
}

export default GetData;