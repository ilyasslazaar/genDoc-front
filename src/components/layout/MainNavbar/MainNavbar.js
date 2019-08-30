import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Container, Navbar } from "shards-react";
import { Redirect } from "react-router-dom";
import { connected } from "../../../constants/defaultValues";

const MainNavbar = ({ stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );

  const onLoginHandler = () => {
    return <Redirect to="/login" />;
  };

  const onLogoutHandler = () => {
    localStorage.removeItem("token");
  };

  const userButton =
    <div className="ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0">
      {
        connected ? <a href="/">
          <button className="mb-2 mr-1 btn btn-danger pull-right float-right"
            onClick={onLogoutHandler}>Se déconnecter
            </button>
        </a> :
          <a href="/login" className="ql-align-right">
            <button className="mb-2 mr-1 btn btn-primary pull-right float-right"
              onClick={onLoginHandler}>Se connecter
            </button>
          </a>
      }
    </div>;

  return (
    <div className={classes}>
      <Container className="p-0">
        <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
          <div className="container-fluid ql-align-right">
            {userButton}
          </div>
        </Navbar>
      </Container>
    </div>
  );
};

MainNavbar.propTypes = { layout: PropTypes.string, stickyTop: PropTypes.bool };

MainNavbar.defaultProps = { stickyTop: true };

export default MainNavbar;
