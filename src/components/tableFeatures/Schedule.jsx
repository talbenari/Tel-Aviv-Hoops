import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';


function Schedule(props) {

    const columns = [
        { field: 'date', headerName: 'Date', width: 150 },
        { field: 'court', headerName: 'Court', width: 130 },
        { field: 'time', headerName: 'Time', width: 130 },
        { field: 'playersSign', headerName: 'playersSign', width: 200 },
        {
            field: 'button', width: 150, renderCell: () => {
                return <NavLink to='/GameDetails'>
                    <Button variant='contained' >
                        <Typography variant='caption'>
                            {console.log(rows.id)}
                            {console.log(props.games)}
                            Join
                        </Typography>
                    </Button>
                </NavLink>

            }
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