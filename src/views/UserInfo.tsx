import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { setData, loading, loaded } from "./../store/personalDataReducer";
import { personal_data_tab } from "./../requests/getRequests";
import Grid from "@material-ui/core/Grid";
import SelectInput from "../component/UserInfo/SelectInput";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import UploadProfile from "../component/UserInfo/UploadProfile";
import Loading from "../component/Loading";
import { useEffect } from "react";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			"& > *": {
				margin: theme.spacing(1),
				textAlign: "right",
			},
			"& legend": {
				textAlign: "right",
			},
			"& .MuiInputLabel-formControl": {
				left: "unset",
				right: "21px",
			},
		},
		paper: {
			width: "90%",
			textAlign: "center",
			color: theme.palette.text.secondary,
		},
	})
);

const genderOption: string[] = ["مرد", "زن"];
const maritalStatusOption: string[] = ["مجرد", "متاهل"];
const cityOption: string[] = ["تهران"]; // this variable is for options of city select in userInfo form

const UserInfo = (props: any) => {
	const classes = useStyles();

	const phone: string = props.data.phone;
	const [fname, setFName] = useState(props.data.fname);
	const [lname, setLName] = useState(props.data.lname);
	const [nationalCode, setNationalCode] = useState(props.data.nationalCode);
	const [gender, setGender] = useState(props.data.gender);
	const [maritalStatus, setMaritalStatus] = useState(
		props.data.maritalStatus
	);
	const [city, setCity] = useState(props.data.city);
	const [neighborhood, setNeighborhood] = useState(props.data.neighborhood);
	const [address, setAddress] = useState(props.data.address);
	const [houseNumber, setHouseNumber] = useState(props.data.houseNumber);
	const [unitNumber, setUnitNumber] = useState(props.data.unitNumber);

	// this function is called when user edit fields of userInfo
	const handleTextInputChange = (e: any, setItem: any) => {
		setItem(e.target.value);
	};

	// this function is called when user submit userInfo form
	const handleFormSubmit = (e: any) => {
		// handle form submit
	};

	useEffect(function () {
		personal_data_tab()
			.then((res) => {
				props.setData(res);
				// setFName(props.data.fname);
				// setLName(props.data.lname);
				// setNationalCode(props.data.nationalCode);
				// setGender(props.data.gender);
				// setMaritalStatus(props.data.maritalStatus);
				// setCity(props.data.city);
				// setNeighborhood(props.data.neighborhood);
				// setAddress(props.data.address);
				// setHouseNumber(props.data.houseNumber);
				// setUnitNumber(props.data.unitNumber);
                props.loaded();
			})
			.catch((err) => {
				console.error(err);
			});
	},[props, props.isLoaded]);

	return props.isLoaded ? (
		<div>
			<UploadProfile avatar={props.data.avatar} />
			<form
				className={classes.root}
				autoComplete="off"
				onSubmit={handleFormSubmit}
			>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField
							id="firstName"
							value={fname}
							defaultValue={props.data.fname}
							className={classes.paper}
							label="نام"
							variant="outlined"
							InputProps={{
								value: fname,
								onChange: (e) => {
									setFName(e.target.value);
								},
							}}
							required
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							id="lastName"
							className={classes.paper}
							label="نام خانوادگی"
							variant="outlined"
							defaultValue={props.data.lname}
							color="primary"
							InputProps={{
								value: lname,
								onChange: (e) => {
									setLName(e.target.value);
								},
							}}
							required
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							id="nationalCode"
							className={classes.paper}
							label="کد ملی"
							defaultValue={props.data.nationalCode}
							type="tell"
							variant="outlined"
							InputProps={{
								value: nationalCode,
								onChange: (e) =>
									handleTextInputChange(e, setNationalCode),
							}}
							required
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							id="phone"
							className={classes.paper}
							label="شماره تماس"
							disabled
							defaultValue={props.data.phone}
							type={phone}
							InputProps={{
								value: phone,
								readOnly: true,
							}}
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<SelectInput
							label="جنسیت"
							field={gender}
							defaultValue={props.data.gender}
							setField={setGender}
							options={genderOption}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<SelectInput
							label="وضعیت تاهل"
							field={maritalStatus}
							defaultValue={props.data.maritalStatus}
							setField={setMaritalStatus}
							options={maritalStatusOption}
						/>
					</Grid>
					<Grid item xs={12}>
						<InputLabel> آدرس محل سکونت </InputLabel>
					</Grid>
					<Grid item xs={12} sm={6}>
						<SelectInput
							label="شهر"
							field={city}
							setField={setCity}
							options={cityOption}
                            defaultValue={props.data.city}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							id="neighborhood"
							className={classes.paper}
                            defaultValue={props.data.neighborhood}
							label="محله"
							InputProps={{
								value: neighborhood,
								onChange: (e) =>
									handleTextInputChange(e, setNeighborhood),
							}}
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="address"
							className={classes.paper}
							label="آدرس"
                            defaultValue={props.data.address}
							InputProps={{
								value: address,
								onChange: (e) =>
									handleTextInputChange(e, setAddress),
							}}
							variant="outlined"
						/>
					</Grid>

					{/* <Grid item xs={12} sm={6}>
						<TextField
							id="houseNumber"
							className={classes.paper}
							label="پلاک"
							type="number"
                            defaultValue={props.data.houseNumber}
							InputProps={{
								value: houseNumber,
								onChange: (e) =>
									handleTextInputChange(e, setHouseNumber),
							}}
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							id="unitNumber"
							className={classes.paper}
							label="واحد"
                            defaultValue={props.data.unitNumber}
							type="number"
							InputProps={{
								value: unitNumber,
								onChange: (e) =>
									handleTextInputChange(e, setUnitNumber),
							}}
							variant="outlined"
						/>
					</Grid> */}
				</Grid>

				{/*<WorkingConditions/>*/}
				<Button type="submit" variant="contained" color="primary">
					{" "}
					ثبت تغییرات{" "}
				</Button>
			</form>
		</div>
	) : (
		<Loading />
	);
};

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
		data: state.personalDataReducer.data,
		isLoaded: state.personalDataReducer.isLoaded,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
