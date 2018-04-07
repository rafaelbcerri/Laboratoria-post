import React from "react";
import ReactDOM from "react-dom";
import Input from "../components/input.jsx";
import CardWrapper from "../components/cardWrapper.jsx";
import FlatButton from "../components/flatButton.jsx";

class Login extends React.Component {
    render() {
        return (
          <div className="row">
            <div className="col m6 offset-m3">
              <CardWrapper title="Login">
                <div>
                  <Input id="email" label="Email" type="text" icon="email" />
                  <Input id="password" label="Senha" type="password" icon="lock" />
                </div>
                <FlatButton text="Entrar" classes="teal-text"/>
              </CardWrapper>
            </div>
          </div>
        );
    }
}


ReactDOM.render(<Login />, document.getElementById("root"));
