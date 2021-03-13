import React from 'react';
import {
    Box,
    Button,
    Card,
    CardHeader,
    Grid,
    Divider,
    TextField,
    makeStyles
  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        },
        margin: theme.spacing(3),
        background: '#fff',
        borderRadius: '25px',
        boxShadow: "5px 10px 18px #888888",
        color: 'black',
    },
}));

const ForgetPasswordForm = () => {
    const classes = useStyles();
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const handleChangePassword = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value);
    };

    const handleConfirmPassword = (event) => {
        console.log(event.target.value);
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted");
        if (password.localeCompare(confirmPassword) === 0) {
            console.log("Password Submitted");
        }
    };

    return (
        <Grid container>
            <form className={classes.root} noValidate autoComplete="off">
                <Card>
                    <CardHeader
                        subheader="The information can be edited"
                        title="Profile"
                    />
                    <Grid container>
                        {/* <Grid item xs={12} s={6} md={6} p={2}>
                            <TextField id="standard-name" label="Name" value={name} onChange={handleChangeName} />
                        </Grid> */}
                        <Grid item xs={12} s={6} p={2}>
                            <TextField
                                id="filled-name"
                                label="New Password"
                                value={password}
                                onChange={handleChangePassword}
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12} s={6} p={2}>
                            <TextField
                                id="filled-name"
                                label="Confirm Password"
                                value={confirmPassword}
                                onChange={handleConfirmPassword}
                                variant="filled"
                            />
                        </Grid>
                        <Divider />
                        <Grid item xs={12}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                p={3}
                            >
                                <Button
                                    color="primary"
                                    onClick={handleSubmit}
                                    size="large"
                                    variant="contained"
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </form>
        </Grid>
    );
}

export default ForgetPasswordForm;