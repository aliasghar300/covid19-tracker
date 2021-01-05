
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NumberFormat from "react-number-format";


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 100,
    },
});

export default function CountryWiseCases({ data }) {

    const classes = useStyles();

    return (
        <div>
            <h1> Country Wise Data </h1>
            <div className="country-data">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="table">
                    <TableHead >
                        <TableRow>
                            <StyledTableCell>Countries</StyledTableCell>
                            <StyledTableCell align="right">Cases</StyledTableCell>
                            <StyledTableCell align="right">Active</StyledTableCell>
                            <StyledTableCell align="right">Recovered</StyledTableCell>
                            <StyledTableCell align="right">Deaths</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(1).map((data) => (
                            <StyledTableRow key={data.country}>
                                <StyledTableCell component="th" scope="row">
                                    {data.country}
                                </StyledTableCell>
                                <StyledTableCell align="right"><NumberFormat value={data.cases} displayType={"text"} thousandSeparator={true}></NumberFormat></StyledTableCell>
                                <StyledTableCell align="right"><NumberFormat value={data.active} displayType={"text"} thousandSeparator={true}></NumberFormat></StyledTableCell>
                                <StyledTableCell align="right"><NumberFormat value={data.recovered} displayType={"text"} thousandSeparator={true}></NumberFormat> </StyledTableCell>
                                <StyledTableCell align="right"><NumberFormat value={data.deaths} displayType={"text"} thousandSeparator={true}></NumberFormat> </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>

        </div>
    )
}
