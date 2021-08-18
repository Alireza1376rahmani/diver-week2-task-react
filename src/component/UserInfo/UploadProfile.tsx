import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {connect} from 'react-redux'

import Icon from '@mdi/react'
import { mdiStar  } from '@mdi/js'


import ChangeProfileModal from "./ChangeProfileModal";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        uploadProlie: {
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end'
        },
        root: {
            width: '100%',
            maxWidth: 150,
            padding: '10px'
        },
        input: {
            display: 'none',
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

const UploadProfile = (props: any) => {
    const classes = useStyles();


    return (
        <div className={classes.uploadProlie}>
                    <Card className={classes.root}>
                        <ChangeProfileModal avatar={props.avatar}/>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.cardText}>
                                <span>{props.score}</span> 
                                <Icon path={mdiStar}
                                      title="User Profile"
                                      size={1}
                                      color="orange"
                                      />
                            </Typography>
                        </CardContent>
                    </Card>
        </div>
    );
}

function mapDispatchToProps(dispatch: any) {
	return {

	};
}
function mapStateToProps(state: any, myProps: any) {
	return {
		avatar: state.personalDataReducer.data.avatar,
        score: state.personalDataReducer.data.score,
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(UploadProfile);