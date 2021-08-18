// import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

import { setPage,setData , loading,loaded } from "../store/doneWorkReducer";
import { connect } from "react-redux";

// material ui imports
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

// import TodoWork from "../component/ordersManagement/WorksListTable";
import TimeButtons from '../component/ordersManagement/TimeButtonTodoWork';
import Pagination from "../component/ordersManagement/Pagination";
import DoneWorksTable from "../component/ordersManagement/DoneWorksTable";
import TodoWorksTable from "../component/ordersManagement/TodoWorksTable";

const useStyles = makeStyles({
    header: {
        textAlign: "right"
    },
    doneWorks: {
        marginTop: '60px',
        paddingBottom: '30px'
    }
});

const OrderManagement = (props: any) => {
    const classes = useStyles();
    const totalPage: number = 10;

    // useEffect(() => {
    //     console.log(props.page);
    // }, [props.page]);

    return (
        <>
            <Container maxWidth="md">
                <div className="todoWorks">
                    <h2 className={classes.header}>کارهای در دست انجام</h2>
                    <TimeButtons index={1}/>
                    {/* <TodoWork doneList={false} works={props.todoWorks}/> */}
                    <TodoWorksTable/>
                </div>

                <div className={classes.doneWorks}>
                    <h2 className={classes.header}> کارهای انجام شده </h2>
                    {/* <TodoWork doneList={true} works={props.doneWorks}/> */}
                    <DoneWorksTable/>
                    <Pagination page={props.page} setPage={setPage} totalPage={totalPage}/>
                </div>
            </Container>
        </>
    )
}

function mapDispatchToProps(dispatch: any) {
	return {
		// addBug: (description: string) => {
		// 	dispatch(addBug({ description }));
		// }
		setPage: (p: number) => {
			dispatch(setPage(p));
		},
		setData: (data: any) => {
			dispatch(setData(data));
		},
		loading: () => {
			dispatch(loading({}));
		},
		loaded: () => {
			dispatch(loaded({}));
		},
	};
}
function mapStateToProps(state: any, myProps: any) {
	return {
		// bugs: state.bugs,
        page: state.doneWorkReducer.page,
        todoWorks: state.todoWorkReducer.data,
        doneWorks: state.doneWorkReducer.data,
	};
}


export default connect(mapStateToProps,mapDispatchToProps)(OrderManagement);

OrderManagement.propTypes = {
    todoWorks: PropTypes.array,
    doneWorks: PropTypes.array
}