import React, { useEffect, useState } from "react";


const GetGamesData = () => {
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchGames = async () => {
            const response = await fetch("https://react-http-e4063-default-rtdb.europe-west1.firebasedatabase.app/Games.json"
            );

            if (!response.ok) {
                throw new Error("somthing went wrong");
            }
            console.log(response);
            const responseData = await response.json();

            const loadedGames = [];

            for (const key in responseData) {
                loadedGames.push({
                    id: key,
                    date: responseData[key].date,
                    startTime: responseData[key].startTime,
                    endTime: responseData[key].endTime,
                    court: responseData[key].court,
                    playersSign: responseData[key].playersSign
                })
            }
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
            <section>
                <p>Loading...</p>
            </section>
        );

    if (httpError)
        return (
            <section>
                <p>{httpError}</p>
            </section>
        );

    const gamesList = games.map((game) => (

        <table>
            <thead>
                <tr>
                <th></th>
                
                </tr>
            </thead>
            <tbody>

                <tr key={game.date}>
                    <td>{game.startTime}-{game.endTime}</td>
                    <td></td>
                    <td>{game.court}</td>
                    <td>{game.playersSign}</td>
                </tr>

            </tbody>
        </table>
    ));


    return (
        <div>
            {gamesList}

        </div>
    )





}
export default GetGamesData