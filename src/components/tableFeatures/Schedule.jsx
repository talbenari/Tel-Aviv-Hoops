import * as React from 'react';
import {useEffect, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {Button, Typography} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import InfoCard from './InfoCard';
import './infoCard.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";


function Schedule(props) {

    const [displayType, setDisplayType] = useState('none');
    const [currentRow, setCurrentRow] = useState();

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
                    <InfoCard setDisplayType={setDisplayType}
                              id={currentRow && currentRow._id}
                              courtSrc={currentRow && currentRow.courtSrc}
                              court={currentRow && currentRow.court}
                              date={currentRow && currentRow.date}
                              time={currentRow && currentRow.time}
                              players={currentRow && currentRow.playersSign}/>
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

