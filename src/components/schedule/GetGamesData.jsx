

import { useEffect, useState } from "react";
import Schedule from "./Schedule";

const GetGamesData = () => {
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

export default GetGamesData;








// import React, { useEffect, useState } from "react";


// const GetGamesData = () => {
//     const [games, setGames] = useState([]);
//     const [httpError, setHttpError] = useState();

//     useEffect(() => {
//         const fetchGames = async () => {
//             const response = await fetch("https://react-http-e4063-default-rtdb.europe-west1.firebasedatabase.app/Games.json"
//             );

//             if (!response.ok) {
//                 throw new Error("somthing went wrong");
//             }


//             const responseData = await response.json();
//             console.log(responseData);

//             const loadedGames = [];

//             for (const key in responseData) {
//                 loadedGames.push({
//                     id: key,
//                     date: responseData[key].date,
//                     startTime: responseData[key].startTime,
//                     endTime: responseData[key].endTime,
//                     court: responseData[key].court,
//                     playersSign: responseData[key].playersSign
//                 })
//             }
//             setGames(loadedGames);
//             setIsLoading(false);
//         };
//         fetchGames().catch((error) => {
//             setIsLoading(false);
//             setHttpError(error.message);
//         });
//     }, []);

//     if (isLoading)
//         return (
//             <section>
//                 <p>Loading...</p>
//             </section>
//         );

//     if (httpError)
//         return (
//             <section>
//                 <p>{httpError}</p>
//             </section>
//         );



//     console.log(games[0].playersSign)
//     return {


//         games

//     }

// }
// export default GetGamesData