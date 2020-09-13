import React, { useCallback, useState } from 'react';
import { logout as handleLogout } from '../../utils/firebase/Auth'
import { Button, LinearProgress, Grid, Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useList } from 'react-firebase-hooks/database';
import firebase from '../../firebase'
import LocationItem from '../LocationItem';
import Alert from '@material-ui/lab/Alert';
import Map from '../Map';


const Dashboard = () => {
    const [snapshots, loading, error] = useList(firebase.database().ref("locations"));
    const [activeItem, setActiveItem] = useState(null)
    const handleActiveItemClick = useCallback((item) => {
        setActiveItem(item)

    }, [])
    return (
        <div>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6">
                        Location Tracker
                    </Typography>
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
            {error && <Alert severity="error">{error.message}</Alert>}
            {loading && <LinearProgress />}
            {!loading && snapshots && <Grid container>
                <Grid item>
                    <Box p={2}>
                    <Grid container justify="space-between">
                        <Grid item><Typography variant="h5">Locations</Typography></Grid>
                        <Grid item>
                            <Button color="primary" variant="outlined">Add Location</Button></Grid>
                      </Grid>
                      </Box>
                    {snapshots.map((v: any) => <LocationItem data={v.val()} onClick={handleActiveItemClick} />)}
                </Grid>
                <Grid item style={{flex: 1}}>
                    <Map data = {activeItem}/>
                </Grid>
            </Grid>}
        </div>

    );
}

export default Dashboard;