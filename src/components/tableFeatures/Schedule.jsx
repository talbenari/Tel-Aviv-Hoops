
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import InfoCard from './InfoCard';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import FullSchedule from './FullSchedule';
import './infoCard.css';


function Schedule(props) {
    console.log(props.games[0].courtSrc);

    const [displayType, setDisplayType] = useState('none');
    const [currentRow, setCurrentRow] = useState();

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
                        <Button variant='contained' color='secondary' style={{ width: theme.xs.width }} onClick={() => {
                            setDisplayType('flex');
                            setCurrentRow(row);
                        }}>
                            <Typography variant='caption'>
                                Join Wait-list
                            </Typography>
                        </Button>
                    </ThemeProvider>
                } else {
                    return <ThemeProvider theme={theme}>
                        <Button variant='contained' style={{ width: theme.xs.width }} onClick={() => {
                            setDisplayType('flex');
                            setCurrentRow(row);
                        }}>
                            <Typography variant='caption'>
                                Join Game
                            </Typography>
                        </Button>
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
            courtSrc: game.courtSrc
        }
    ))

    return (
        <div style={{ height: 400, width: '100%' }}>
            <div id='blurryBackGround' style={{ display: `${displayType}` }}>
                <div style={{ display: `${displayType}`, position: 'absolute' }}>
                    <InfoCard setDisplayType={setDisplayType} courtSrc={currentRow && currentRow.courtSrc} court={currentRow && currentRow.court} date={currentRow && currentRow.date} time={currentRow && currentRow.time} players={currentRow && currentRow.playersSign} />
                </div>
            </div>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
            />
            <div style={{
                height: 30, width: '100%', position: 'absolute', zIndex: 2, palette: {
                    primary: {
                        main: '#bf360c',
                    },
                    secondary: {
                        main: '#bdbdbd'
                    }
                },
            }}>
                {/* <ThemeProvider theme={theme}>
                    <NavLink to="/fullschedule">
                        <Button variant='contained' color='success' >
                            <Typography variant='caption'>
                                Full Schedule
                            </Typography>
                        </Button>
                    </NavLink>
                </ThemeProvider>
                <Routes>
                    <Route path="/fullschedule" element={<FullSchedule></FullSchedule>}></Route>
                </Routes> */}
            </div>
        </div>
    );
};

export default Schedule;