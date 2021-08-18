import React from 'react';
import PropTypes from "prop-types";

import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            textAlign: 'center',
            marginTop: '15px',

        },
        pagination: {
            display: 'flex',
            justifyContent: 'center'
        }
    }),
);

const PaginationControlled = (props: any) => {
    const classes = useStyles();
    const page: number = props.page;
    const setPage = props.setPage;
    const totalPage = props.totalPage;

    const handleChange = (event: any, value: number) => {
        setPage(value);
    };

    return (
        <div className={classes.root} dir='ltr'>
            <Pagination variant='outlined' shape='rounded' className={classes.pagination} count={totalPage} page={page} onChange={handleChange} />
        </div>
    );
}

export default PaginationControlled;

PaginationControlled.propTypes = {
    page: PropTypes.number,
    setPage: PropTypes.func,
    totalPage: PropTypes.number,
};