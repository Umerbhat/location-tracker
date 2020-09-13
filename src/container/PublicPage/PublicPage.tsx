import React from 'react';
import { Grid, Box, Paper, Typography, Divider } from "@material-ui/core";
import Login from '../../components/Login';
import Register from '../../components/Register';

const PublicPage = (props: { setIsLogin: (value: boolean) => void }) => {
    return (
        <Box p={3}>
        <Typography variant="h3" color="primary" gutterBottom>Welcome to favorite location tracker</Typography>
        <Paper>
            <Grid container spacing={2} justify="space-around" alignItems="center">
                <Grid item md={4} xs={12}>

                    <Box p={3}>
                        <Login {...props}/>
                    </Box>

                </Grid>
                <Grid item md={2} xs={12}>
                    <Typography align="center" color="primary">--OR--</Typography>

                </Grid>
                <Grid item md={4} xs={12}>

                    <Box p={3}>
                        <Register {...props}/>
                    </Box>

                </Grid>
            </Grid>
        </Paper>
    </Box>
    );
}

export default PublicPage;