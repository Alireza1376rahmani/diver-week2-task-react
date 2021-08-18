import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js'

// material ui imports
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CardActionArea from "@material-ui/core/CardActionArea";

import ProfileSendForm from "./ProfileSendForm";


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
        media: {
            height: 140,
            // width: '200px'
        },
        cardContent: {
            padding: '0',
            paddingBottom: '0 !important',
        },
        cardText: {
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }),
);

const ChangeProfileModal = (props:any) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);  // this is for open and close modal

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getProfileImage = () => {
        if (props.avatar) {
            return props.avatar;
        } else {
            return 'https://www.pngfind.com/pngs/m/93-938050_png-file-transparent-white-user-icon-png-download.png';
        }
    }

    return (
        <div>
            {/*<Button color="primary">*/}
            {/*    مشاهده جرئیات*/}
            {/*</Button>*/}
            <Button variant="contained" onClick={handleOpen}>
                <CardActionArea>
                    <img src={getProfileImage()}
                         className={classes.media} alt="profile"/>
                </CardActionArea>
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
                        <div>
                            <IconButton color="secondary" aria-label="add an alarm" onClick={handleClose}>
                                <Icon path={mdiClose}
                                      title="بستن"
                                      size={1}
                                      color="red"
                                />
                            </IconButton>
                        </div>
                        <ProfileSendForm />
                        {/*<SimpleForm />*/}
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}


export default ChangeProfileModal;

ChangeProfileModal.propTypes = {
    // detail: PropTypes.object
    avatar: PropTypes.string,
}