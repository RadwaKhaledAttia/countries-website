import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  words: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    margin: 4
  },
}));

export default function UserInfo(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
          <h5 className={classes.words}>user email: </h5>
          <h5 className={classes.words}> {props.user.email} </h5>
      </Grid>
      <Grid container>
          <h5 className={classes.words}>user password: </h5>
          <h5 className={classes.words}> {props.user.password} </h5>
      </Grid>
    </div>
  );
}
