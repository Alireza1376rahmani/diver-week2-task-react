import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js'
import { connect } from "react-redux";

// material ui imports
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            direction: 'rtl',
            overflow: 'auto',
            padding: '5px'
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            position: 'relative',
        },
        modalHeader: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        td: {
            textAlign: 'right'
        },
    }),
);

const TransitionsModal = (props:any) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);  // this is for open and close modal
    let detail = props.detail;

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                مشاهده جرئیات
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div className={classes.modalHeader}>
                            <h3 id="transition-modal-title">{detail.service}</h3>
                            <IconButton color="secondary" aria-label="add an alarm" onClick={handleClose}>
                                <Icon path={mdiClose}
                                      title="بستن"
                                      size={1}
                                      color="red"
                                      />
                            </IconButton>
                        </div>

                        <TableContainer id="transition-modal-description">
                            <Table aria-label="simple table">
                                <TableBody>
                                        <TableRow>
                                            <TableCell className={classes.td}> متراژ مکان </TableCell>
                                            <TableCell className={classes.td}> {detail.area} </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className={classes.td}> نوع ضدعفونی (الکل / وایتکس / پرکلرین) </TableCell>
                                            <TableCell className={classes.td}> {detail.disinfection} </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className={classes.td}> نوع منزل </TableCell>
                                            <TableCell className={classes.td}> {detail.locationType} </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className={classes.td}> حیوان خانگی (دارد / ندارد) </TableCell>
                                            <TableCell className={classes.td}> {detail.haspet} </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className={classes.td}> تاریخ </TableCell>
                                            <TableCell className={classes.td}> {detail.date} </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className={classes.td}> ساعت </TableCell>
                                            <TableCell className={classes.td}> {detail.workTime} </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className={classes.td}> مبلغ کل </TableCell>
                                            <TableCell className={classes.td}> {detail.amount} تومان </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className={classes.td}> کد سفارش </TableCell>
                                            <TableCell className={classes.td}> {detail.orderCode} </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className={classes.td}> آدرس </TableCell>
                                            <TableCell className={classes.td}> {detail.address} </TableCell>
                                        </TableRow>
                                    {/*{showDetailInfo(detail, classes)}*/}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

// this function show items of modal detail by loop

// const showDetailInfo = (detail: any, classes: any) => {
//     var result = null;
//     if (detail) {
//         result = Object.keys(detail).map((key) => {
//             // console.log(key);
//                 return (
//                     <TableRow>
//                         <TableCell className={classes.td}> {key} </TableCell>
//                         <TableCell className={classes.td}> {detail[key]} </TableCell>
//                     </TableRow>
//                 )
//         })
//     }
//     return result;
// }



export default TransitionsModal;

TransitionsModal.propTypes = {
    detail: PropTypes.object,
}