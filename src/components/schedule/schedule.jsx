import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { type } from '@testing-library/user-event/dist/type';
import { ThemeProvider, createTheme, Typography, Button } from '@mui/material';
import styles from './Schedule.css'





// import GetGamesData from './GetGamesData';



const cache = createCache({
    key: 'css',
    prepend: true,
});


function Schedule(props) {


    const columns = [
        { field: 'date', headerName: 'Day', width: 250, headerClassName: 'title', cellClassName: 'cells' },
        { field: 'court', headerName: 'Court', width: 250, headerClassName: 'title', cellClassName: 'cells' },
        { field: 'time', headerName: 'Time', width: 250, headerClassName: 'title', cellClassName: 'cells' },
        {
            field: 'playersSign',
            headerName: 'playersSign',
            width: 250, headerClassName: 'title', cellClassName: 'cells'
        },
        {

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
    const newRows = rows.slice(5);

    const theme = createTheme({
        typography: {

            fontSize: 20,
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Typography>
                <CacheProvider value={cache}>


                    <div className='table' style={{ height: 500, width: '90vw' }}>
                        <DataGrid
                            className='table'
                            rows={newRows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            rowHeight={70}


                        />
                    </div>
                </CacheProvider>
            </Typography>
        </ThemeProvider>
    );
};

export default Schedule;