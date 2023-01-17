
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InfoCard from './InfoCard';
import { useState } from 'react';
import './infoCard.css';



function Schedule(props) {

    const [displayType, setDisplayType] = useState('none');
    const [currentRow, setCurrentRow] = useState();

    const theme = createTheme({
        typography: {
            fontFamily: 'Comic sans Ms',
            textColor: 'white',



        },
        palette: {
            primary: {
                main: '#bf360c',
            },
            secondary: {
                main: '#bdbdbd'
            },
            gridColor: {
                main: '#424242'
            }
        },
        xs: {
            width: '7rem',

        }
    });

    const columns = [
        { field: 'date', headerName: 'Date', flex: 1, headerClassName: 'title', cellClassName: 'cells' },
        { field: 'court', headerName: 'Court', flex: 1, headerClassName: 'title', cellClassName: 'cells' },
        { field: 'time', headerName: 'Time', flex: 1, headerClassName: 'title', cellClassName: 'cells' },
        {
            field: '', flex: 1, headerClassName: 'title', cellClassName: 'cells', renderCell: ({ row }) => {
                if (row.playersSign === '15/15') {
                    return <ThemeProvider theme={theme}>
                        <Button variant='contained' color='secondary' style={{ width: theme.xs.width, alignSelf: 'center', justifySelf: 'center' }} onClick={() => {
                            setDisplayType('flex');
                            setCurrentRow(row);
                        }}>
                            <Typography variant='caption'>
                                Wait-list
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
            row: index,
            id: game.id,
            date: game.date,
            court: game.court,
            time: `${game.startTime}-${game.endTime}`,
            playersSign: `${game.playersSign}/15`,
            courtSrc: game.courtSrc
        }
    ))

    return (

        <div style={{ height: 400, width: '98%', margin: 'auto', }}>
            <div id='blurryBackGround' style={{ display: `${displayType}` }}>
                <div style={{ display: `${displayType}`, position: 'absolute', float: 'center' }}>
                    {console.log(currentRow && currentRow.id)}
                    <InfoCard setDisplayType={setDisplayType}
                        id={currentRow && currentRow.id}
                        courtSrc={currentRow && currentRow.courtSrc}
                        court={currentRow && currentRow.court}
                        date={currentRow && currentRow.date}
                        time={currentRow && currentRow.time}
                        players={currentRow && currentRow.playersSign} />
                </div>
            </div>
            <DataGrid
                style={{ color: theme.typography.textColor, background: theme.palette.gridColor.main }}
                rows={rows}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                hideFooter
            />
        </div >
    );
};

export default Schedule;

