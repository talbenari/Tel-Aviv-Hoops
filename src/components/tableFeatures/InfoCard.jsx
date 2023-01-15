import Map from './Map.jsx';
import { Card, Typography } from '@mui/material';

function InfoCard(props) {


    return (
        <Card style={{ width: '60vw', height: '60vh' }}>
            <Typography variant='h6'>
                game detailes
            </Typography>
            <Typography variant='subtitle1'>
                <ul>
                    <li>{props.court}</li>
                    <li>{props.date}</li>
                    <li>{props.time}</li>
                    <li>{props.players}</li>
                </ul>
            </Typography>
            <Map />
        </Card>
    )
}

export default InfoCard;
