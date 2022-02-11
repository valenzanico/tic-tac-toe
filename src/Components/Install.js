import { Button } from '@material-ui/core';
import React, {Component} from 'react';
import './install.css'
import '@pwabuilder/pwainstall'


const Pwainstallc = (props) => {
    return (
        <div className="i-ex"><div className="i-in">Install PWA<br />
        <pwa-install manifestpath="/manifest.json" usecustom="true"></pwa-install>
        <Button id="pwa-i-bu" variant="contained" color="primary" onClick={props.pwainstallf}>install</Button></div></div>
    )
}

const Playstore = () => {
    return (
        <div className="i-ex"><div className="i-in">Install from Playstore<br />
        <p style={{fontSize : "16px",}}>Cooming soon</p></div></div>
    )
}


class Install extends Component {
    render() {
        function pwainstallf() {
            document.querySelector("pwa-install").openPrompt()
        }
        
        return(
            <div className="installpage">
                <h1 className="installtitle">Install tic tac toe</h1>
                <Pwainstallc pwainstallf={pwainstallf}/>
                <Playstore />
            </div>
            
        )
    }
}

export default Install