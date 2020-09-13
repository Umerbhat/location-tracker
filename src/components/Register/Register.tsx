import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography, Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert'
import useFormInput from '../../hooks/form/useFormInput';
import { signup as handleSignup } from '../../utils/firebase/Auth'


function SignUp(props: { setIsLogin: (value: boolean) => void }) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const name = useFormInput('');
    const email = useFormInput('');
    const password = useFormInput('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        setLoading(true)
        e.preventDefault()
        handleSignup(email.value, password.value).then(() => {
            setLoading(false)

        }).catch((err) => {
            setLoading(false);
            setError(err.message)
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <Typography variant="h4" color="secondary" gutterBottom>Register</Typography>
                </Grid>
                {error && <Grid item><Alert severity="error">{error}</Alert></Grid>}
                <Grid item>
                    <TextField
                        placeholder="Enter your Name"
                        label="Name"
                        onChange={name.onChange}
                        value={name.value}
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item>
                    <TextField
                        placeholder="Enter your email"
                        label="Email"
                        type="email"
                        onChange={email.onChange}
                        value={email.value}
                        variant="outlined"
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
                    <Button type="submit" color="primary" variant="contained" size="large" disabled={loading} fullWidth>{loading ? "loading..." : "SignUp"}</Button>
                </Grid>
            </Grid>
        </form>

    );
}

export default SignUp;