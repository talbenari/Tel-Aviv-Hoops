

import { useEffect, useState } from "react";
import Schedule from "./Schedule";

const FullSchedule = () => {
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchGames = async () => {
            const response = await fetch(
                "https://react-http-e4063-default-rtdb.europe-west1.firebasedatabase.app/Games.json"
            );

            if (!response.ok) {
                throw new Error("Somthing went wrong!");
            }

            const responseData = await response.json();
            const arrayOfResponseData = Object.entries(responseData);
            console.log(responseData);
            console.log(arrayOfResponseData);

            const loadedGames = [];

            for (let game of arrayOfResponseData) {
                loadedGames.push({
                    id: game[0],
                    date: game[1].date,
                    startTime: game[1].startTime,
                    endTime: game[1].endTime,
                    court: game[1].court,
                    playersSign: game[1].playersSign
                });
            }
            // console.log(loadedGames);
            setGames(loadedGames);
            setIsLoading(false);
        };
        fetchGames().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    if (isLoading)
        return (

            <p>Loading....</p>

        );

    if (httpError)
        return (
            <section>
                <p>{httpError}</p>
            </section>
        );

    console.log(games);
    return (
        <>
            <Schedule games={games} />
        </>
    )


};

export default FullSchedule








