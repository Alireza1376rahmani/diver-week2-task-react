import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from "prop-types";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1),
        },
        formControl: {
            width: '90%',
            minWidth: 120,

            '& .MuiSelect-outlined.MuiSelect-outlined': {
                paddingLeft: '32px',
            },
            '& .MuiSelect-iconOutlined': {
                right: 'unset',
                left: '7px'
            }
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

const SelectInput = (props: any) => {
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        props.setField(event.target.value as string);
    };


    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple"> { props.label } </InputLabel>
                <Select
                    native
                    value={props.field}
                    defaultValue={props.defaultValue}
                    onChange={handleChange}
                    label={props.label}
                    required={true}
                >
                    <option aria-label="None" value="" />
                    {
                        props.options.map((option: string, key: number) => {
                            return <option key={key} value={ option }> {option} </option>
                        })
                    }
                </Select>
            </FormControl>
        </div>
    );
}


export default SelectInput;


SelectInput.propTypes = {
    label: PropTypes.string,
    field: PropTypes.string,
    setField: PropTypes.func,
    options: PropTypes.array,
    defaultValue : PropTypes.string
};