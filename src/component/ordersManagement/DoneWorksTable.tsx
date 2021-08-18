import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import material ui component
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button";
import { works_done } from "./../../requests/getRequests";

import { setData, loading, loaded } from "./../../store/doneWorkReducer";
import ModalDetailTodoWork from "./ModalDetailTodoWork";
import "../../assets/css/ordersManagement/todoWork.css";
import Loading from "../Loading";
import { useEffect } from "react";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
		// backgroundColor: '#FCFCFC‏'
	},
	th: {
		fontFamily: "Vazir",
		textAlign: "center",
		fontWeight: 600,
		backgroundColor: "#ececec",
	},
	td: {
		textAlign: "center",
	},
});

// this interface is for payload types
// interface payloadType {
// 	service: string;
// 	area: number;
// 	disinfection: string;
// 	locationType: string;
// 	haspet: string;
// 	date: string;
// 	workTime: string;
// 	amount: string;
// 	orderCode: number;
// 	address: string;
// }

// this interface is for works types
// interface worksType {
// 	id: number;
// 	payload: payloadType;
// }

const DoneWorkTable = (props: any) => {
	const classes = useStyles();

	useEffect(() => {
		works_done().then((res) => {
			props.setData(res);
			props.loaded();
		});
	}, []);

	return props.isLoaded ? (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell className={classes.th}>
							عنوان سفارش
						</TableCell>
						<TableCell className={classes.th}> متراژ </TableCell>
						<TableCell className={classes.th}> تاریخ </TableCell>
						<TableCell className={classes.th}> مبلغ </TableCell>
						<TableCell className={classes.th}> ساعت </TableCell>
						<TableCell className={classes.th}> عملیات </TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.works.map((row: any, index: number) => (
						<TableRow key={row.id}>
							<TableCell className={classes.td}>
								{row.service}
							</TableCell>
							<TableCell className={classes.td}>
								{row.area}
							</TableCell>
							{/* {addDoneWorkTableColumn("td", row["date"])} */}
							<TableCell className={classes.td}>
								{row.date}
							</TableCell>
							<TableCell className={classes.td}>
								{row.amount}
							</TableCell>
							<TableCell className={classes.td}>
								{row.workTime}
							</TableCell>
							<TableCell className={classes.td + " button__cell"}>
								<ModalDetailTodoWork detail={row} />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	) : (
		<Loading />
	);
};

function mapDispatchToProps(dispatch: any) {
	return {
		// addBug: (description: string) => {
		// 	dispatch(addBug({ description }));
		// }
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
		works: state.doneWorkReducer.data,
		isLoaded: state.doneWorkReducer.isLoaded,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DoneWorkTable);

DoneWorkTable.propTypes = {
	// doneList: PropTypes.bool,
	works: PropTypes.array,
};
