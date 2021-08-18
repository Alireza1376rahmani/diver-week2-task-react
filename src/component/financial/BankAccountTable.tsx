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
import { setData, loading, loaded } from "./../../store/bankAccountReducer";
import Loading from "../Loading";
import { useEffect } from "react";
import {finantial_tab_bank_account_table} from "./../../requests/getRequests"
const useStyles = makeStyles({
	table: {
		// minWidth: 650,
	},
	heading: {
		textAlign: "right",
		marginTop: "40px",
	},
});

function BankAccountTable(props: any) {
	const classes = useStyles();

    useEffect(()=>{
        finantial_tab_bank_account_table().then((res)=>{
            props.setData(res)
            props.loaded()
        }).catch()
    },[])

	return props.isLoaded ? (
		<Box>
			<h2 className={classes.heading}>لیست تراکنش ها</h2>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">صاحب حساب</TableCell>
							<TableCell align="center">بانک</TableCell>
							<TableCell align="center">شماره حساب</TableCell>
							<TableCell align="center">شماره شبا</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props.data.map((item: any) => (
							<TableRow key={item.paycode}>
								<TableCell align="center">
									{item.owner}
								</TableCell>
								<TableCell align="center">
									{item.bank}
								</TableCell>
								<TableCell align="center">
									{item.accountNumber}
								</TableCell>
								<TableCell align="center">
									{item.shaba}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	) : (
		<Loading />
	);
}

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
		data: state.bankAccountReducer.data,
		isLoaded: state.bankAccountReducer.isLoaded,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(BankAccountTable);
