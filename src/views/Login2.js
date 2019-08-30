import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import {
  Card,
  Container,
  Form,
  ListGroup,
  ListGroupItem,
  Row
} from "shards-react";
import axios from 'axios';
import PageTitle from "../components/common/PageTitle";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiAuthURL } from "../constants/defaultValues";
import { connected } from "../constants/defaultValues";


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { username: "", password: "", error: "" };
    this.onChangeUsernameHandler = this.onChangeUsernameHandler.bind(this);
    this.onChangePasswordHandler = this.onChangePasswordHandler.bind(this);
  }

  onChangeUsernameHandler(event) {
    this.setState({ username: event.target.value });
  }

  onChangePasswordHandler(event) {
    this.setState({ password: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
    this.setState({ error: "" });
    axios.post(apiAuthURL,
      {
        username: this.state.username,
        password: this.state.password,
        rememberMe: false
      })
      .then((response) => {

        localStorage.setItem("token", "Bearer " + response.data.id_token);
        this.props.history.push("/");
        window.location.reload();
      }).catch(e => {
        toast.error(e.message)
        this.setState({ error: "Login invalide!" })
      });
  }

  invalidStyle = {
    marginTop: '.25rem',
    fontSize: '80%',
    color: '#c4183c',
  };

  render() {
    if (connected) {
      return <Redirect to={"/"} />
    } else {
      return (
        <Container fluid className="main-content-container px-4">
          <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="Se connecter"
              className="text-sm-left" />
          </Row>
          <Card small className="mb-12">
            <ListGroup>
              <ListGroupItem>
                <br />
                <Form onSubmit={(event) => this.submitHandler(event)}>
                  <Container>
                    <div md="12" className="form-group">
                      <label htmlFor="username">Nom d'utilisateur</label>
                      <input type="text" id="username"
                        placeholder="username"
                        className="form-control" required
                        onChange={(event) => this.onChangeUsernameHandler(event)} />
                      <div style={this.invalidStyle}>{this.state.error}</div>
                      <br />
                      <label htmlFor="password">Mot de passe</label>
                      <input type="password" id="password"
                        placeholder="password"
                        className="form-control" required
                        onChange={(event) => this.onChangePasswordHandler(event)} />
                    </div>
                    <button className="mb-2 mr-1 btn btn-primary"
                      type="submit">Se connecter
                    </button>
                  </Container>
                </Form>
              </ListGroupItem>
            </ListGroup>
          </Card>
          <br />
          <ToastContainer />

        </Container>
      );
    }
  }
}

export default Login;
