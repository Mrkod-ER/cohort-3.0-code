import { useState, useEffect } from "react";


// custom hooks
// export function useFetch() {
//     const [post, setPost] = useState({});

//     async function getPosts() {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const data = await response.json();
//         console.log(data);
//         setPost(data);
//     }

//     useEffect(() => {
//         getPosts();
//     }, []);

//     return post;   
// }

export function useFetch(url) {
    const [finalData, setFinalData] = useState({});

    useEffect(() => {
        async function getDetials() {
            const response = await fetch(url);
            const json = await response.json();
            setFinalData(json);
        }

        getDetials();
        
    }, [url]);

    return {
        finalData
    }
}

