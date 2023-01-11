import React, { useState } from 'react';
import GetGamesData from './GetGamesData';
import useContext from 'react';


function GamesTable({ gamesList }) {

    const [games, setGames] = useState(gamesList);

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Developer</th>
                    <th>Release Date</th>
                </tr>
            </thead>
            <tbody>
                {games.map(game => (
                    <tr key={game.name}>
                        <td>{game.name}</td>
                        <td>{game.developer}</td>
                        <td>{game.releaseDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}




