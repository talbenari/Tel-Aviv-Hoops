import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import GetGamesData from './GetGamesData';



function Schedule(props) {

    console.log(props.games);

    const columns = [
        { field: 'date', headerName: 'Date', width: 150 },
        { field: 'court', headerName: 'Court', width: 130 },
        { field: 'time', headerName: 'Time', width: 130 },
        {
            field: 'playersSign',
            headerName: 'playersSign',
            width: 90,
        }
       
    ];

    const rows = props.games.map((game, index) => (
        {
            id: index,
            date: game.date,
            court: game.court,
            time: `${game.startTime}-${game.endTime}`,
            playersSign: `${game.playersSign}/15`,
           
        }
    ))


    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
};

export default Schedule;