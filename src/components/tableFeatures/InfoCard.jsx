import Map from './Map.jsx';
import { Button, Card, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import PlayerDetailsForm from './PlayerDetailsForm.jsx';
import './infoCard.css';


function InfoCard(props) {


    return (
        <Card style={{ width: 'fit-content', height: 'fit-content', paddingBottom: '20px' }}>
            <div id='containerDiv'>
                <div style={{ paddingTop: '20px', justifyContent: 'flex-start' }}>
                    <div>
                        <Typography variant='subtitle1'>
                            <ul style={{ paddingLeft: '15px', width: 'fit-content' }}>
                                <li>court: {props.court}</li>
                                <li>date: {props.date}</li>
                                <li>time: {props.time}</li>
                                <li>players: {props.players}</li>
                            </ul>
                        </Typography>
                    </div>
                    {console.log(props.courtSrc)}
                    <Map courtSrc={props.courtSrc} />
                </div>
                <div style={{ marginTop: '20px', paddingRight: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant='h5' fontFamily={'monospace'} style={{ marginBottom: '20px', textDecoration: 'underline' }}>
                        Sign up now!
                    </Typography>
                    <PlayerDetailsForm
                        court={props.court}
                        time={props.time}
                        date={props.date}
                    />
                </div>
                <Button id='X' style={{ height: '10%' }} onClick={() => props.setDisplayType('none')}><ClearIcon /></Button>
            </div>
        </Card>
    )
}

export default InfoCard;