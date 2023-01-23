import * as React from 'react';
import {useEffect, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {Button, Card, Typography} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import {useNavigate} from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";


function Schedule(props) {
    const [players_capacity, setPlayers_capacity] = useState()
    const [name, setName] = useState()
    const [eventDate, setEventDate] = useState()
    const [message, setMessage] = useState("")
    const [displayType, setDisplayType] = useState('none');
    const [currentRow, setCurrentRow] = useState();
    const [currentId, setCurrentId] = useState();
    const [courts, setCourts] = useState("")
    const navigate = useNavigate();
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

    function RegEvent() {
        console.log('hey')
        console.log(currentRow._id)
        axios.post("http://localhost:2000/addevent", {
            courtId: currentRow._id,
            players: players_capacity,
            numberOfPlayers: 0,
            date: eventDate
        }).then((res) => {
            console.log(res.data)
        })
    }

    useEffect(() => {
        axios.get("http://localhost:2000/courtmap").then((res) => {
            console.log(res.data.message)
            setCourts(res.data.message)
            // if (res.data.data) {
            //     navigate("/")
            // }
        })

    }, [])
    const columns = [

        {
            field: 'id',
            headerName: 'ID',
            type: 'number',
            width: 90,
        },
        {field: 'name', headerName: 'Name', width: 130},
        {field: 'courtOwner', headerName: 'Court Owner', width: 130},
        {field: 'Postdate', headerName: 'Post Date', width: 200},

        {
            field: 'town',
            headerName: 'Town',
            type: 'number',
            width: 130,
        },
        {
            field: 'capacity',
            headerName: 'capacity',
            type: 'number',
            width: 90,
        },
        {
            field: '', flex: 1, headerClassName: 'title', cellClassName: 'cells', renderCell: ({row}) => {
                if (row.playersSign === '15/15') {
                    return <ThemeProvider theme={theme}>
                        <Button variant='contained' color='secondary'
                                style={{width: theme.xs.width, alignSelf: 'center', justifySelf: 'center'}}
                                onClick={() => {
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
                        <Button variant='contained' style={{width: theme.xs.width}} onClick={() => {
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

    const rows = [];
    courts.length > 0 ? courts.map((court, index) => {
        return rows.push({
            capacity: court.players_capacity,
            _id: court._id,
            id: index,
            Postdate: court.Postdate,
            town: court.town,
            courtOwner: court.courtOwner,
            name: court.name
        })
    }) : console.log(null)
    return (
        <div style={{height: 400, width: '98%', margin: 'auto',}}>
            <div id='blurryBackGround' style={{display: `${displayType}`}}>
                <div style={{display: `${displayType}`, position: 'absolute', float: 'center'}}>
                    <Card sx={{maxWidth: 500}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="town"
                            label="name"
                            type="town"
                            id="town"
                            onChange={e => setName(e.target.value)}/>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="player capacity"
                            label="player capacity"
                            name="playercapacity"
                            type={"number"}
                            autoComplete="email"
                            autoFocus
                            onChange={e => setPlayers_capacity(e.target.value)}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="address"
                            label="Date"
                            type=""
                            id="address"
                            onChange={e => setEventDate(e.target.value)}
                        />


                        <Button
                            onClick={RegEvent}
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Register Court
                        </Button>
                    </Card>
                </div>
            </div>
            <DataGrid
                style={{color: theme.typography.textColor, background: theme.palette.gridColor.main}}
                rows={rows}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                hideFooter
            />
        </div>
    );
}

export default Schedule;

