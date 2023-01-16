import Map from './Map.jsx';
import { Button, Card, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import PlayerDetailsForm from './PlayerDetailsForm.jsx';

function InfoCard(props) {


    return (
        <Card style={{ width: '60vw', height: '60vh', paddingLeft: '20px', paddingBottom: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={{ paddingTop: '20px' }}>
                <div>
                    <Typography variant='h6'>
                        game detailes
                    </Typography>
                    <Typography variant='subtitle1'>
                        <ul>
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
            <div style={{ marginTop: '12%' }}>
                <Typography variant='h5' fontFamily={'monospace'} style={{marginBottom: '20px', textDecoration: 'underline'}}>
                    Sign up now!
                </Typography>
                <PlayerDetailsForm />
            </div>
            <Button color='error' style={{ height: '10%' }} onClick={() => props.setDisplayType('none')}><ClearIcon /></Button>
        </Card>
    )
}

export default InfoCard;
