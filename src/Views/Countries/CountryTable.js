import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Emojis from 'react-emoji-component'
import Eye from '../../Assets/Images/visibility.svg'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function CountryTable(props) {
    const classes = useStyles();
    const rows = props.rows

    return (
        <TableContainer component={Paper} style={{ marginTop: '25px' }}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">code</TableCell>
                        <TableCell style={{ width: '50%' }}>name</TableCell>
                        <TableCell align="left">emoji</TableCell>
                        <TableCell align="center">action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell align="left">{row.code}</TableCell>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left"><Emojis size={24}>{row.emoji}</Emojis></TableCell>
                            <TableCell align="center">
                                <Link to={{
                                    pathname: `/country/${row.name}`,
                                    state: { country: row }
                                }}><img src={Eye} alt="details" style={{ width: '20px' }} /> </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
