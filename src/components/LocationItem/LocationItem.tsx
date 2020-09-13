import React from 'react';
import { LocationItemType } from '../../common/types'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 345,
        margin: theme.spacing(1, 0)
    },
    media: {
        height: 140,
    },
    location: {
        padding: theme.spacing(0.1, 1),
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
        borderRadius: theme.spacing(0.4)
    }
}));

export default function LocationItem(props: { data: LocationItemType, onClick: (data: LocationItemType) => void }) {
    const { data, onClick } = props
    const classes = useStyles();

    return (
        <Card className={classes.root} square>
            <CardActionArea onClick={() => onClick(data)}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {data.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                        {data.address}
                    </Typography>
                    <Typography variant="caption" component="p">
                        <span className={classes.location}>lat: {data.lat}</span>&nbsp;
                        <span className={classes.location}>lng: {data.lng}</span>
                    </Typography>


                </CardContent>
            </CardActionArea>
        </Card>
    );
}