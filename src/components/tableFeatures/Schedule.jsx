
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';
import { NavLink } from 'react-router-dom';
import InfoCard from './InfoCard';
import styles from './Schedule.css'
import './infoCard.css';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import FullSchedule from './FullSchedule';
import './infoCard.css';



function Schedule(props) {
    console.log(props.games[0].courtSrc);

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

                        <NavLink to='/card' style={{ textDecoration: 'none' }}>
                            <Button variant='contained' color='secondary' style={{ width: theme.xs.width, alignSelf: 'center', justifySelf: 'center' }}>
                                <Typography variant='caption'>
                                    Wait-list
                                </Typography>
                            </Button>
                        </NavLink>

                    </ThemeProvider>
                } else {
                    return <ThemeProvider theme={theme}>
                        <Button variant='contained' style={{ width: theme.xs.width }} onClick={() => {

                            return <div style={{ alignSelf: 'center', justifySelf: 'center' }}>
                                <InfoCard />
                            </div>


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
     // <ThemeProvider theme={theme}>
        <div style={{ height: 400, width: '98%', margin: 'auto', }}>
            <div id='blurryBackGround' style={{ display: `${displayType}`, position: 'absolute', width: '100%', height: '100%' }}>
                <div style={{ display: `${displayType}`, position: 'absolute', float: 'center' }}>
                    <button onClick={() => setDisplayType('none')}><ClearIcon /></button>
                    <InfoCard court={currentRow && currentRow.court} date={currentRow && currentRow.date} time={currentRow && currentRow.time} players={currentRow && currentRow.playersSign} />

                </div>
            </div>
            <DataGrid
                rows={rows}
                columns={columns}

                // pageSize={5}
                // rowsPerPageOptions={[5]}
                getRowSpacing={params => ({
                    top: params.isFirstVisible ? 0 : 5,
                    bottom: params.isLastVisible ? 0 : 5
                })}

                hideFooter





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
        // </ThemeProvider>
    );
};

export default Schedule;



// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { Button, Typography } from '@mui/material';
// import { createTheme, ThemeProvider, withStyles } from '@mui/material/styles';
// import ClearIcon from '@mui/icons-material/Clear';
// import { NavLink } from 'react-router-dom';
// import InfoCard from './InfoCard';

// import { GridColDef } from '@mui/x-data-grid';
// import styles from './Schedule.css'
// import './infoCard.css';
// import { useState } from 'react';
// import { color, fontSize } from '@mui/system';


// function Schedule(props) {

//     const [displayType, setDisplayType] = useState('none');
//     const [currentRow, setCurrentRow] = useState();

//     const theme = createTheme({
//         typography: {
//             fontFamily: 'Comic sans Ms',
//             textColor: 'white',



//         },
//         palette: {
//             primary: {
//                 main: '#bf360c',
//             },
//             secondary: {
//                 main: '#bdbdbd'
//             }
//         },
//         xs: {
//             width: '7rem',
//             fontSize: 0.5,
//         }
//     });

//     const columns = [
//         { field: 'date', headerName: 'Date', flex: 1, headerClassName: 'title', cellClassName: 'cells' },
//         { field: 'court', headerName: 'Court', flex: 1, headerClassName: 'title', cellClassName: 'cells' },
//         { field: 'time', headerName: 'Time', flex: 1, headerClassName: 'title', cellClassName: 'cells' },
//         { field: 'playersSign', headerName: 'players', flex: 0.8, headerClassName: 'title', cellClassName: 'cells' },
//         {
//             field: '', flex: 0.7, headerClassName: 'title', cellClassName: 'cells', renderCell: ({ row }) => {
//                 if (row.playersSign === '15/15') {
//                     return <ThemeProvider theme={theme}>

//                         <NavLink to='/card' style={{ textDecoration: 'none' }}>
//                             <Button variant='contained' color='secondary' style={{ width: theme.xs.width }}>
//                                 <Typography variant='caption'>
//                                     Join Wait-list
//                                 </Typography>
//                             </Button>
//                         </NavLink>
//                     </ThemeProvider>
//                 } else {
//                     return <ThemeProvider theme={theme}>
//                         {/* <NavLink to='/card' style={{textDecoration: 'none'}}> */}
//                         <Button variant='contained' style={{ width: '7rem' }} onClick={() => {
//                             return <div style={{ position: 'absolute', alignSelf: 'center', justifySelf: 'center' }}>
//                                 <InfoCard />
//                             </div>


//                         }}>
//                             <Typography variant='caption'>
//                                 Join Game
//                             </Typography>
//                         </Button>

//                         {/* </NavLink> */}

//                     </ThemeProvider>
//                 }
//             }
//         }

//     ];

//     const rows = props.games.map((game, index) => (
//         {
//             id: index,
//             date: game.date,
//             court: game.court,
//             time: `${game.startTime}-${game.endTime}`,
//             playersSign: `${game.playersSign}/15`,

//         }
//     ))

//     const newRows = rows.slice(5);


//     return (
//         // <ThemeProvider theme={theme}>
//         <div style={{ height: 400, width: '98%', margin: 'auto', }}>
//             <div id='blurryBackGround' style={{ display: `${displayType}`, position: 'absolute', width: '100%', height: '100%' }}>
//                 <div style={{ display: `${displayType}`, position: 'absolute', float: 'center' }}>
//                     <button onClick={() => setDisplayType('none')}><ClearIcon /></button>
//                     <InfoCard court={currentRow && currentRow.court} date={currentRow && currentRow.date} time={currentRow && currentRow.time} players={currentRow && currentRow.playersSign} />
//                 </div>
//             </div>
//             <DataGrid
//                 rows={newRows}
//                 columns={columns}
//                 // pageSize={5}
//                 // rowsPerPageOptions={[5]}
//                 getRowSpacing={params => ({
//                     top: params.isFirstVisible ? 0 : 5,
//                     bottom: params.isLastVisible ? 0 : 5
//                 })}

//                 hideFooter





//             />
//         </div>
//         // </ThemeProvider>
//     );
// };

// export default Schedule;