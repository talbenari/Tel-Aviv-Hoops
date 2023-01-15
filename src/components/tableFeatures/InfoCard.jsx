import Map from './Map.jsx';
import { Button, Card, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

function InfoCard(props) {


    return (
        <Card style={{ width: '50vw', height: '60vh', padding: '25px' }}>
            <Button color='error' style={{alignSelf: 'flex-start'}} onClick={() => props.setDisplayType('none')}><ClearIcon/></Button>
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
            {console.log(props.courtSrc)}
            <Map courtSrc={props.courtSrc}/>
        </Card>
    )
}

export default InfoCard;
