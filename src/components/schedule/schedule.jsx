import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { type } from '@testing-library/user-event/dist/type';
import { ThemeProvider, createTheme, Typography } from '@mui/material';





// import GetGamesData from './GetGamesData';



const cache = createCache({
    key: 'css',
    prepend: true,
});


function Schedule(props) {


    const columns = [
        { field: 'date', headerName: 'Day', width: 150 },
        { field: 'court', headerName: 'Court', width: 130 },
        { field: 'time', headerName: 'Time', width: 130 },
        {
            field: 'playersSign',
            headerName: 'playersSign',
            width: 90,
        },
        // {
        //     field: "PLAY",
        //     renderCell: (cellValues) => {
        //         return (
        //             <Button
        //                 variant="contained"
        //                 color="primary"
        //                 onClick={(event) => {
        //                     hendleClick(event, cellValues)
        //                 }}>Play</Button>
        //         )
        //     }
        // }


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

            fontSize: 15,
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Typography>
                <CacheProvider value={cache}>


                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={newRows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[0]}
                        />
                    </div>
                </CacheProvider>
            </Typography>
        </ThemeProvider>
    );
};

export default Schedule;