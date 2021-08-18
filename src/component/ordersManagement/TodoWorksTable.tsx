import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// import material ui component
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { setData, loading, loaded } from "./../../store/todoWorkReducer";
import { works_todo } from "./../../requests/getRequests";
import ModalDetailTodoWork from "./ModalDetailTodoWork";

import "../../assets/css/ordersManagement/todoWork.css";
import Loading from "../Loading";
import { useEffect } from "react";

const useStyles = makeStyles((theme) =>
	createStyles({
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
	})
);

// // this interface is for payload types
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

const TodoWorksTable = (props: any) => {
	const classes = useStyles();

	useEffect(() => {
		works_todo().then((res) => {
			props.setData(res);
			props.loaded();
		});
	}, [props]);

	const handleCancell = (e: any, id: number) => {
		// handle code for cancell todo work button
	};

	const handleCompleteWordBtn = (e: any, id: number) => {
		// handle code for get complete work button
	};

	return props.isLoaded ? (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell className={classes.th}>
							{" "}
							عنوان سفارش{" "}
						</TableCell>
						<TableCell className={classes.th}> متراز </TableCell>
						{/* {addDoneWorkTableColumn("th")}   */}
						<TableCell className={classes.th}> مبلغ </TableCell>
						<TableCell className={classes.th}> ساعت </TableCell>
						<TableCell className={classes.th}> عملیات </TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.works.map((row: any) => (
						<TableRow key={row.id}>
							<TableCell className={classes.td}>
								{row ? row.service : ""}
							</TableCell>
							<TableCell className={classes.td}>
								{row.area}
							</TableCell>
							<TableCell className={classes.td}>
								{row["date"]}
							</TableCell>
							<TableCell className={classes.td}>
								{row.amount}
							</TableCell>
							<TableCell className={classes.td}>
								{row.workTime}
							</TableCell>
							<TableCell className={classes.td + " button__cell"}>
								{/* {showOperationButton(row)} */}
								<Button
									variant="contained"
									color="secondary"
									onClick={(e) => handleCancell(e, row.id)}
								>
									{" "}
									کنسل کردن{" "}
								</Button>
								<ModalDetailTodoWork detail={row} />
								<Button
									variant="contained"
									onClick={(e) =>
										handleCompleteWordBtn(e, row.id)
									}
								>
									{" "}
									اتمام کار{" "}
								</Button>
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
		works: state.todoWorkReducer.data,
		isLoaded: state.todoWorkReducer.isLoaded,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoWorksTable);

TodoWorksTable.propTypes = {
	// doneList: PropTypes.bool,
	works: PropTypes.array,
};
