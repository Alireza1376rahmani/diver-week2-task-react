import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import { connect } from "react-redux";
import { setData, loading, loaded } from "./../../store/transactionReducer";
import Loading from "../Loading";
import { useEffect } from "react";
import {finantial_tab_transactions_table} from "./../../requests/getRequests"


const useStyles = makeStyles({
	table: {
		// minWidth: 650,
	},
	heading: {
		textAlign: "right",
		marginTop: "40px",
	},
});

// function createData(
// 	name: string,
// 	calories: number,
// 	fat: number,
// 	carbs: number,
// 	protein: number
// ) {
// 	return { name, calories, fat, carbs, protein };
// }

// const rows = [
// 	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
// 	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
// 	createData("Eclair", 262, 16.0, 24, 6.0),
// 	createData("Cupcake", 305, 3.7, 67, 4.3),
// 	createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

function TransactionTable(props: any) {
	const classes = useStyles();

    useEffect(()=>{
        finantial_tab_transactions_table().then((res)=>{
            props.setData(res);
            props.loaded()
        })
    })

	return props.isLoaded ? (
		<Box>
			<h2 className={classes.heading}>لیست حساب های بانکی</h2>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">عنوان</TableCell>
							<TableCell align="center">مبلغ (ریال)</TableCell>
							<TableCell align="center">تاریخ</TableCell>
							<TableCell align="center">کد تراکنش</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props.data.map((item: any) => (
							<TableRow key={item.paycode}>
								<TableCell align="center">
									{item.type}
								</TableCell>
								<TableCell align="center">
									{item.value}{" "}
									{item.type === "برداشت" ? "-" : "+"}
								</TableCell>
								<TableCell align="center">
									{item.date}
								</TableCell>
								<TableCell align="center">
									{item.paycode}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	) : <Loading/>;
}

function mapDispatchToProps(dispatch: any) {
	return {
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
        data:state.transactionReducer.data,
        isLoaded: state.transactionReducer.isLoaded
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(TransactionTable);
