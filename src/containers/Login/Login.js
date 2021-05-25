import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { loginStart } from "../../store/actions/auth.actions";

import * as classes from "./Login.module.css";

const Login = (props) => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = re.test(loginDetails.email.toLowerCase());
    setIsFormValid(isEmailValid);
  }, [loginDetails]);

  const handleEmailChange = useCallback(
    (event) => {
      const email = event.target.value;
      setLoginDetails({ ...loginDetails, email });
    },
    [loginDetails]
  );

  const handlePasswordChange = useCallback(
    (event) => {
      const password = event.target.value;
      setLoginDetails({ ...loginDetails, password });
    },
    [loginDetails]
  );

  const { loginStart } = props;

  const login = useCallback(() => {
    loginStart(loginDetails);
  }, [loginStart, loginDetails]);

  return (
    <div className={classes.Login}>
      <div className={classes.LoginTitle}>Login</div>
      {props.isLoginFailed ? (
        <div className={classes.LoginErrors}>{props.loginFailedReason}</div>
      ) : null}
      <Input
        type="email"
        placeholder="Email"
        handleChange={handleEmailChange}
        disabled={props.isLoginProgress}
        className={classes.InputBlock}
        inputBlockClassName={classes.InputHost}
        inputClassName={classes.Input}
      />
      <Input
        placeholder="Password"
        type="password"
        handleChange={handlePasswordChange}
        disabled={props.isLoginProgress}
        className={classes.InputBlock}
        inputBlockClassName={classes.InputHost}
        inputClassName={classes.Input}
      />
      <div className={classes.LoginActions}>
        <Button
          text="LOG IN"
          className={classes.LoginButton}
          disabled={props.isLoginProgress || !isFormValid}
          onClick={login}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoginProgress: state.auth.isLoginProgress,
  isLoginFailed: state.auth.isLoginFailed,
  loginFailedReason: state.auth.loginFailedReason,
});

const mapDispatchToProps = (dispatch) => ({
  loginStart: (loginDetails) => dispatch(loginStart(loginDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
