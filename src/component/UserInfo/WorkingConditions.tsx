import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";
import { connect } from "react-redux";
import { work_condition_tab } from "./../../requests/getRequests";

import RangeSlider from "./RangeSlider";
import Button from "@material-ui/core/Button";

import {
	setData,
	loading,
	loaded,
} from "./../../store/workingConditionsReducer";
import Loading from "../Loading";
import { useEffect } from "react";
import { Box } from "@material-ui/core";

// import { boolean } from "yargs";

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
	})
);

const WorkingConditions = (props: any) => {
	const classes = useStyles();
	const [isPetFriendly, setIsPetFriendly] = useState(props.isPetFriendly);
	const [works, setWorks] = useState({
		cleaningHouse: true, // نظافت منزل
		disinfectionPlaces: true, // ضدعفونی اماکن
		jointsCleaning: false, // نظافت مشاعات
		washingDishes: true, // شستن ظروف
		wallWashing: false, // دیوار شوی
	});
	// {
	// cleaningHouse: true,  // نظافت منزل
	// disinfectionPlaces: false,  // ضدعفونی اماکن
	// jointsCleaning: false,  // نظافت مشاعات
	// washingDishes: false,  // شستن ظروف
	// wallWashing: false,  // دیوار شویی
	// isPetFriendly: false,
	// }

	useEffect(() => {
		work_condition_tab()
			.then((res: any) => {
				props.setData(res);
				setWorkingHours([props.startTime, props.endTime]);
                setWorks(props.works);
                props.loaded();
			})
			.catch((err) => {
				console.log("err az seerver work conditions ", err);
			});
	}, []);

	const [workingHours, setWorkingHours] = useState<number[]>([
		props.startTime,
		props.endTime,
	]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setWorks({ ...works, [event.target.name]: event.target.checked });
	};

	// this function is called when user submit userInfo form
	const handleFormSubmit = (e: any) => {
		// handle form submit
		props.setData({
			works,
			isPetFriendly,
			startTime: workingHours[0],
			endTime: workingHours[1],
		});
	};

	// let {
	// 	cleaningHouse,
	// 	disinfectionPlaces,
	// 	jointsCleaning,
	// 	washingDishes,
	// 	wallWashing,
	// } = props.works;

	return props.isLoaded ? (
		<Box className={classes.root}>
			<h2 className={classes.title}>
				{" "}
				شرایط کاری مورد نظر را انتخاب نمایید{" "}
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
											checked={
												works
													? works.cleaningHouse
													: false
											}
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
											checked={
												works
													? works.disinfectionPlaces
													: false
											}
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
											checked={
												works
													? works.jointsCleaning
													: false
											}
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
											checked={
												works
													? works.washingDishes
													: false
											}
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
											checked={
												works
													? works.wallWashing
													: false
											}
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
											onChange={(e: any) => {
												setIsPetFriendly(
													e.target.checked
												);
											}}
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
				<Button type="submit" variant="contained" color="primary">
					{" "}
					ثبت تغییرات{" "}
				</Button>
			</form>
		</Box>
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
		works: state.workingConditionsReducer.data.works,
		isPetFriendly: state.workingConditionsReducer.data.isPetFriendly,
		startTime: state.workingConditionsReducer.data.startTime,
		endTime: state.workingConditionsReducer.data.endTime,
		isLoaded: state.workingConditionsReducer.isLoaded,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkingConditions);
