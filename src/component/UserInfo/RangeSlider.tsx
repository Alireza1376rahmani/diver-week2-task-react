import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: '350px',
        margin: 'auto'
    },
    rangeText: {
        marginTop: '20px'
    }
});

function valuetext(value: number) {
    return `${value} ساعت `;
}

const RangeSlider = (props: any) => {
    const classes = useStyles();
    // const [value, setValue] = useState<number[]>([20, 37]);

    const handleChange = (event: any, newValue: number | number[]) => {
        props.setValue(newValue as number[]);
    };

    return (
        <div className={classes.root}>
            <Typography className={classes.rangeText} id="range-slider" gutterBottom>
                از ساعت
                <span> { props.value[0] } </span>
                تا ساعت
                <span> { props.value[1] } </span>
            </Typography>
            <Slider
                value={props.value}
                min={0}
                max={24}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}

export default RangeSlider;


