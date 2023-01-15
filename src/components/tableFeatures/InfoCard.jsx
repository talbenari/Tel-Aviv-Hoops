import Map from './Map.jsx';
import './infoCard.css';
import { Card, Typography } from '@mui/material';

function InfoCard(props) {


    return (
        <Card>
            <Typography variant='h6'>
                game detailes
            </Typography>
            <Map />
        </Card>
    )
}

export default InfoCard;
