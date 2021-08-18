import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

// import material ui component
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


import ModalDetailTodoWork from "./ModalDetailTodoWork";

import '../../assets/css/ordersManagement/todoWork.css';


const useStyles = makeStyles((theme) =>
    createStyles({
        table: {
            minWidth: 650,
            // backgroundColor: '#FCFCFC‏'
        },
        th: {
            fontFamily: 'Vazir',
            textAlign: 'center',
            fontWeight: 600,
            backgroundColor: '#ececec'
        },
        td: {
            textAlign: 'center',
        },
    }),
);

// this interface is for payload types
interface payloadType {
    service: string,
    area: number,
    disinfection: string,
    locationType: string,
    haspet: string,
    date: string,
    workTime: string,
    amount: string,
    orderCode: number,
    address: string
}

// this interface is for works types
interface worksType {
    id: number,
    payload: payloadType
}

const BasicTable = (props: any) => {
    const classes = useStyles();
    const doneWorksTable: boolean = props.doneList;

    const handleCancell = (e: any, id: number) => {
        // handle code for cancell todo work button
    };

    const handleCompleteWordBtn = (e: any, id: number) => {
        // handle code for get complete work button
    }


    // with this function if table is about done work list add a date column in table
    const addDoneWorkTableColumn = (columnType: string, name?: string) => {
        if (doneWorksTable) {
            if (columnType === 'th') {
                return <TableCell className={classes.th}> تاریخ </TableCell>
            } else if (columnType === 'td') {
                return <TableCell className={classes.td}> {name} </TableCell>
            }

        }
    }

    const showOperationButton = (row: worksType) => {
        if (doneWorksTable) {
            return <ModalDetailTodoWork detail={row.payload}/>
        } else {
            return (
                <>
                    <Button variant="contained" color="secondary" onClick={(e) => handleCancell(e, row.id)}> کنسل کردن </Button>
                    <ModalDetailTodoWork detail={row.payload}/>
                    <Button variant="contained" onClick={(e) => handleCompleteWordBtn(e, row.id)}> اتمام کار </Button>
                </>
            )
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.th}> عنوان سفارش </TableCell>
                        <TableCell className={classes.th}> متراز </TableCell>
                        {addDoneWorkTableColumn('th')}
                        <TableCell className={classes.th}> مبلغ </TableCell>
                        <TableCell className={classes.th}> ساعت </TableCell>
                        <TableCell className={classes.th}> عملیات </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.works.map((row: any) => (
                        <TableRow key={row.id}>
                            <TableCell className={classes.td}>{row.payload.service}</TableCell>
                            <TableCell className={classes.td}>{row.payload.area}</TableCell>
                            {addDoneWorkTableColumn('td', row.payload['date'])}
                            <TableCell className={classes.td}>{row.payload.amount}</TableCell>
                            <TableCell className={classes.td}>{row.payload.workTime}</TableCell>
                            <TableCell className={classes.td + " button__cell"}>
                                { showOperationButton(row) }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function mapDispatchToProps(dispatch: any) {
	return {
		// addBug: (description: string) => {
		// 	dispatch(addBug({ description }));
		// }
	};
}
function mapStateToProps(state: any, myProps: any) {
	return {
		// bugs: state.bugs,
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(BasicTable);

BasicTable.propTypes = {
    doneList: PropTypes.bool,
    works: PropTypes.array
}