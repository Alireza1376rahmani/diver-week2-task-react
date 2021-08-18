import React, {useState} from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Grid from '@material-ui/core/Grid';


import SelectInput from "../UserInfo/SelectInput";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                textAlign: 'right'
            },
            '& legend': {
                textAlign: 'right'
            },
            '& .MuiInputLabel-formControl': {
                left: 'unset',
                right: '21px',
            }
        },
        paper: {
            width: '90%',
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        h2: {
            marginTop: '50px',
            textAlign: 'right'
        },
        submit: {
            textAlign: 'center',

            '& button': {
                marginTop: '20px',
                padding: '10px 30px'
            }
        }
    }),
);

const genderOption: string[] = ['مرد', 'زن'];
const maritalStatusOption: string[] = ['مجرد', 'متاهل'];
const cityOption: string[] = ['تهران', 'کرج', 'ورامین'];  // this variable is for options of city select in userInfo form

const PersonalFormSignup = (props: any) => {
    const classes = useStyles();

    const phone: string = '09150000000';
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [nationalCode, setNationalCode] = useState('');
    const [gender, setGender] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [city, setCity] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [address, setAddress] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [unitNumber, setUnitNumber] = useState('');


    // this function is called when user edit fields of userInfo
    const handleTextInputChange = (e: any, setItem: any) => {
        setItem(e.target.value);
    }


    // this function is called when user submit userInfo form
    const handleFormSubmit = (e: any) => {
        // handle form submit
        props.setStatus("step1")
    }

    return (
        <div>
            <h2 className={classes.h2}>
                لطفا اطلاعات زیر را تکمیل نمایید
            </h2>
            <form className={classes.root} autoComplete="off" onSubmit={handleFormSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField id="firstName"
                                   className={classes.paper}
                                   label="نام"
                                   variant='outlined'
                                   InputProps={{
                                       value: fname,
                                       onChange: (e) => handleTextInputChange(e, setFName),
                                   }}
                                   required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="lastName"
                                   className={classes.paper}
                                   label="نام خانوادگی"
                                   variant='outlined'
                                   color='primary'
                                   InputProps={{
                                       value: lname,
                                       onChange: (e) => handleTextInputChange(e, setLName),
                                   }}
                                   required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="nationalCode"
                                   className={classes.paper}
                                   label="کد ملی" type='tel'
                                   variant='outlined'
                                   InputProps={{
                                       value: nationalCode,
                                       onChange: (e) => handleTextInputChange(e, setNationalCode),
                                   }}
                                   required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="phone"
                                   className={classes.paper}
                                   label="شماره تماس"
                                   type='number'
                                   InputProps={{
                                       value: phone,
                                       readOnly: true,
                                   }}
                                   variant='outlined'/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SelectInput label='جنسیت'
                                     field={gender}
                                     setField={setGender}
                                     options={genderOption}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SelectInput label='وضعیت تاهل'
                                     field={maritalStatus}
                                     setField={setMaritalStatus}
                                     options={maritalStatusOption}/>
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel> آدرس محل سکونت </InputLabel>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SelectInput label='شهر'
                                     field={city}
                                     setField={setCity}
                                     options={cityOption}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="neighborhood"
                                   className={classes.paper}
                                   label="محله"
                                   InputProps={{
                                       value: neighborhood,
                                       onChange: (e) => handleTextInputChange(e, setNeighborhood),
                                   }}
                                   variant='outlined' />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="address"
                                   className={classes.paper}
                                   label="آدرس"
                                   InputProps={{
                                       value: address,
                                       onChange: (e) => handleTextInputChange(e, setAddress),
                                   }}
                                   variant='outlined' />
                    </Grid>

                    {/* <Grid item xs={12} sm={6}>
                        <TextField id="houseNumber"
                                   className={classes.paper}
                                   label="پلاک"
                                   type='number'
                                   InputProps={{
                                       value: houseNumber,
                                       onChange: (e) => handleTextInputChange(e, setHouseNumber),
                                   }}
                                   variant='outlined' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="unitNumber"
                                   className={classes.paper}
                                   label="واحد"
                                   type='number'
                                   InputProps={{
                                       value: unitNumber,
                                       onChange: (e) => handleTextInputChange(e, setUnitNumber),
                                   }}
                                   variant='outlined' />
                    </Grid> */}
                </Grid>

                {/*<WorkingConditions/>*/}
                <div className={classes.submit}>
                    <Button type='submit' variant='contained' color='primary'> مرحله بعد </Button>
                </div>
            </form>

        </div>
    );
}


export default PersonalFormSignup;



