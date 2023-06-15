import React, { useEffect, useState } from "react";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [dogData, setDogData] = useState([]);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(dog => {
                setDogData(dog.message);
                setIsLoaded(true);
            });
    }, [])

    if(!isLoaded) return <p>Loading...</p>

    return <img src={dogData} alt="A Random Dog" />
}

export default App;