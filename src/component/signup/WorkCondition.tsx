import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";

import RangeSlider from "../UserInfo/RangeSlider";
import Button from "@material-ui/core/Button";

import SingupCompleteDoneModal from "./SignupCompletDoneModal";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: "block",
			marginTop: "50px",
		},
		title: {
			textAlign: "right",
		},
		form: {
			"& > *": {
				margin: theme.spacing(1),
				textAlign: "right",
			},
		},
		formControl: {
			margin: theme.spacing(3),
			width: "100%",
		},
		submit: {
			textAlign: "center",
		},
	})
);

const SignupWorkConditions = (props: any) => {
	const classes = useStyles();
	const [state, setState] = useState({
		cleaningHouse: true, // نظافت منزل
		disinfectionPlaces: false, // ضدعفونی اماکن
		jointsCleaning: false, // نظافت مشاعات
		washingDishes: false, // شستن ظروف
		wallWashing: false, // دیوار شویی
		isPetFriendly: false,
	});
	let startTime: number = 8;
	let endTime: number = 17;
	const [workingHours, setWorkingHours] = useState<number[]>([
		startTime,
		endTime,
	]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	// this function is called when user submit userInfo form
	const handleFormSubmit = (e: any) => {
		// handle form submit
		e.preventDefault();
		// console.log('submit');
	};

	const {
		cleaningHouse,
		disinfectionPlaces,
		jointsCleaning,
		washingDishes,
		wallWashing,
		isPetFriendly,
	} = state;

	return (
		<div className={classes.root}>
			<h2 className={classes.title}>
				{" "}
				شرایط کاری مورد نظر را انتخاب کنید{" "}
			</h2>
			<form
				className={classes.form}
				autoComplete="off"
				onSubmit={handleFormSubmit}
			>
				<FormControl
					component="fieldset"
					className={classes.formControl}
				>
					<FormLabel component="legend">
						فعالیت های مورد نظر را انتخاب کنید
					</FormLabel>
					<FormGroup>
						<Grid container spacing={1}>
							<Grid item xs={12} sm={6}>
								<FormControlLabel
									control={
										<Checkbox
											checked={cleaningHouse}
											onChange={handleChange}
											name="cleaningHouse"
											color="primary"
										/>
									}
									label="نظافت منزل"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<FormControlLabel
									control={
										<Checkbox
											checked={disinfectionPlaces}
											onChange={handleChange}
											name="disinfectionPlaces"
											color="primary"
										/>
									}
									label="ضد عفونی اماکن"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<FormControlLabel
									control={
										<Checkbox
											checked={jointsCleaning}
											onChange={handleChange}
											name="jointsCleaning"
											color="primary"
										/>
									}
									label="نظافت مشاعات"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<FormControlLabel
									control={
										<Checkbox
											checked={washingDishes}
											onChange={handleChange}
											name="washingDishes"
											color="primary"
										/>
									}
									label="شستن ظروف"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<FormControlLabel
									control={
										<Checkbox
											checked={wallWashing}
											onChange={handleChange}
											name="wallWashing"
											color="primary"
										/>
									}
									label="دیوار شویی"
								/>
							</Grid>
							<Grid item xs={12} dir="ltr">
								<FormControlLabel
									label={
										isPetFriendly
											? "با حیوان خانگی مشکل دارم"
											: "با حیوان خانگی مشکل ندارم"
									}
									control={
										<Switch
											checked={isPetFriendly}
											onChange={handleChange}
											name="isPetFriendly"
											color="primary"
											aria-label="login switch"
										/>
									}
								/>
							</Grid>
							<Grid item xs={12} dir="ltr">
								<FormControlLabel
									control={<br />}
									label="بازه زمان کاری مورد نظر خود را مشخص کنید"
								/>
								<RangeSlider
									value={workingHours}
									setValue={setWorkingHours}
								/>
							</Grid>
						</Grid>
					</FormGroup>
				</FormControl>
				{/*<Button type='submit' variant='contained' color='primary'> ثبت </Button>*/}
				<div className="submit">
					<SingupCompleteDoneModal setStatus={props.setStatus} />
				</div>
			</form>
		</div>
	);
};

export default SignupWorkConditions;
