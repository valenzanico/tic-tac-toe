import React from "react";
import '@pwabuilder/pwaauth';

const Login = (props) => {
    const {loggedf} = props
    return (
      <pwa-auth id="g-signin2" onClick={loggedf}
        appearance="list"
      googlekey="926693198610-ru2u4c4k7eembib9lu1r73muso7ob1e7.apps.googleusercontent.com"
      facebookKey="3461585553909146">
  </pwa-auth>
    )
  };

export default Login