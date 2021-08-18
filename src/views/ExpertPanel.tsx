import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";


import OrderManagement from "./OrderManagement";
import UserInfo from "./UserInfo";
import FinancialTab from '../component/financial/FinancialTab';

// import data
import {todoWorks, doneWorks} from "../assets/js/data";
import WorkingConditions from "../component/UserInfo/WorkingConditions";


interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper
    },
    tabs: {
        backgroundColor: theme.palette.background.default,
    }
}));

const ExpertPanel = (props: any) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <AppBar position="static" color="default">
                    <Tabs
                        className={classes.tabs}
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label="اطلاعات عمومی" {...a11yProps(0)} />
                        <Tab label="شرایط کاری" {...a11yProps(1)} />
                        <Tab label="مدارک (به زودی)" {...a11yProps(2)} disabled />
                        <Tab label="مدیریت مالی" {...a11yProps(3)} />
                        <Tab label="مدیریت سفارشات" {...a11yProps(4)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <UserInfo/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <WorkingConditions/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <FinancialTab/>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <OrderManagement  />
                </TabPanel>
            </Container>
        </div>
    );
}

function mapDispatchToProps(dispatch: any) {
	return {
		// setData: (data: any) => {
		// 	dispatch(setData(data));
		// },
		// loading: () => {
		// 	dispatch(loading({}));
		// },
		// loaded: () => {
		// 	dispatch(loaded({}));
		// },
	};
}
function mapStateToProps(state: any, myProps: any) {
	return {
		// bugs: state.bugs,
        status:state.appReducer.info.status
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(ExpertPanel);