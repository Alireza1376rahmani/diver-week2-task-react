import React from "react";

import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import { finantial_tab_basic_info } from "./../../requests/getRequests";
// import TransactionTable from "./TransactionTable";
import { Box, makeStyles } from "@material-ui/core";
import TransactionTable from "./TransactionTable";
import BankAccountTable from "./BankAccountTable";
import WithdrawForm from "./WithdrawForm";
import { connect } from "react-redux";
import Loading from "../Loading";
import { useEffect } from "react";
import { setData, loading, loaded } from "../../store/financialReducer";

const useStyles = makeStyles({
	icon: {
		fontSize: "70px",
	},
	h3: {
		// display:"inline-block"
		// margin: spacing()
	},
	credit: {
		marginBottom: "20px",
	},
	number: {
		fontSize: "22px",
		// fontWeight :"fontWeightRegular"
	},
});

function FinancialTab(props: any) {
	const classes = useStyles();
	const withdrawable = Number(props.credit) - 50000;

	useEffect(() => {
		finantial_tab_basic_info()
			.then((res) => {
				props.setData(res);
				props.loaded();
				// console.log("useEffect az financial tab");
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return props.isLoaded ? (
		<>
			<Box
				display="flex"
				justifyContent="space-between"
				className={classes.credit}
			>
				<Box className="income" display="flex" alignItems="center">
					<LocalAtmIcon className={classes.icon} />
					&nbsp;
					<h2>درآمد این ماه : </h2>
					&nbsp;&nbsp;&nbsp;
					<span className={classes.number}>{props.income}</span>
					&nbsp;
					<span>ریال</span>
				</Box>
				<Box className="credit" display="flex" alignItems="center">
					{/* <LocalAtmIcon className={classes.icon} /> */}
					<CreditCardIcon className={classes.icon} />
					&nbsp;
					<h2>موجودی کیف پول : </h2>
					&nbsp;&nbsp;&nbsp;
					<span className={classes.number}>{props.credit}</span>
					&nbsp;
					<span>ریال</span>
				</Box>
			</Box>
			<Box className="transactions">
				<TransactionTable />
			</Box>
			<Box>
				<BankAccountTable />
			</Box>
			<Box>
				<h2>برداشت وجه </h2>
				<Box className="credit" display="flex" alignItems="center">
					{/* <LocalAtmIcon className={classes.icon} /> */}
					<CreditCardIcon className={classes.icon} />
					&nbsp;
					<h2>مبلغ قابل برداشت : </h2>
					&nbsp;&nbsp;&nbsp;
					<span className={classes.number}>
						{withdrawable < 0 ? 0 : withdrawable}
					</span>
					&nbsp;
					<span>ریال</span>
				</Box>
				<Box textAlign="center">
					<WithdrawForm credit={withdrawable} />
				</Box>
			</Box>
		</>
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
		credit: state.financialReducer.data.credit,
		income: state.financialReducer.data.income,
		isLoaded: state.financialReducer.isLoaded,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(FinancialTab);
