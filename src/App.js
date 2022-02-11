import Game from "./Components/Game";
import React, { Component } from "react";
import Sidenav from "./Components/Sidenav";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Route, Switch } from "react-router-dom";
import Switchm from '@material-ui/core/Switch';
import Install from './Components/Install';
import Privacypolicy from './Components/Privacypolicy';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0000FF',
    },
    secondary: {
      main: '#81d4faF',
    },
  },
});

class App extends Component {
  state = {
    logdate: [
      {
        name: "",
        email: "",
        photo: "",
        namep: "User",
        emailp: "Email",
      },
    ],
    chuserdisabled: false,
    turns: [
      {
        a: "X",
        b: "O",
      },
    ],
  }

  logged = async () => {
    const pwaAuth = document.querySelector("pwa-auth");
  pwaAuth.addEventListener("signin-completed", ev => {
    const signIn = ev.detail;
    console.log("Email: ", signIn.email);
    console.log("Name: ", signIn.name);
    console.log("Picture: ", signIn.imageUrl);
    console.log("ID token: ", signIn.providerData.xc.id_token);
    console.log("Provider: ", signIn.provider);
    this.setState({"logdate": [{
      name: signIn.name,
      email: signIn.email,
      photo: signIn.imageUrl,
    },
    ],});
    });
  }

  disablechuser = () => {
    if (this.state.chuserdisabled===false) {
      this.setState({chuserdisabled:true,})
    }
    else {
      this.setState({chuserdisabled:false,})
    }
  }

  changeuser = () => {
    if (this.state.turns[0].a==="X") {
      this.setState({"turns": [
        {
          a: "O",
          b: "X",
        },
      ],
    })
    }
    else {
      this.setState({"turns": [
          {
            a: "X",
            b: "O",
          },
        ],
      })
    }
  }
  render() {
    return (
      <div className="main">
        <ThemeProvider theme={theme}>
      
        
        <Sidenav loggedf={this.logged} logdata={this.state.logdate}/>
        
        <Switch>
        <Route exact path="/" render={() => (
          <div className="gamebody">
          <div className="ExtContainer">
            <span>{this.state.logdate[0].namep}{this.state.logdate[0].name} vs Guest</span><br/>
            X<Switchm onChange={this.changeuser} disabled={this.state.chuserdisabled} color="primary"></Switchm>O
          <Game gameturns={this.state.turns} disablechuser={this.disablechuser} switchdisable={this.state.chuserdisabled} />
          </div></div>
        )} />
        <Route path="/install" render={() => (<Install />)} />
        <Route path="/privacypolicy" render={() => (<Privacypolicy />)} />
        </Switch>
        </ThemeProvider>
      </div>
      
    );
  }
}

export default App;
