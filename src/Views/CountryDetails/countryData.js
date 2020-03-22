import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '98%',
        },
    },
}));

export default function ValidationTextFields(props) {
    const classes = useStyles();
    return (
        <form className={classes.root} autoComplete="off">
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        label="name"
                        defaultValue={props.data.name}
                        fullWidth
                        margin="normal"
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        label="code"
                        defaultValue={props.data.code}
                        fullWidth
                        margin="normal"
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        label="native"
                        defaultValue={props.data.native}
                        fullWidth
                        margin="normal"
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        label="phone"
                        defaultValue={props.data.phone}
                        fullWidth
                        margin="normal"
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        label="currency"
                        defaultValue={props.data.currency}
                        fullWidth
                        margin="normal"
                        disabled
                    />
                </Grid>
            </Grid>


        </form>
    );
}

