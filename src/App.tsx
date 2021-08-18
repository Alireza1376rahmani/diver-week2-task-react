import React from 'react';
import {MuiThemeProvider, createTheme} from '@material-ui/core/styles';
import ExpertPanel from "./views/ExpertPanel";
import Header from "./component/Header"

import './App.css';
import SimpleForm from "./component/UserInfo/ProfileSendForm";
import { useState } from 'react';
import PersonalFormSignup from './component/signup/PersonalForm';
import WorkCondition from "./component/signup/WorkCondition"


const theme = createTheme({
    palette: {
        primary: {
            main: '#1e90ff',
            dark: '#006ed9',
            light: '#73baff'
        },
        secondary: {main: '#ff7f50'},
        error: {main: '#ff4757'},
        info: {main: '#70a1ff'},
        success: {main: '#2ed573'},
        warning: {main: '#f9b115'},
        background: {
            default: '#ebedef',
            paper: '#fcfcfc'
        },
        text: {
            primary: '#333',
            secondary: '#777'
        }

    },
    typography: {
        fontFamily: 'Vazir'
    }
});

function App() {

    const [status,setStatus] = useState("step0")


    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>
                <Header/>
                {status==="step0" && <PersonalFormSignup setStatus={setStatus}/>}
                {status==="step1" && <WorkCondition setStatus={setStatus}/>}
                {status==="step2" && <ExpertPanel />}
                
            </MuiThemeProvider>
        </div>
    );
}

export default App;
