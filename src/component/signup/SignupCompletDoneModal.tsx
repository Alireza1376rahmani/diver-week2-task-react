import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'center'
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            textAlign: 'right',
            maxWidth: 400
        },
        button: {
            textAlign: 'center',

            '& button': {
                padding: '10px 30px',
            }
        }
    }),
);

const SingupCompleteDoneModal = ( props:any) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleModalBtnClick = () => {
        handleClose();
        props.setStatus("step2")
        // set status for going to panel admin
    };

    return (
        <div className={classes.root}>
            <Button type="submit" variant='contained' color='primary' onClick={handleOpen}>
                ثبت
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
                        <h2 id="transition-modal-title">متخصص محترم</h2>
                        <p id="transition-modal-description">
                            ثبت نام اولیه شما تکمیل شد و بعد از تایید مدارک توسط همکاران ما، حساب کاربری شما به عنوان متخصص فعال آماده دریافت سفارشات میشود.
                        </p>

                        <div className={classes.button}>
                            <Button color='primary' variant='contained' onClick={handleModalBtnClick}>
                                ورود به پروفایل
                            </Button>
                        </div>

                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default SingupCompleteDoneModal;