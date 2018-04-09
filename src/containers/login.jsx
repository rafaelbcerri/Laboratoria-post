import React from "react";
import { Provider, connect } from "react-redux";
import ReactDOM from "react-dom";
import Input from "../components/input.jsx";
import CardWrapper from "../components/cardWrapper.jsx";
import FlatButton from "../components/flatButton.jsx";
import * as LoginActions from "../actions/loginActions.js"
import store from '../store.js';

@connect((store) =>{
  return {
    email: store.login.email,
    password: store.login.password,
    userID: store.login.userID,
    error: store.login.error
  };
})
class Login extends React.Component {
  constructor(props){
    super(props);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmitting = this.handleSubmitting.bind(this);
    this.inputsValidation = this.inputsValidation.bind(this);
    this.handleErrorMessage = this.handleErrorMessage.bind(this);
  }
  handleEmailChange(event) {
    const email = event.target.value;
    this.props.dispatch(LoginActions.handleEmailChange(email));
  }
  handlePasswordChange(event) {
    const password = event.target.value;
    this.props.dispatch(LoginActions.handlePasswordChange(password));
  }
  handleSubmitting() {
    let isValid = !this.inputsValidation();
    if (isValid) {
      const {email, password} = this.props;
      this.props.dispatch(LoginActions.userLogin(email, password));
    }
  }
  inputsValidation() {
    let hasError = false;
    if (this.props.email.length === 0) {
      this.props.dispatch(LoginActions.handleEmailError());
      hasError = true;
    } else if (this.props.password.length === 0) {
      this.props.dispatch(LoginActions.handlePasswordError());
      hasError = true;
    }
    return hasError;
  }
  handleErrorMessage() {
    let error = "";
    switch (this.props.error) {
      case "email":
        error = "O campo do email deve ser preenchido";
        break;
      case "password":
        error = "O campo da senha deve ser preenchido";
        break;
      case "not_found":
        error = "Verifique se o email e senha estão corretos";
        break;
    }
    return error
  }
  render() {
    let errorMessage = this.handleErrorMessage();
    return (
      <div className="row">
        <div className="col m6 offset-m3">
          <CardWrapper title="Login">
            <div>
              <Input id="email" label="Email" type="text" icon="email" value={this.props.email} onChange={this.handleEmailChange} error={this.props.error == "email" || this.props.error == "not_found"} errorText={errorMessage}/>
              <Input id="password" label="Senha" type="password" icon="lock" value={this.props.password} onChange={this.handlePasswordChange} error={this.props.error == "password"} errorText={errorMessage}/>
            </div>
            <FlatButton text="Entrar" classes="teal-text" onClick={this.handleSubmitting}/>
          </CardWrapper>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Provider store={store}><Login /></Provider>, document.getElementById("root"));
