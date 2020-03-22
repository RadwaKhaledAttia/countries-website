import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('email is a required field'),
            password: Yup.string().required('password is a required field')
        }),
        onSubmit: values => {
            console.log("VALUUES", values)
            props.getLogin(values)
        },
    });

    return (
        <form className={classes.root} autoComplete="off" onSubmit={formik.handleSubmit}>
            <div>
                <TextField
                    error={formik.errors.email}
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    name="email"
                    label="email"
                    type="email"
                    fullWidth
                    margin="normal"
                    helperText={formik.errors.email}
                    onChange={formik.handleChange}
                />
            </div>
            <div>
                <TextField
                    error={formik.errors.password}
                    id="standard-full-width"
                    style={{ margin: 10 }}
                    name="password"
                    type="password"
                    label="password"
                    margin="normal"
                    helperText={formik.errors.password}
                    onChange={formik.handleChange}
                />
            </div>
            <div>
                <Button variant="contained" color="primary" style={{ width: '100%' }}
                    type="submit">
                    LOGIN
</Button>
            </div>
        </form>
    );
}

