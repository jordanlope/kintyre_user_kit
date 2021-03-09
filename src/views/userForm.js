import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
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
  
const UserForm = () => {
    const { user } = useAuth0();
    const classes = useStyles();
    const [name, setName] = React.useState(user.name);
    const [email, setEmail] = React.useState(user.email);
    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted");
    }

    return (
        <Grid container>
            <form className={classes.root} noValidate autoComplete="off">
                <Card>
                    <CardHeader
                        subheader="The information can be edited"
                        title="Profile"
                    />
                    <Grid container>
                        <Grid item xs={12} s={6} md={6} p={2}>
                            <TextField id="standard-name" label="Name" value={name} onChange={handleChangeName} />
                        </Grid>
                        <Grid item xs={12} s={6} p={2}>
                            <TextField
                                id="filled-name"
                                label="Email"
                                value={email}
                                onChange={handleChangeEmail}
                                variant="filled"
                            />
                        </Grid>
                        <Divider />
                        <Grid xs={12}>
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

export default UserForm;