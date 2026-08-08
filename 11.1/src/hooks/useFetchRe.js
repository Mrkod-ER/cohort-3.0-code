import { useState, useEffect } from "react";

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

