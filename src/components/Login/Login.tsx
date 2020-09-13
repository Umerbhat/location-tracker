import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert'
import useFormInput from '../../hooks/form/useFormInput';
import { login as handleLogin } from '../../utils/firebase/Auth'


function Login(props: { setIsLogin: (value: boolean) => void }) {
    const email = useFormInput('');
    const password = useFormInput('');
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        setLoading(true)
        handleLogin(email.value, password.value).then(() => {
            setLoading(false)

        }).catch((err) => {
            setLoading(false);
            setError(err.message)
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <Typography variant="h4" color="secondary" gutterBottom>Login</Typography>
                </Grid>
                {error && <Grid item><Alert severity="error">{error}</Alert></Grid>}
                <Grid item>
                    <TextField
                        placeholder="Enter your email"
                        label="Email"
                        onChange={email.onChange}
                        value={email.value}
                        variant="outlined"
                        type="email"
                        fullWidth
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Password"
                        placeholder="Enter your Password"
                        onChange={password.onChange}
                        value={password.value}
                        variant="outlined"
                        type="password"
                        fullWidth
                    /></Grid>
                <Grid item>
                    <Button type="submit" color="primary" variant="contained" size="large" disabled={loading} fullWidth>{loading ? "loading..." : "Login"}</Button>
                </Grid>
            </Grid>
        </form>

    );
}

export default Login;