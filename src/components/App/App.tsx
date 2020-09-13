import React, { useState, useEffect } from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline, Container, LinearProgress } from "@material-ui/core";
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../../firebase'
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Dashboard from '../Dashboard';
import PublicPage from '../../container/PublicPage/PublicPage';
import Alert from '@material-ui/lab/Alert';
const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
        background: {
            default: "#f2f2f2"
        },
    },
    typography: {
        fontFamily: "'Source Sans Pro', sans-serif"
    }
});


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, loading, error] = useAuthState(firebase.auth());
    useEffect(() => {
        if (user && user.uid) {
            setIsLoggedIn(true)
        }
        else {
            setIsLoggedIn(false)
        }
    }, [user])
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />

            {loading ? <LinearProgress /> : <>
                {error && <Alert severity="error">{error.message}</Alert>}
                {isLoggedIn ? <Dashboard /> : <Container><PublicPage setIsLogin={setIsLoggedIn} /></Container>}
            </>}

        </MuiThemeProvider>

    );
}

export default App;