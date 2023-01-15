import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import InfoCard from './InfoCard';


function Schedule(props) {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#bf360c',
            },
            secondary: {
                main: '#bdbdbd'
            }
        },
        xs: {
            width: '120px'
        }
    });

    const columns = [
        { field: 'date', headerName: 'Date', width: 150 },
        { field: 'court', headerName: 'Court', width: 130 },
        { field: 'time', headerName: 'Time', width: 130 },
        { field: 'playersSign', headerName: 'playersSign', width: 200 },
        {
            field: '', width: 150, renderCell: ({ row }) => {
                if (row.playersSign === '15/15') {
                    return <ThemeProvider theme={theme}>
                        <NavLink to='/card' style={{textDecoration: 'none'}}>
                            <Button variant='contained' color='secondary' style={{width: theme.xs.width}}>
                                <Typography variant='caption'>
                                    Join Wait-list
                                </Typography>
                            </Button>
                        </NavLink>
                    </ThemeProvider>
                } else {
                    return <ThemeProvider theme={theme}>
                    {/* <NavLink to='/card' style={{textDecoration: 'none'}}> */}
                        <Button variant='contained' style={{width: theme.xs.width}} onClick={() => {
                            return <div style={{position: 'absolute', alignSelf: 'center', justifySelf: 'center'}}>
                                    <InfoCard/>
                                </div>
                            
                        }}>
                            <Typography variant='caption'>
                                Join Game
                            </Typography>
                        </Button>
                    {/* </NavLink> */}
                </ThemeProvider>
                }
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