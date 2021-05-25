import React from "react";
import { connect } from "react-redux";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import * as classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      {props.isUserLoggedIn ? (
        <Dashboard />
      ) : (
        <React.Fragment>
          <div className={classes.Logo}>Note-Keep</div>
          <div className={classes.Login}>
            <Login />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isUserLoggedIn: !!state.auth.loggedInUserEmail,
});

export default connect(mapStateToProps, null)(Layout);
