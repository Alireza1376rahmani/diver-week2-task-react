import React from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import {
	createStyles,
	makeStyles,
	withStyles,
	Theme,
} from "@material-ui/core/styles";
import {
	Box,
	Button,
	FormControl,
	InputAdornment,
	InputBase,
	InputLabel,
	MenuItem,
	Select,
} from "@material-ui/core";
import { useState } from "react";

const BootstrapInput = withStyles((theme: Theme) =>
	createStyles({
		root: {
			"label + &": {
				marginTop: theme.spacing(3),
			},
		},
		input: {
			borderRadius: 4,
			position: "relative",
			backgroundColor: theme.palette.background.paper,
			border: "1px solid #ced4da",
			fontSize: 16,
			padding: "10px 26px 10px 12px",
			transition: theme.transitions.create([
				"border-color",
				"box-shadow",
			]),
			// Use the system font instead of the default Roboto font.
			fontFamily: [
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(","),
			"&:focus": {
				borderRadius: 4,
				borderColor: "#80bdff",
				boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
			},
		},
	})
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		margin: {
			margin: theme.spacing(1),
		},
		root: {
			"& > *": {
				margin: theme.spacing(1),
				textAlign: "right",
			},
			"& .PrivateNotchedOutline-legendLabelled-13": {
				textAlign: "right",
			},
			"& .MuiInputLabel-formControl": {
				left: "unset",
				right: "21px",
			},
		},
		paper: {
			textAlign: "center",
			color: theme.palette.text.secondary,
			minWidth: "250px",
		},
		submitbtn: {
			margin: 5,
		},
        
	})
);

function WithdrawForm(props: any) {
	const classes = useStyles();

	function submitHandler(e: React.SyntheticEvent) {
		e.preventDefault();
	}

	function error(e: any) {
		// console.log(props.credit);
		// console.log(Number(e.target.value));
	}

	const [amount, setAmount] = useState("");
	const [account, setAccount] = useState("");

	return (
		<>
			<form
				id="myform"
				onSubmit={submitHandler}
				className={classes.root}
				noValidate
				autoComplete="off"
			>
				<Box
					display="flex"
					justifyContent="space-around"
					alignItems="center"
				>
					<TextField
						required
						id="standard-required"
						label="مبلغ"
						className={classes.paper}
						onChange={(e) => {
							Number(e.target.value) < props.credit
								? setAmount(e.target.value)
								: error(e);
						}}
						value={amount}
						InputProps={{
							endAdornment: (
								<InputAdornment position="start">
									ریال
								</InputAdornment>
							),
						}}
					/>
					{/* <TextField
						disabled
						id="standard-disabled"
						label="Disabled"
						defaultValue="Hello World"
					/> */}
					{/* <TextField
						id="filled-helperText"
						label="Helper text"
						defaultValue="Default Value"
						helperText="Some important text"
						variant="filled"
					/> */}
					<FormControl>
						<InputLabel id="demo-customized-select-label">
							شماره حساب
						</InputLabel>
						<Select
							className={classes.paper}
							labelId="demo-customized-select-label"
							id="demo-customized-select"
							value={account}
							onChange={(
								e: React.ChangeEvent<{ value: unknown }>
							) => {
								setAccount(e.target.value as string);
							}}
							input={<BootstrapInput />}
						>
                            {/* <MenuItem value={""}>شماره حساب را انتخاب کنید</MenuItem> */}
							{props.bankAccounts.map((acc: any) => {
								return (
									<MenuItem value={acc.id}>
										{" "}
										<span> {acc.bank} </span>{" "}
										<span> {acc.accountNumber} </span>{" "}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</Box>
				<br></br>
				<Button
					className="submitbtn"
					variant="contained"
					color="primary"
					type="submit"
					form="myform"
				>
					پردازش برداشت
				</Button>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
			</form>
		</>
	);
}
function mapDispatchToProps(dispatch: any) {
	return {
		// addBug: (description: string) => {
		// 	dispatch(addBug({ description }));
		// }
	};
}
function mapStateToProps(state: any, myProps: any) {
	return {
		// bugs: state.bugs,
        bankAccounts : state.bankAccountReducer.data,

	};
}
export default connect(mapStateToProps,mapDispatchToProps)(WithdrawForm);
